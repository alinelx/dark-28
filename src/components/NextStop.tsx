"use client";

import { landmarks } from "@/data/landmarks";
import type { Landmark } from "@/types/landmark";
import { usePlan } from "@/hooks/usePlan";
import DirectionButton from "./DirectionButton";
import PageContainer from "./PageContainer";
import Button from "./Buttons";
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
    <footer className="border p-4 shadow-sm/20 flex flex-col ring-1 shadow-text">
      <PageContainer>
        <h2
          className="flex justify-center pb-4 text-3xl font-black"
          style={{ fontFamily: "var(--font-accent)" }}
        >
        
          {direction === "co-to-mm" ? "Next Stop" : "Previous Stop"}
        </h2>
        <DirectionButton />
        <div className="flex flex-row pt-7 justify-between items-center w-full">
          <div>
            <p className="text-sm text-(--color-text)/60">
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
            <Button style="pill"> 
              <Pill href={href} label="View" style="default" />
            </Button>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}