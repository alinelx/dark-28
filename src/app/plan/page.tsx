"use client";

import Link from "next/link";
import { landmarks } from "@/data/landmarks";
import { categories } from "@/data/categories";
import { usePlan } from "@/hooks/usePlan";
import PageHeader from "@/components/PageHeader";
import PlanButton from "@/components/PlanButton";
import SectionCard from "@/components/SectionCard";
import CategoryBadge from "@/components/CategoryBadge";
import PageContainer from "@/components/PageContainer";
import VisitedButton from "@/components/VisitedButton";
import DirectionButton from "@/components/DirectionButton";

export default function PlanPage() {
  const { plannedIds, direction, isVisited, clearPlan } = usePlan();

  const plannedLandmarks = landmarks
    .filter((landmark) => plannedIds.includes(landmark.id))
    .sort((a, b) => {
      if (direction === "mm-to-co") {
        return b.id - a.id;
      }
      return a.id - b.id;
    });

  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <PageHeader backHref="/" />
      <PageContainer>
        <div className="mx-auto flex flex-col gap-6 px-6 py-10 items-center text-center">
          <h1
            className="text-4xl font-black md:text-5xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            My Plan
          </h1>

          <p
            className="text-2xl font-bold text-(--color-gold)"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Build your own Dark28 route through Lisbon.
          </p>

          <div className="flex flex-col gap-3 w-full max-w-md">
            <DirectionButton />
          </div>

          {plannedLandmarks.length === 0 ? (
            <SectionCard title="No saved landmarks yet">
              <p className="mb-4">
                You have not added any landmarks to your plan yet.
              </p>

              <Link
                href="/route"
                className="inline-block rounded-full bg-(--color-burgundy) px-5 py-3 text-lg font-bold text-(--color-bg)"
              >
                Explore Route
              </Link>
            </SectionCard>
          ) : (
            plannedLandmarks.map((plannedLandmark) => {
              const visited = isVisited(plannedLandmark.id);

              return (
                <div
                  key={plannedLandmark.id}
                  className={`w-full rounded-2xl border p-5 text-sm transition ${
                    visited
                      ? "bg-(--color-gold) border-(--color-gold)"
                      : "bg-white border-black/10"
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <h2
                      className="text-2xl font-black"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {plannedLandmark.title}
                    </h2>

                    <div className="flex flex-wrap justify-center gap-2">
                      {plannedLandmark.category.map((cat) => {
                        const category = categories.find((c) => c.id === cat);

                        return (
                          <CategoryBadge
                            key={cat}
                            label={category?.label || cat}
                            href={`/route?category=${cat}`}
                          />
                        );
                      })}
                    </div>

                    <p className="text-sm font-bold text-(--color-burgundy)">
                      {plannedLandmark.locationName} • {plannedLandmark.type}
                    </p>

                    {plannedLandmark.estimatedVisitTime && (
                      <p className="text-sm font-semibold">
                        Estimated visit time: {plannedLandmark.estimatedVisitTime}
                      </p>
                    )}

                    <p>{plannedLandmark.summary}</p>

                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                      <Link
                        href={`/route/${plannedLandmark.slug}`}
                        className="rounded-full border border-(--color-yellow) bg-white px-4 py-2 text-sm font-bold text-black"
                      >
                        View
                      </Link>

                      <PlanButton landmarkId={plannedLandmark.id} />
                      <VisitedButton landmarkId={plannedLandmark.id} />
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {plannedLandmarks.length > 0 && (
            <div className="flex justify-center pt-4">
              <button
                type="button"
                onClick={clearPlan}
                className="rounded-full bg-(--color-text) px-4 py-2 text-sm font-bold text-(--color-bg)"
              >
                Clear plan
              </button>
            </div>
          )}
        </div>
      </PageContainer>
    </main>
  );
}