"use client";

import { usePlan } from "@/hooks/usePlan";

type PlanButtonProps = {
  landmarkId: number;
};

export default function PlanButton({ landmarkId }: PlanButtonProps) {
  const { togglePlan, isPlanned } = usePlan();

  const planned = isPlanned(landmarkId);

  return (
    <button
      type="button"
      onClick={() => togglePlan(landmarkId)}
      className={`rounded-full px-3 py-2 text-sm font-bold ${
        planned
          ? "bg-(--color-text) text-(--color-bg)"
          : "bg-(--color-yellow) text-black"
      }`}
    >
      {planned ? "Remove from plan" : "Add to plan"}
    </button>
  );
}