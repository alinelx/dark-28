"use client";

import { usePlan } from "@/hooks/usePlan";
import Button from "./Buttons";

export default function DirectionButton(){
  const { direction, setDirection } = usePlan();

  return (
    <Button
      onClick={() => setDirection(direction === "co-to-mm" ? "mm-to-co" : "co-to-mm")}
      style="directions"
    >
      {direction === "co-to-mm"
          ? "🚋 Campo de Ourique ⚰️ → Martim Moniz 🗡️"
          : "🚋 Martim Moniz 🗡️ → Campo de Ourique ⚰️"}
    </Button>
  );
}