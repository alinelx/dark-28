"use client";

import { usePlan } from "@/hooks/usePlan";

export default function DirectionButton(){
  const { direction, setDirection } = usePlan();

  return (
    <button
      type="button"
      onClick={() => setDirection(direction === "co-to-mm" ? "mm-to-co" : "co-to-mm")}
      className={`rounded-full px-4 py-2 w-full text-sm font-bold transition ${
        direction === "co-to-mm"
          ? "bg-(--color-text) text-(--color-bg)"
          : "bg-(--color-surface) text-(--color-text) border border-(black)/10"
      }`}
    >
      {direction === "co-to-mm"
          ? "Campo de Ourique → Martim Moniz"
          : "Martim Moniz → Campo de Ourique"}
    </button>
  );
}