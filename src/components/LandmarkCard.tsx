"use client";

import { categories } from "@/data/categories";
import type { Landmark } from "@/types/landmark";
import { usePlan } from "@/hooks/usePlan";
import VisitedButton from "./VisitedButton";
import CategoryBadge from "./CategoryBadge";
import PlanButton from "./PlanButton";
import Pill from "./Pills";

type LandmarkCardProps = {
  landmark: Landmark;
  activeCategory?: string;
};

export default function LandmarkCard({ landmark, activeCategory }: LandmarkCardProps) {
  const { isVisited, isPlanned } = usePlan();
  const visited = isVisited(landmark.id);
  const planned = isPlanned(landmark.id);
  return (
    <div className={`rounded-xl w-full border border-black/10 shadow-sm ${visited ? 'bg-(--color-gold)' : planned ? 'bg-(--color-surface) border-2 border-(--color-burgundy)' : 'bg-(--color-bg)'}`}>
      <section className="flex w-full p-4 items-top">
        <Pill style="round" label={`${landmark.id}`} href={
              activeCategory && activeCategory !== "all"
                ? `/route/${landmark.slug}?category=${activeCategory}`
                : `/route/${landmark.slug}`
            } />
        <div className="flex flex-col">
          <h2 className="text-2xl font-black" style={{ fontFamily: "var(--font-headline)" }}>
            {landmark.title}
          </h2>
          <div className="flex flex-wrap gap-1 p-1">
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
        </div>
      </section>
      <section className="flex w-full flex-wrap p-3 gap-1">
        <Pill style="info" label={`${landmark.locationName}`} />
        <Pill style="info" label={`${landmark.type}`} />
        <Pill style="info" label={`${landmark.price}`} />
        {landmark.estimatedVisitTime ? (
          <Pill style="info" label={`${landmark.estimatedVisitTime}`} />
        ) : null}
      </section>
      <p className="text-sm font-semibold p-2">{landmark.summary}</p>
      <div className="grid grid-cols-3 items-center text-center gap-2 p-2">
        <Pill href={ activeCategory && activeCategory !== "all" ? `/route/${landmark.slug}?category=${activeCategory}` : `/route/${landmark.slug}`} label="View" style="default" />
        <PlanButton landmarkId={landmark.id} />
        <VisitedButton landmarkId={landmark.id} />
      </div>
    </div>
  );
}