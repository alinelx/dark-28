"use client";

import { usePlan } from "@/hooks/usePlan";
import Button from "./Buttons";

type PlanButtonProps = {
  landmarkId: number;
};

export default function PlanButton({ landmarkId }: PlanButtonProps) {
  const { togglePlan, isPlanned } = usePlan();
  const planned = isPlanned(landmarkId);
  return (
    <Button 
      onClick={() => togglePlan(landmarkId)}
      style="default">
      { planned ? "Remove" : "Add"}
    </Button>
  );
}