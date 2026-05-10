"use client";

import { categories } from "@/data/categories";
import type { Landmark } from "@/types/landmark";
import { usePlan } from "@/hooks/usePlan";
import VisitedButton from "./VisitedButton";
import CategoryBadge from "./CategoryBadge";
import PlanButton from "./PlanButton";
import Pill from "./Pills";
import SectionCard from "./SectionCard";

type LandmarkCardProps = {
  landmark: Landmark;
  activeCategory?: string;
};

export default function LandmarkCard({ landmark, activeCategory }: LandmarkCardProps) {
  const { isVisited, isPlanned } = usePlan();
  const visited = isVisited(landmark.id);
  const planned = isPlanned(landmark.id);
  return (
  <div className="flex flex-col m-2">
    <SectionCard className={visited ? 'bg-(--color-gold)' : planned ? 'bg-(--color-surface) ring-3 ring-(--color-burgundy)' : 'bg-(--color-bg)'}>
    <header className={"flex flex-row text-left items-center items-between gap-4 w-full"}>
      <Pill style="round" label={`${landmark.id}`} href={
        activeCategory && activeCategory !== "all"
          ? `/route/${landmark.slug}?category=${activeCategory}`
          : `/route/${landmark.slug}`
      } />
      <h2 className="text-2xl font-black" style={{ fontFamily: "var(--font-headline)" }}>
        {landmark.title}
      </h2>
    </header>
    <div className="flex flex-wrap py-2 gap-1">
      {landmark.category.map((cat) => {
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
    <div className="flex flex-wrap py-2 gap-1">
      <Pill style="info" label={`${landmark.locationName}`} />
      <Pill style="info" label={`${landmark.type}`} />
      <Pill style="info" label={`${landmark.price}`} />
      {landmark.estimatedVisitTime ? (
        <Pill style="info" label={`${landmark.estimatedVisitTime}`} />
      ) : null}
    </div>
    <p className="flex flex-row max-w-lg text-sm font-semibold py-4 flex-wrap h-auto">{landmark.summary}</p>
    <footer className="grid w-full grid-cols-3 gap-3 pt-3">
      <Pill
        href={
          activeCategory && activeCategory !== "all"
            ? `/route/${landmark.slug}?category=${activeCategory}`
            : `/route/${landmark.slug}`
        }
        label="View"
        style="view"
      />
      <PlanButton landmarkId={landmark.id} />
      <VisitedButton landmarkId={landmark.id} />
    </footer>
    </SectionCard>
  </div>
  );
}