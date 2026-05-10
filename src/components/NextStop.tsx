"use client";

import Link from "next/link";
import { landmarks } from "@/data/landmarks";
import PageContainer from "@/components/PageContainer";
import type { Landmark } from "@/types/landmark";
import { usePlan } from "@/hooks/usePlan";

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
    <footer className="border border-(--color-text)/10 bg-(--color-surface) p-6 shadow-sm">
      <PageContainer>
        <h2
          className="mb-4 flex justify-center text-2xl font-semibold"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          {direction === "co-to-mm" ? "Next Stop" : "Previous Stop"}
        </h2>

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-(--color-text)/60">
              {direction === "co-to-mm" ? "Up next" : "Just before this"}
            </p>
            <p
              className="text-2xl font-semibold"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {adjacentLandmark.title}
            </p>
          </div>

          <Link
            href={href}
            className="rounded-full bg-(--color-yellow) px-4 py-2 text-sm font-semibold text-(--color-text)"
          >
            View
          </Link>
        </div>
      </PageContainer>
    </footer>
  );
}