"use client";
import { landmarks } from "@/data/landmarks";
import { categories } from "@/data/categories";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import CategoryBadge from "@/components/CategoryBadge";
import LandmarkCard from "@/components/LandmarkCard";
import PageHeader from "@/components/PageHeader";

export default function RoutePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const activeCategory =
    categoryFromUrl && categories.some((cat) => cat.id === categoryFromUrl)
      ? categoryFromUrl
      : "all";

  const filteredLandmarks = useMemo(() => {
    if (activeCategory === "all") {
      return landmarks;
    }

    return landmarks.filter((landmark) =>
      landmark.category.includes(activeCategory)
    );
  }, [activeCategory]);
  
  function handleCategoryChange(categoryId: string) {
    if (categoryId === "all") {
      router.push("/route");
      return;
    }

    router.push(`/route?category=${categoryId}`);
  }

  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <PageHeader backHref="/" backLabel="Back to Home" />
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center p-10">
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

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => handleCategoryChange("all")}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              activeCategory === "all"
                ? "bg-(--color-text) text-(--color-bg)"
                : "bg-white text-black border border-black/10"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  activeCategory === category.id
                    ? "bg-(--color-text) text-(--color-bg)"
                    : "bg-(--color-burgundy) text-black border border-black/10 text-sm"
                }`}
              >
                <CategoryBadge label={category.label} />
              </button>
          ))}
        </div>
        <p className="mb-6 text-sm text-black/60">
          Showing {filteredLandmarks.length} landmark
          {filteredLandmarks.length === 1 ? "" : "s"}
        </p>
        <div className="flex flex-col gap-4">
          {filteredLandmarks.map((landmark) => (
            <LandmarkCard key={landmark.id} landmark={landmark} />
          ))}
        </div>
      </div>
    </main>
  );
}