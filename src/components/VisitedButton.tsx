"use client";

import { usePlan } from "@/hooks/usePlan";

type VisitedButtonProps = {
  landmarkId: number;
};

export default function VisitedButton({ landmarkId }: VisitedButtonProps) {
  const { toggleVisited, isVisited } = usePlan();

  const visited = isVisited(landmarkId);

  return (
    <button
      type="button"
      onClick={() => toggleVisited(landmarkId)}
      className={`rounded-full px-3 py-2 text-sm font-bold ${
        visited
          ? "bg-(--color-burgundy) text-white"
          : "bg-(--color-surface) border border-(--color-burgundy) text-(--color-text)"
      }`}
    >
      {visited ? "Visited" : "Check in"}
    </button>
  );
}