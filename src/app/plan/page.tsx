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
import Button from "@/components/Buttons"
import LandmarkCard from "@/components/LandmarkCard";

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
        <div className="flex w-full justify-center flex-col items-center pt-6 text-center md:pt-8">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--font-headline)" }}>
            My Plan
          </h1>
          <p
          className="text-2xl text-(--color-gold) py-6 md:py-8"
          style={{ fontFamily: "var(--font-accent)" }}
          >
            Build your own Dark28 route through Lisbon.
          </p>
          <DirectionButton />
          <div className="mt-7 w-full flex flex-col">
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
              return (
                <LandmarkCard key={plannedLandmark.id} landmark={plannedLandmark} />
              );
            })
          )}
          </div>
          {plannedLandmarks.length > 0 && (
            <Button
                onClick={clearPlan}
                style="secondary"
                className="mt-7"
              >
                Clear plan
            </Button>
          )}
        </div>
      </PageContainer>
    </main>
  );
}