"use client";

import { landmarks } from "@/data/landmarks";
import type { Landmark } from "@/types/landmark";
import { usePlan } from "@/hooks/usePlan";
import DirectionButton from "./DirectionButton";
import Pill from "./Pills";

type NextStopProps = {
  landmark: Landmark;
  category?: string;
};

export default function NextStop({ landmark, category }: NextStopProps) {
  const { direction } = usePlan();
  const currentIndex = landmarks.findIndex((item) => item.id === landmark.id);
  if (currentIndex === -1) return null;
  const targetIndex =
    direction === "co-to-mm" ? currentIndex + 1 : currentIndex - 1;
  const adjacentLandmark = landmarks[targetIndex];
  if (!adjacentLandmark) return null;
  const href = category
    ? `/route/${adjacentLandmark.slug}?category=${category}`
    : `/route/${adjacentLandmark.slug}`;
  return (
    <footer className="border w-full m-auto p-3 items-center shadow-sm flex flex-col bg-(--color-yellow) text-black shadow-text">
        <h2
          className="flex justify-center text-2xl p-3 font-black"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          {direction === "co-to-mm" ? "Next Stop" : "Previous Stop"}
        </h2>
        <DirectionButton />
        <div className="flex flex-row pt-7 justify-evenly items-center w-full">
          <div>
            <p className="text-sm text-black/60">
              {direction === "co-to-mm" ? "Up next" : "Just before this"}
            </p>
            <p
              className="text-2xl font-semibold flex-wrap max-w-3/4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {adjacentLandmark.title}
            </p>
          </div>
          <div>
            <Pill href={href} label="View" style="default" />
          </div>
        </div>
    </footer>
  );
}