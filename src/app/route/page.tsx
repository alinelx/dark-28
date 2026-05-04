import { landmarks } from "@/data/landmarks";
import { categories } from "@/data/categories";
import Link from "next/link";

export default function RoutePage() {
  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text) px-6 py-8">
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
        <h1
          className="text-4xl font-black mb-6"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Explore the Route
        </h1>

        <h2
          className="mb-8 text-2xl text-center font-bold text-(--color-gold)"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Discover the overlooked histories hidden across Lisbon.
        </h2>

        <div className="flex flex-col gap-4">
          {landmarks.map((landmark) => (
            <div
              key={landmark.id}
              className="rounded-lg border border-black/10 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center content-center gap-2">                
                <div className="flex w-10 h-10 p-2 rounded-full bg-(--color-yellow) text-black items-center justify-center text-lg font-extrabold">
                    {landmark.id}
                </div>
                <div className="flex-1 pl-2 items-right">
                <h2
                    className="text-2xl font-black"
                    style={{ fontFamily: "(--font-headline)" }}
                >
                    {landmark.title}
                </h2>
                <div className="flex flex-wrap gap-2 mt-1">
                {landmark.category.map((cat) => {
                  const category = categories.find((c) => c.id === cat);
                  return (
                    <span
                      key={cat}
                      className="text-xs px-4 py-1 rounded-full bg-(--color-burgundy) text-white"
                    >
                      {category?.label || cat}
                    </span>
                  );
                })}
                </div>
              </div>
              </div>
              <p className="text-sm pt-4 font-bold text-(--color-yellow)">
                {landmark.locationName} • {landmark.type}
              </p>
              <p className="text-sm font-semibold">
                {landmark.price}
                {landmark.estimatedVisitTime ? <> | {landmark.estimatedVisitTime}</> : null}
              </p>
              <p className="mt-2 text-sm">{landmark.summary}</p>

              <div className="mt-4 flex gap-2 justify-center">
                <Link
                href={`/route/${landmark.slug}`}
                className="text-sm px-3 py-2 bg-white border border-(--color-yellow)] font-bold text-black rounded-full"
                >
                Learn more
                </Link>

                <button className="text-sm px-3 py-2 bg-(--color-yellow) text-black rounded-full font-bold">
                  Add to plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}