"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import type { Landmark } from "@/types/landmark";
import CategoryBadge from "@/components/CategoryBadge";
import PlanButton from "@/components/PlanButton";
import { usePlan } from "@/hooks/usePlan";
import VisitedButton from "@/components/VisitedButton";

type LandmarkCardProps = {
  landmark: Landmark;
  activeCategory?: string;
};

export default function LandmarkCard({ landmark, activeCategory }: LandmarkCardProps) {
  const { isVisited, isPlanned } = usePlan();
  const visited = isVisited(landmark.id);
  const planned = isPlanned(landmark.id);
  return (
    <div className={`rounded-lg w-full border border-black/10 shadow-sm ${visited ? 'bg-(--color-gold)' : planned ? 'bg-white border-2 border-(--color-burgundy)' : 'bg-(--color-bg)'}`}>
      <div className="p-4">
        <section className={`flex w-full items-center `}>
          <div className="flex aspect-square w-1/4 max-w-12 items-center justify-center rounded-full bg-(--color-yellow) text-lg font-extrabold text-black">
            {landmark.id}
          </div>

          <div className="flex flex-col pl-2">
            <h2
              className="text-2xl font-black"
              style={{ fontFamily: "var(--font-headline)" }}
            >
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
        <p className={`pt-4 text-sm font-bold ${visited ? 'text-black' : 'text-(--color-yellow)'}`}>
          {landmark.locationName} • {landmark.type}
        </p>

        <p className="text-sm font-semibold">
          {landmark.price}
          {landmark.estimatedVisitTime ? (
            <> | {landmark.estimatedVisitTime}</>
          ) : null}
        </p>

        <p className="mt-2 text-sm">{landmark.summary}</p>

        <div className="mt-4 flex justify-center gap-2">
          <Link
            href={
              activeCategory && activeCategory !== "all"
                ? `/route/${landmark.slug}?category=${activeCategory}`
                : `/route/${landmark.slug}`
            }
            className="rounded-full border border-(--color-yellow) bg-white px-3 py-2 text-sm font-bold text-black"
          >
            View
          </Link>

          <PlanButton landmarkId={landmark.id} />
          <VisitedButton landmarkId={landmark.id} />
        </div>
      </div>
    </div>
  );
}