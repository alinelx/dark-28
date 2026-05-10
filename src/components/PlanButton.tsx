"use client";

import { usePlan } from "@/hooks/usePlan";
import Button from "./Buttons";
import Pill from "./Pills";

type PlanButtonProps = {
  landmarkId: number;
};

export default function PlanButton({ landmarkId }: PlanButtonProps) {
  const { togglePlan, isPlanned } = usePlan();
  const planned = isPlanned(landmarkId);
  return (
    <Button 
      onClick={() => togglePlan(landmarkId)}
      style="pill">
        <Pill style="default" label={ planned ? "Remove" : "Add"} />
    </Button>
  );
}