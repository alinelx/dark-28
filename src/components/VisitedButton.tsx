"use client";

import { usePlan } from "@/hooks/usePlan";
import Button from "./Buttons";
import Pill from "./Pills";

type VisitedButtonProps = {
  landmarkId: number;
};

export default function VisitedButton({ landmarkId }: VisitedButtonProps) {
  const { toggleVisited, isVisited } = usePlan();
  const visited = isVisited(landmarkId);
  return (
    <Button 
      onClick={() => toggleVisited(landmarkId)}
      style="pill">
        <Pill style="default" label={ visited ? "Visited" : "Check in"} />
    </Button>
  );
}