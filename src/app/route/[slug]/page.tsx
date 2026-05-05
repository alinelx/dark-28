import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { landmarks } from "@/data/landmarks";
import { categories } from "@/data/categories";
import { getRouteCOInfo, getRouteMMInfo } from "@/data/routes";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import CategoryBadge from "@/components/CategoryBadge";
import HistoricalContextPreview from "@/components/Preview";

type LandmarkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LandmarkDetailPage({
    params,
}: LandmarkDetailPageProps) {
    const { slug } = await params;

    const landmark = landmarks.find((item) => item.slug === slug);

    if (!landmark) {
        notFound();
    }

    const nextLandmark = landmark.nextLandId
        ? landmarks.find((item) => item.id === landmark.nextLandId)
        : undefined;

    return (
        <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
            <PageHeader backHref="/route" backLabel="Back to Route" />
            <SectionCard title={landmark.title}>
                <div className="flex flex-col gap-4 items-center">
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
                {landmark.title}
                {landmark.locationName} • {landmark.type}
                {landmark.price && <span>{landmark.price}</span>}
                {landmark.estimatedVisitTime && (
                <>
                <span>|</span>
                <span>{landmark.estimatedVisitTime}</span>
                </>
                )}
                {landmark.imageUrl && (
                <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
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
                        <figcaption className="px-4 py-3 text-sm text-black/70">
                        {landmark.imageCaption}
                        </figcaption>
                    )}
                    </figure>
                )}
                {landmark.routeStopCO && landmark.routeStopMM && (
                    <>
                    <span className="flex flex-wrap gap-0 px-4 py-2 text-xs font-medium bg-(--color-yellow) text-black rounded-full w-max">
                    <b>{getRouteCOInfo(landmark.routeStopCO)?.routeLabel}</b>
                    {landmark.routeStopCO} - {getRouteCOInfo(landmark.routeStopCO)?.stopDetails.stop_name}
                    </span>
                    <span className="flex flex-wrap gap-0 px-4 py-2 text-xs font-medium bg-(--color-yellow) text-black rounded-full w-max">
                    <b>{getRouteMMInfo(landmark.routeStopMM)?.routeLabel}</b>
                    {landmark.routeStopMM} - {getRouteMMInfo(landmark.routeStopMM)?.stopDetails.stop_name}
                    </span>
                    </>
                )}
            </SectionCard>
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
                            className="rounded-full bg-black/5 px-3 py-1 text-sm"
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
            {nextLandmark && (
                <footer className="border border-black/10 bg-white p-6 shadow-sm">
                    <h2
                    className="mb-4 text-2xl font-semibold justify-center flex"
                    style={{ fontFamily: "var(--font-accent)" }}
                    >
                    Next Stop
                    </h2>
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm text-black/60">Up next</p>
                            <p
                            className="text-2xl font-semibold"
                            style={{ fontFamily: "var(--font-headline)" }}
                            >
                            {nextLandmark.title}
                            </p>
                        </div>
                        <Link
                            href={`/route/${nextLandmark.slug}`}
                            className="rounded-full bg-(--color-yellow) px-4 py-2 text-sm font-semibold text-black"
                        >
                            View
                        </Link>
                    </div>
                </footer>
            )}
        </main>
    );
}