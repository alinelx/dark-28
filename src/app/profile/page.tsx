"use client";

import Link from "next/link";
import { landmarks } from "@/data/landmarks";
import { usePlan } from "@/hooks/usePlan";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import PageContainer from "@/components/PageContainer";

export default function ProfilePage() {
  const { plannedIds, visitedIds, clearVisited } = usePlan();

  const totalLandmarks = landmarks.length;
  const totalPlanned = plannedIds.length;
  const totalVisited = visitedIds.length;
  const totalRemaining = totalLandmarks - totalVisited;
  const progress =
    totalLandmarks > 0 ? Math.round((totalVisited / totalLandmarks) * 100) : 0;

  const visitedLandmarks = landmarks.filter((landmark) =>
    visitedIds.includes(landmark.id)
  );

  const remainingLandmarks = landmarks.filter(
    (landmark) => !visitedIds.includes(landmark.id)
  );

  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <PageHeader backHref="/" />
      <PageContainer>
      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-10">
        <h1
          className="text-4xl font-black md:text-5xl"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          My Progress
        </h1>

        <p
          className="text-2xl font-bold text-(--color-gold)"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          See how far you have explored, what you have saved, and which landmarks are still ahead.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard title="Saved Stops">
            <p className="text-3xl font-black">{totalPlanned}</p>
          </SectionCard>

          <SectionCard title="Visited">
            <p className="text-3xl font-black">{totalVisited}</p>
          </SectionCard>

          <SectionCard title="Remaining">
            <p className="text-3xl font-black">{totalRemaining}</p>
          </SectionCard>

          <SectionCard title="Progress">
            <p className="text-3xl font-black">{progress}%</p>
          </SectionCard>
        </div>

        {visitedLandmarks.length > 0 && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={clearVisited}
              className="rounded-full bg-(--color-text) px-4 py-2 text-sm font-bold text-(--color-bg)"
            >
              Clear visited
            </button>
          </div>
        )}

        <SectionCard title="Visited Landmarks">
          {visitedLandmarks.length === 0 ? (
            <p>No landmarks marked as visited yet.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {visitedLandmarks.map((landmark) => (
                <div
                  key={landmark.id}
                  className="rounded-xl border border-black/10 bg-(--color-surface) p-4"
                >
                  <h3
                    className="text-xl font-black"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {landmark.title}
                  </h3>
                  <p className="text-sm font-bold text-(--color-gold)">
                    {landmark.locationName} • {landmark.type}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/route/${landmark.slug}`}
                      className="rounded-full border border-(--color-yellow) bg-(--color-surface) px-4 py-2 text-sm font-bold text-(--color-text)"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </SectionCard>

        <SectionCard title="Not Visited Yet">
          {remainingLandmarks.length === 0 ? (
            <p>You have completed all current landmarks.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {remainingLandmarks.map((landmark) => (
                <div
                  key={landmark.id}
                  className="rounded-xl border border-black/10 bg-(--color-surface) p-4"
                >
                  <h3
                    className="text-xl font-black"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {landmark.title}
                  </h3>
                  <p className="text-sm font-bold text-(--color-gold)">
                    {landmark.locationName} • {landmark.type}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/route/${landmark.slug}`}
                      className="rounded-full border border-(--color-yellow) bg-(--color-surface) px-4 py-2 text-sm font-bold text-(--color-text)"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </SectionCard>
      </section>
      </PageContainer>
    </main>
  );
}