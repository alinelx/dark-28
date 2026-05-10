"use client";

import Image from  "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getRouteCOInfo, getRouteMMInfo } from "@/data/routes";
import { usePlan } from "@/hooks/usePlan";
import type { Landmark } from "@/types/landmark";
import CategoryBadge from "./CategoryBadge";
import PlanButton from "./PlanButton";
import VisitedButton from "./VisitedButton";
import PageContainer from "./PageContainer";
import DirectionButton from "./DirectionButton";
import SectionCard from "./SectionCard";
import HistoricalContextPreview from "./Preview";
import Pill from "./Pills";

type LandmarkDetailProps = {
  landmark: Landmark;
};

export default function LandmarkDetail({ landmark }: LandmarkDetailProps) {
    const { direction, isVisited, isPlanned } = usePlan();
    const visited = isVisited(landmark.id);
    const planned = isPlanned(landmark.id);
    return (
        <PageContainer className="flex flex-col m-3">
        <SectionCard className={visited ? 'bg-(--color-gold)' : planned ? 'bg-(--color-surface) ring-3 ring-(--color-burgundy)' : 'bg-(--color-bg)'}>
            <div className="flex flex-row justify-center items-center gap-2 w-full">
            <Pill style="round" label={`${landmark.id}`} />
            <div className="flex flex-col">
            <h1 className="text-4xl font-black text-center m-4" style={{ fontFamily: "var(--font-headline)" }}>
            {landmark.title}
            </h1>
            <div className="flex flex-row gap-1 flex-wrap  max-w-lg justify-center">
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
            </div>
            </div>
            <div className="flex flex-col w-full p-4 items-center justify-center">
            {landmark.imageUrl && (
            <figure className="flex w-full flex-col items-center">
                <SectionCard className="bg-(--color-bg) ring-2 shadow-xs max-w-lg shadow-text/50 ">
                <Image
                src={landmark.imageUrl}
                alt={landmark.imageAlt || landmark.title}
                width={800}
                height={800}
                className="aspect-square w-full rounded-4xl p-4 object-cover"
                />

                {landmark.imageCaption && (
                <figcaption className="text-md text-center text-(--color-text)/70">
                {landmark.imageCaption}
                </figcaption>
                )}
                </SectionCard>
            </figure>
            )}
            <section className="flex w-full flex-wrap p-4 justify-center gap-2">
                <Pill style="info" label={`${landmark.locationName}`} />
                <Pill style="info" label={`${landmark.type}`} />
                <Pill style="info" label={`${landmark.price}`} />
                {landmark.estimatedVisitTime ? (
                <Pill style="info" label={`${landmark.estimatedVisitTime}`} />
                ) : null}
            </section>
            <div className="flex flex-col justify-center items-center gap-3 p-2">
            <p className="font-semibold text-md">{landmark.summary}</p>
            <DirectionButton/>
            { landmark.routeStopMM && landmark.routeStopCO ?
                direction === 'co-to-mm' ?
                `${landmark.routeStopMM} - ${getRouteMMInfo(landmark.routeStopMM)?.stopDetails.stop_name}` :
                `${landmark.routeStopCO} - ${getRouteCOInfo(landmark.routeStopCO)?.stopDetails.stop_name}`
                : null };
            <div className="flex flex-row w-full items-center justify-between">
                <PlanButton landmarkId={landmark.id} />
                <VisitedButton landmarkId={landmark.id} />
            </div>
            </div>
            </div>
        </SectionCard>
        <SectionCard title="Historical Context" className="mt-7 w-full">
            <HistoricalContextPreview
                text={landmark.historicalContext}
                previewLength={150}
            />
        </SectionCard>
        {landmark.ethicalNote && (
            <SectionCard title="Ethical Note" className="mt-7 w-full">
                <p>{landmark.ethicalNote}</p>
            </SectionCard>
        )}
        {landmark.specialTip && (
            <SectionCard title="Special Tip" className="mt-7 w-full">
                <p>{landmark.specialTip}</p>
            </SectionCard>
        )}
        {landmark.tags.length > 0 && (
            <SectionCard title="Tags" className="mt-7 w-full justify-center">
                <div className="flex flex-row flex-wrap justify-center gap-3">
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
            <SectionCard title="Useful Links" className="mt-7 w-full justify-center">
                <div className="flex flex-row justify-center gap-3">
                    {landmark.visitLisboaUrl && (
                        <Pill
                            href={landmark.visitLisboaUrl}
                            style="default"
                            label="Visit Lisboa"
                        />
                    )}
                    {landmark.lisboaUrl && (
                        <Pill
                            href={landmark.lisboaUrl}
                            style="default"
                            label="Lisboa Info"
                        />
                    )}
                </div>
            </SectionCard>
        )}
      </PageContainer>
  );
}