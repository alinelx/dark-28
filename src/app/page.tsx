import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import { landmarks } from "@/data/landmarks";
import Link from "next/link";
import Image from "next/image";
import CategoryBadge from "@/components/CategoryBadge";
import { categories } from "@/data/categories";
export default function Home() {
  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <PageHeader backHref="" />
      <PageContainer>
      <section className="mx-auto flex min-h-[calc(100vh-104px)] max-w-xl flex-col items-center justify-center px-8 py-12 text-center">
        <h1
          className="max-w-md text-5xl font-semibold leading-none tracking-tight md:text-6xl"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Lisbon’s Dark Cultural Heritage Route
        </h1>

        <p
          className="mt-6 max-w-md text-2xl leading-snug text-(--color-gold)"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Explore overlooked stories of tragedy, resistance, faith, and memory
          along Lisbon’s iconic Tram 28.
        </p>

        <SectionCard title="Feature Landmarks">
          <div className="flex flex-col gap-4">
            {landmarks.slice(0, 3).map((landmark) => (
              <Link
                key={landmark.id}
                href={`/route/${landmark.slug}`}
                className="flex items-center gap-4 rounded-lg border border-black/10 bg-white p-4 shadow-sm transition hover:bg-(--color-yellow)"
              >
                <Image
                  src={landmark.imageUrl}
                  alt={landmark.title}
                  width={80}
                  height={80}
                  className="w-20 h-auto aspect-square rounded object-cover"
                />
                <div className="w-full">
                  <h3 className="text-lg font-medium">{landmark.title}</h3>
                  {landmark.category.map((cat) => {
                    const category = categories.find((item) => item.id === cat);

                    return (
                        <p
                            key={cat}
                            href={`/route?category=${cat}`}
                            className="text-sm text-(--color-gold)"
                        >
                            {category?.label || cat}
                        </p>
                    );
                    })}
                </div>
              </Link>
            ))}
          </div>
        </SectionCard>

        <div className="mt-10 flex w-full max-w-sm flex-col gap-3">
          <Link
            href="/route"
            className="rounded-lg bg-(--color-text) px-5 py-3 text-lg font-medium text-(--color-bg) transition hover:opacity-90"
          >
            Explore Route
          </Link>
          <Link
            href="/about"
            className="rounded-lg bg-(--color-burgundy) px-5 py-3 text-lg font-medium text-(--color-bg) transition hover:opacity-90"
          >
            Why Dark28?
          </Link>
        </div>
      </section>
      </PageContainer>
    </main>
  );
}