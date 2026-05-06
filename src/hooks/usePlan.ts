"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "dark28-plan";
const DIRECTION_KEY = "dark28-plan-direction";
const PLAN_EVENT = "dark28-plan-updated";

const EMPTY_PLAN: number[] = [];
const DEFAULT_DIRECTION = "co-to-mm";

type PlanStoreSnapshot = {
  plannedIds: number[];
  direction: string;
};

const EMPTY_SNAPSHOT: PlanStoreSnapshot = {
  plannedIds: EMPTY_PLAN,
  direction: DEFAULT_DIRECTION,
};

let cachedPlanRaw = "";
let cachedDirectionRaw = "";
let cachedSnapshot: PlanStoreSnapshot = EMPTY_SNAPSHOT;

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

function parseDirection(raw: string | null): string {
  if (raw === "co-to-mm" || raw === "mm-to-co") {
    return raw;
  }

  return DEFAULT_DIRECTION;
}

function getCurrentPlanRaw(): string {
  if (typeof window === "undefined") return "";

  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "";
  } catch (error) {
    console.error("Failed to read plan from localStorage:", error);
    return "";
  }
}

function getCurrentDirectionRaw(): string {
  if (typeof window === "undefined") return DEFAULT_DIRECTION;

  try {
    return window.localStorage.getItem(DIRECTION_KEY) ?? DEFAULT_DIRECTION;
  } catch (error) {
    console.error("Failed to read direction from localStorage:", error);
    return DEFAULT_DIRECTION;
  }
}

function getSnapshot(): PlanStoreSnapshot {
  const planRaw = getCurrentPlanRaw();
  const directionRaw = getCurrentDirectionRaw();

  if (planRaw === cachedPlanRaw && directionRaw === cachedDirectionRaw) {
    return cachedSnapshot;
  }

  cachedPlanRaw = planRaw;
  cachedDirectionRaw = directionRaw;

  cachedSnapshot = {
    plannedIds: parsePlan(planRaw),
    direction: parseDirection(directionRaw),
  };

  return cachedSnapshot;
}

function getServerSnapshot(): PlanStoreSnapshot {
  return EMPTY_SNAPSHOT;
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
    window.dispatchEvent(new Event(PLAN_EVENT));
  } catch (error) {
    console.error("Failed to save plan to localStorage:", error);
  }
}

function writeDirection(nextDirection: string) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(DIRECTION_KEY, nextDirection);
    window.dispatchEvent(new Event(PLAN_EVENT));
  } catch (error) {
    console.error("Failed to save direction to localStorage:", error);
  }
}

export function usePlan() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const { plannedIds, direction } = snapshot;

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

  function setDirection(nextDirection: string) {
    if (nextDirection !== "co-to-mm" && nextDirection !== "mm-to-co") {
      return;
    }

    writeDirection(nextDirection);
  }

  function clearPlan() {
    writePlan([]);
  }

  return {
    plannedIds,
    direction,
    addToPlan,
    removeFromPlan,
    togglePlan,
    isPlanned,
    setDirection,
    clearPlan,
  };
}