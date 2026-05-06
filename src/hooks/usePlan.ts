"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "dark28-plan";
const DIRECTION_KEY = "dark28-plan-direction";
const PLAN_EVENT = "dark28-plan-updated";

const EMPTY_PLAN: number[] = [];
const DEFAULT_DIRECTION = "co-to-mm";

const VISITED_KEY = "dark28-visited";
const EMPTY_VISITED: number[] = [];

type PlanStoreSnapshot = {
  plannedIds: number[];
  visitedIds: number[];
  direction: string;
};

const EMPTY_SNAPSHOT: PlanStoreSnapshot = {
  plannedIds: EMPTY_PLAN,
  visitedIds: EMPTY_VISITED,
  direction: DEFAULT_DIRECTION,
};

let cachedPlanRaw = "";
let cachedVisitedRaw = "";
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

function parseVisited(raw: string | null): number[] {
  if (!raw) return EMPTY_VISITED;

  try {
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) return EMPTY_VISITED;

    return parsed.filter((item): item is number => typeof item === "number");
  } catch (error) {
    console.error("Failed to parse visited from localStorage:", error);
    return EMPTY_VISITED;
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

function getCurrentVisitedRaw(): string {
  if (typeof window === "undefined") return "";

  try {
    return window.localStorage.getItem(VISITED_KEY) ?? "";
  } catch (error) {
    console.error("Failed to read visited from localStorage:", error);
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
  const visitedRaw = getCurrentVisitedRaw();
  const directionRaw = getCurrentDirectionRaw();

  if (
    planRaw === cachedPlanRaw &&
    visitedRaw === cachedVisitedRaw &&
    directionRaw === cachedDirectionRaw
  ) {
    return cachedSnapshot;
  }

  cachedPlanRaw = planRaw;
  cachedVisitedRaw = visitedRaw;
  cachedDirectionRaw = directionRaw;

  cachedSnapshot = {
    plannedIds: parsePlan(planRaw),
    visitedIds: parseVisited(visitedRaw),
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

function writeVisited(nextIds: number[]) {
  if (typeof window === "undefined") return;

  const uniqueIds = Array.from(new Set(nextIds));
  const nextRaw = JSON.stringify(uniqueIds);

  try {
    window.localStorage.setItem(VISITED_KEY, nextRaw);
    window.dispatchEvent(new Event(PLAN_EVENT));
  } catch (error) {
    console.error("Failed to save visited to localStorage:", error);
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

  const { plannedIds, visitedIds, direction } = snapshot;

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

  function addVisited(id: number) {
    if (visitedIds.includes(id)) return;
    writeVisited([...visitedIds, id]);
  }

  function removeVisited(id: number) {
    writeVisited(visitedIds.filter((item) => item !== id));
  }

  function toggleVisited(id: number) {
    if (visitedIds.includes(id)) {
      writeVisited(visitedIds.filter((item) => item !== id));
      return;
    }

    writeVisited([...visitedIds, id]);
  }

  function isVisited(id: number) {
    return visitedIds.includes(id);
  }

  function clearVisited() {
    writeVisited([]);
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
    visitedIds,
    direction,
    addToPlan,
    removeFromPlan,
    togglePlan,
    isPlanned,
    setDirection,
    clearPlan,
    addVisited,
    removeVisited,
    toggleVisited,
    isVisited,
    clearVisited,
  };
}