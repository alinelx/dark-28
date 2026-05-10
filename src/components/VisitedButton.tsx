"use client";

import { usePlan } from "@/hooks/usePlan";
import Button from "./Buttons";

type VisitedButtonProps = {
  landmarkId: number;
};

export default function VisitedButton({ landmarkId }: VisitedButtonProps) {
  const { toggleVisited, isVisited } = usePlan();
  const visited = isVisited(landmarkId);
  return (
    <Button 
      onClick={() => toggleVisited(landmarkId)}
      style="status">
        { visited ? "Visited" : "Check"}
    </Button>
  );
}