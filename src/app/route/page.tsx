"use client";
import { landmarks } from "@/data/landmarks";
import { categories } from "@/data/categories";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import LandmarkCard from "@/components/LandmarkCard";
import PageHeader from "@/components/PageHeader";
import PageContainer from "@/components/PageContainer";

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
      <PageHeader backHref="/" />
      <PageContainer>

        <h1
          className="text-4xl font-black mb-6 text-center md:text-5xl"
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
        <div className="flex flex-col border border-black/10 p-4 m-4 gap-2 items-center rounded-lg">
          <h2 className="text-3xl font-semibold leading-none tracking-tight md:text-3xl" style={{ fontFamily: "var(--font-headline)" }}>Browse by theme</h2>
          <p className="text-center text-sm text-(--color-text)/60">
            Showing {filteredLandmarks.length} landmark
            {filteredLandmarks.length === 1 ? "" : "s"}
          </p>
          <div className="flex gap-3 w-full overflow-x-auto p-2 md:flex-wrap md:overflow-visible">
            <button
              type="button"
              onClick={() => handleCategoryChange("all")}
              aria-pressed={activeCategory === "all"}
              className={`rounded-full px-4 py-2 text-sm w-fit font-bold transition ${
                activeCategory === "all"
                  ? "bg-(--color-text) text-(--color-bg)"
                  : "bg-(--color-surface) text-(--color-text) border border-black/10"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                aria-pressed={activeCategory === category.id}
                className={`rounded-full px-4 py-2 text-sm w-fit text-nowrap font-bold transition ${
                  activeCategory === category.id
                  ? "bg-(--color-text) text-(--color-bg)"
                  : "bg-(--color-surface) text-(--color-text) border border-black/10"
                }`}
              >
                {category.label}
              </button>
            ))}          
          </div>
        </div>
        {filteredLandmarks.length === 0 ? (
          <div className="rounded-2xl gap-4 border border-black/10 bg-(--color-surface) p-6 text-center">
            No landmarks found for this category yet.
          </div>
        ) : (
        <div className="grid gap-4 p-4 md:grid-cols-2">
          {filteredLandmarks.map((landmark) => (
            <LandmarkCard
              key={landmark.id}
              landmark={landmark}
              activeCategory={activeCategory}
            />
          ))}
        </div>
      )}
      </PageContainer>
    </main>
  );
}