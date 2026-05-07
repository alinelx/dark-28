import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { landmarks } from "@/data/landmarks";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <PageHeader backHref="" />
      <PageContainer>
      <div className="flex flex-col w-full items-center gap-4 pt-10 text-center">
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
        
      </div>
      <div className="mt-10 flex w-full items-center flex-col gap-3">
        <Link
          href="/route"
          className="rounded-lg bg-(--color-text) px-5 py-3 text-lg font-medium text-(--color-bg) transition hover:opacity-90"
        >
          Explore Route
        </Link>
        <Link
          href="/about"
          className="rounded-lg pt-0 py-3 text-sm font-medium text-(--color-burgundy) transition hover:opacity-90"
        >
          Why Dark28?
        </Link>
      </div>
      <section className="mt-10">
        <h3 className="text-sm text-center uppercase tracking-wide p-2  text-black">
          A self-guided tour of 28 landmarks across Lisbon
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {landmarks.slice(0, 5).map((landmark) => (
            <Link
              key={landmark.id}
              href={`/route/${landmark.slug}`}
              className="flex items-center gap-4 w-fit rounded-lg border border-black/10 bg-white p-4 shadow-sm transition hover:bg-(--color-yellow)"
            >
              <Image
                src={landmark.imageUrl!}
                alt={landmark.title}
                width={80}
                height={80}
                className="w-20 h-auto aspect-square rounded object-cover"
              />
              <h3 className="text-lg font-medium w-32">{landmark.title}</h3>
            </Link>
          ))}
        </div>     
      </section>
      <section>
        
      </section>
      </PageContainer>
    </main>
  );
}