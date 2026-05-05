"use client";

import Link from "next/link";
import { landmarks } from "@/data/landmarks";
import { usePlan } from "@/hooks/usePlan";
import PageHeader from "@/components/PageHeader";
import PlanButton from "@/components/PlanButton";
import SectionCard from "@/components/SectionCard";

export default function PlanPage() {
  const { plannedIds } = usePlan();

  const plannedLandmarks = landmarks.filter((landmark) =>
    plannedIds.includes(landmark.id)
  );

  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <PageHeader backHref="/" backLabel="Back Home" />

      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-10">
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
          plannedLandmarks.map((plannedLandmark) => (
            <div
              key={plannedLandmark.id}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3">
                <h2
                  className="text-2xl font-black"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {plannedLandmark.title}
                </h2>

                <p className="text-sm font-bold text-(--color-gold)">
                  {plannedLandmark.locationName} • {plannedLandmark.type}
                </p>

                <p>{plannedLandmark.summary}</p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={`/route/${plannedLandmark.slug}`}
                    className="rounded-full border border-(--color-yellow) bg-white px-4 py-2 text-sm font-bold text-black"
                  >
                    View details
                  </Link>

                  <PlanButton landmarkId={plannedLandmark.id} />
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}