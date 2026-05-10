"use client";
import { landmarks } from "@/data/landmarks";
import { categories } from "@/data/categories";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import LandmarkCard from "@/components/LandmarkCard";
import PageHeader from "@/components/PageHeader";
import PageContainer from "@/components/PageContainer";
import Button from "@/components/Buttons";
import SectionCard from "@/components/SectionCard";

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
      <PageContainer className="p-4">
        <div className="flex w-full justify-center flex-col items-center gap-4 pt-6 text-center md:pt-8">
        <h1
          className="text-4xl font-black text-center md:text-5xl"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Explore the Route
        </h1>

        <h2
          className="text-2xl text-center font-bold text-(--color-gold)"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Discover the overlooked histories hidden across Lisbon.
        </h2>
        <SectionCard className="w-full">
          <h2 className="text-2xl font-semibold leading-none tracking-tight md:text-3xl" style={{ fontFamily: "var(--font-headline)" }}>Browse by theme</h2>
          <p className="text-center text-sm text-(--color-text)/60">
            Showing {filteredLandmarks.length} landmark
            {filteredLandmarks.length === 1 ? "" : "s"}
          </p>
          <section className="flex flex-row overflow-visible pb-4 p-2 text-nowrap overflow-x-auto gap-2 md:flex-wrap">
          <Button
            onClick={() => handleCategoryChange("all")}
            aria-pressed={activeCategory === "all"}
            style="filters"
            className={activeCategory === "all" ?
              "text-white bg-black"
              : ""
            }
          >
            All
          </Button>
          {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            aria-pressed={activeCategory === category.id}
            style="filters"
            className={activeCategory === category.id ?
              "text-white bg-black"
              : ""
            }
          >
          {category.label}
          </Button>
          ))}
          </section>
        </SectionCard>
        {filteredLandmarks.length === 0 ? (
          <SectionCard>
            No landmarks found for this category yet.
          </SectionCard>
        ) : (
        <div className="grid w-full gap-2 items-top md:grid-cols-2">
          {filteredLandmarks.map((landmark) => (
            <LandmarkCard
              key={landmark.id}
              landmark={landmark}
              activeCategory={activeCategory}
            />
          ))}
        </div>
      )}
      </div>
      </PageContainer>
    </main>
  );
}