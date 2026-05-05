"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "dark28-plan";
const PLAN_EVENT = "dark28-plan-updated";
const EMPTY_PLAN: number[] = [];

let cachedRaw = "";
let cachedPlan: number[] = EMPTY_PLAN;

function parsePlan(raw: string | null): number[] {
  if (!raw) return EMPTY_PLAN;

  try {
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) return EMPTY_PLAN;

    return parsed.filter((item): item is number => typeof item === "number");
  } catch (error) {
    console.error("Failed to parse plan from localStorage:", error);
    return EMPTY_PLAN;
  }
}

function getCurrentRaw(): string {
  if (typeof window === "undefined") return "";

  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "";
  } catch (error) {
    console.error("Failed to read plan from localStorage:", error);
    return "";
  }
}

function getSnapshot(): number[] {
  const raw = getCurrentRaw();

  if (raw === cachedRaw) {
    return cachedPlan;
  }

  cachedRaw = raw;
  cachedPlan = parsePlan(raw);

  return cachedPlan;
}

function getServerSnapshot(): number[] {
  return EMPTY_PLAN;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleChange = () => {
    callback();
  };

  window.addEventListener("storage", handleChange);
  window.addEventListener(PLAN_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(PLAN_EVENT, handleChange);
  };
}

function writePlan(nextIds: number[]) {
  if (typeof window === "undefined") return;

  const uniqueIds = Array.from(new Set(nextIds));
  const nextRaw = JSON.stringify(uniqueIds);

  try {
    window.localStorage.setItem(STORAGE_KEY, nextRaw);

    cachedRaw = nextRaw;
    cachedPlan = uniqueIds;

    window.dispatchEvent(new Event(PLAN_EVENT));
  } catch (error) {
    console.error("Failed to save plan to localStorage:", error);
  }
}

export function usePlan() {
  const plannedIds = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  function addToPlan(id: number) {
    if (plannedIds.includes(id)) return;
    writePlan([...plannedIds, id]);
  }

  function removeFromPlan(id: number) {
    writePlan(plannedIds.filter((item) => item !== id));
  }

  function togglePlan(id: number) {
    if (plannedIds.includes(id)) {
      writePlan(plannedIds.filter((item) => item !== id));
      return;
    }

    writePlan([...plannedIds, id]);
  }

  function isPlanned(id: number) {
    return plannedIds.includes(id);
  }

  return {
    plannedIds,
    addToPlan,
    removeFromPlan,
    togglePlan,
    isPlanned,
  };
}