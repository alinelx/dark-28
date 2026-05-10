"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import type { Landmark } from "@/types/landmark";
import { usePlan } from "@/hooks/usePlan";
import VisitedButton from "./VisitedButton";
import CategoryBadge from "./CategoryBadge";
import PlanButton from "./PlanButton";
import Pill from "./Pills";
import Button from "./Buttons"

type LandmarkCardProps = {
  landmark: Landmark;
  activeCategory?: string;
};

export default function LandmarkCard({ landmark, activeCategory }: LandmarkCardProps) {
  const { isVisited, isPlanned } = usePlan();
  const visited = isVisited(landmark.id);
  const planned = isPlanned(landmark.id);
  return (
    <div className={`rounded-3xl p-5 w-full border border-black/10 shadow-sm ${visited ? 'bg-(--color-gold)' : planned ? 'bg-(--color-surface) border-2 border-(--color-burgundy)' : 'bg-(--color-bg)'}`}>
      <section className="flex w-full items-center">
        <Pill style="round" label={`${landmark.id}`} href={
              activeCategory && activeCategory !== "all"
                ? `/route/${landmark.slug}?category=${activeCategory}`
                : `/route/${landmark.slug}`
            } />
        <div className="flex flex-col pl-2">
          <h2 className="text-2xl font-black" style={{ fontFamily: "var(--font-headline)" }}>
            {landmark.title}
          </h2>
          <div className="mt-1 flex flex-wrap gap-2">
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
      <section className="flex w-full flex-wrap gap-2 m-4">
        <Pill style="info" label={`${landmark.locationName}`} />
        <Pill style="info" label={`${landmark.type}`} />
        <Pill style="info" label={`${landmark.price}`} />
        {landmark.estimatedVisitTime ? (
          <Pill style="info" label={`${landmark.estimatedVisitTime}`} />
        ) : null}
      </section>
      <p className="m-4 text-sm font-semibold">{landmark.summary}</p>
      <div className="mt-4 flex justify-center gap-2">
        <Button style="pill"> 
          <Pill href={ activeCategory && activeCategory !== "all" ? `/route/${landmark.slug}?category=${activeCategory}` : `/route/${landmark.slug}`} label="View" style="default" />
        </Button>
        <PlanButton landmarkId={landmark.id} />
        <VisitedButton landmarkId={landmark.id} />
      </div>
    </div>
  );
}