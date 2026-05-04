import Link from "next/link";
import { notFound } from "next/navigation";
import { landmarks } from "@/data/landmarks";
import { categories } from "@/data/categories";
import { getRouteCOInfo, getRouteMMInfo } from "@/data/routes";

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
      <header className="bg-(--color-yellow) px-6 pb-6 pt-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/route"
            className="text-sm font-semibold underline underline-offset-4"
          >
            Back to Route
          </Link>

          <div className="text-lg font-semibold tracking-wide">Dark28</div>
        </div>
      </header>

      <section className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {landmark.category.map((cat) => {
              const category = categories.find((item) => item.id === cat);
              return (
                <span
                  key={cat}
                  className="rounded-full bg-(--color-burgundy) px-4 py-1 text-xs font-semibold text-white"
                >
                  {category?.label || cat}
                </span>
              );
            })}
          </div>

          <h1
            className="text-4xl font-black leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {landmark.title}
          </h1>

          <div
            className="text-2xl font-bold text-(--color-gold)"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            {landmark.locationName} • {landmark.type}
          </div>

          <div className="flex flex-wrap gap-4 px-4 py-2 text-xs font-medium bg-black text-white rounded-full w-max">
            {landmark.price && <span>{landmark.price}</span>}
            {landmark.estimatedVisitTime && (
            <>
              <span>|</span>
              <span>{landmark.estimatedVisitTime}</span>
            </>
            )}
          </div>
                  {landmark.imageUrl && (
          <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <img
              src={landmark.imageUrl}
              alt={landmark.imageAlt || landmark.title}
              className="h-auto w-full object-cover"
            />
            {landmark.imageCaption && (
              <figcaption className="px-4 py-3 text-sm text-black/70">
                {landmark.imageCaption}
              </figcaption>
            )}
          </figure>
        )}
          <div className="flex flex-wrap gap-4 mt-2 text-sm font-medium">
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
          </div>
        </div>



        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2
            className="mb-3 text-2xl font-semibold"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Summary
          </h2>
          <p className="leading-7">{landmark.summary}</p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2
            className="mb-3 text-2xl font-semibold"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Historical Context
          </h2>
          <p className="leading-7">{landmark.historicalContext}</p>
        </section>

        {landmark.ethicalNote && (
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2
              className="mb-3 text-2xl font-semibold"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Ethical Note
            </h2>
            <p className="leading-7">{landmark.ethicalNote}</p>
          </section>
        )}

        {landmark.specialTip && (
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2
              className="mb-3 text-2xl font-semibold"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Special Tip
            </h2>
            <p className="leading-7">{landmark.specialTip}</p>
          </section>
        )}

        {(landmark.visitLisboaUrl || landmark.lisboaUrl) && (
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2
              className="mb-4 text-2xl font-semibold"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Useful Links
            </h2>

            <div className="flex flex-wrap gap-3">
              {landmark.visitLisboaUrl && (
                <a
                  href={landmark.visitLisboaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-(--color-text) px-4 py-2 text-sm font-semibold text-(--color-bg)"
                >
                  Visit Lisboa
                </a>
              )}

              {landmark.lisboaUrl && (
                <a
                  href={landmark.lisboaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-(--color-text) px-4 py-2 text-sm font-semibold text-(--color-bg)"
                >
                  Lisboa Info
                </a>
              )}
            </div>
          </section>
        )}

        {landmark.tags.length > 0 && (
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2
              className="mb-4 text-2xl font-semibold"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Tags
            </h2>

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
          </section>
        )}

        {nextLandmark && (
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2
              className="mb-4 text-2xl font-semibold"
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
          </section>
        )}
      </section>
    </main>
  );
}