"use client";

import Image from  "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import type { Landmark } from "@/types/landmark";
import CategoryBadge from "./CategoryBadge";
import PlanButton from "./PlanButton";
import { usePlan } from "@/hooks/usePlan";
import VisitedButton from "./VisitedButton";
import PageContainer from "./PageContainer";
import { getRouteCOInfo, getRouteMMInfo } from "@/data/routes";
import DirectionButton from "./DirectionButton";
import SectionCard from "./SectionCard";
import HistoricalContextPreview from "./Preview";

type LandmarkDetailProps = {
  landmark: Landmark;
};

export default function LandmarkDetail({ landmark }: LandmarkDetailProps) {
  const { isVisited, isPlanned, direction } = usePlan();
  const visited = isVisited(landmark.id);
  const planned = isPlanned(landmark.id);
  return (
      <PageContainer>
        <DirectionButton/>
        <div className={`rounded-2xl flex flex-col mt-5 gap-4 p-4 items-center justify-center  ${visited ? 'bg-(--color-gold)' : planned ? 'bg-(--color-surface) border-2 border-(--color-burgundy)' : 'bg-(--color-surface)'}`}>
            <h1 className="text-4xl font-bold text-center" style={{ fontFamily: "var(--font-headline)" }}>
            {landmark.title}
            </h1>
            <div className="flex flex-row gap-1 flex-wrap justify-center">
            {landmark.category.map((cat) => {
            const category = categories.find((item) => item.id === cat);

            return (
                <CategoryBadge
                    key={cat}
                    label={category?.label || cat}
                    href={`/route?category=${cat}`}
                />
            );
            })}
            </div>
            {landmark.imageUrl && (
            <figure className="overflow-hidden p-4 m-4 rounded-2xl border border-black/10 bg-(--color-surface) shadow-sm">
            <div className="relative w-full">
                <Image
                src={landmark.imageUrl}
                alt={landmark.imageAlt || landmark.title}
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                />
            </div>

            {landmark.imageCaption && (
                <figcaption className="px-4 py-3 text-xs text-(--color-text)/70">
                {landmark.imageCaption}
                </figcaption>
            )}
            </figure>
            )}
            <div className="flex justify-center gap-3 p-2">
                <PlanButton landmarkId={landmark.id} />
                <VisitedButton landmarkId={landmark.id} />
            </div>
        </div>
        <div className="flex flex-col gap-2 p-4 items-center justify-center">
            <span className="text-sm p-3 font-bold text-(--color-text) flex">
            {landmark.locationName} • {landmark.type}
            </span>
            <span className="text-sm font-bold text-(--color-text) pt-0 p-2 gap-2 flex">
            {landmark.price && 
            <span>{landmark.price}</span>
            }
            {landmark.estimatedVisitTime && (
            <>
            <span>|</span>
            <span>{landmark.estimatedVisitTime}</span>
            </>
            )}</span>
        </div>
        <div className="flex flex-col p-4 gap-1 items-center justify-center">
            <h3 className="text-xl font-bold text-center" style={{ fontFamily: "var(--font-headline)" }}>Tram info</h3>
            <span className={`rounded-full px-4 py-2 text-sm flex-wrap text-center font-bold transition ${
                direction === "co-to-mm"
                ? "bg-(--color-text) text-(--color-bg)"
                : "bg-(--color-surface) text-(--color-text) border border-black/10"
            }`}>
            {direction === "co-to-mm"
            ? `${landmark.routeStopMM} - ${getRouteMMInfo(landmark.routeStopMM)?.stopDetails.stop_name}`
            : `${landmark.routeStopCO} - ${getRouteCOInfo(landmark.routeStopCO)?.stopDetails.stop_name}`}
            </span>
        </div>
        <SectionCard title="Summary">
            <p>{landmark.summary}</p>
        </SectionCard>
        <SectionCard title="Historical Context">
            <HistoricalContextPreview
                text={landmark.historicalContext}
                previewLength={320}
            />
        </SectionCard>
        {landmark.ethicalNote && (
            <SectionCard title="Ethical Note">
                <p>{landmark.ethicalNote}</p>
            </SectionCard>
        )}
        {landmark.specialTip && (
            <SectionCard title="Special Tip">
                <p>{landmark.specialTip}</p>
            </SectionCard>
        )}
        {landmark.tags.length > 0 && (
            <SectionCard title="Tags">
                <div className="flex flex-wrap gap-2">
                    {landmark.tags.map((tag) => (
                        <span
                        key={tag}
                        className="rounded-full bg-(--color-text)/5 px-3 py-1 text-sm"
                        >
                        {tag}
                        </span>
                    ))}
                </div>
            </SectionCard>
        )}
        {(landmark.visitLisboaUrl || landmark.lisboaUrl) && (
            <SectionCard title="Useful Links">
                <div className="flex flex-wrap gap-3">
                    {landmark.visitLisboaUrl && (
                        <Link
                            href={landmark.visitLisboaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-(--color-text) px-4 py-2 text-sm font-semibold text-(--color-bg)"
                        >
                            Visit Lisboa
                        </Link>
                    )}
                    {landmark.lisboaUrl && (
                        <Link
                            href={landmark.lisboaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-(--color-text) px-4 py-2 text-sm font-semibold text-(--color-bg)"
                        >
                            Lisboa Info
                        </Link>
                    )}
                </div>
            </SectionCard>
        )}
      </PageContainer>
  );
}