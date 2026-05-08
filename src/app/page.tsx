import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { landmarks } from "@/data/landmarks";
import { categories } from "@/data/categories";
import Link from "next/link";
import Image from "next/image";
import SectionCard from "@/components/SectionCard";

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
          See how Dark28 works
        </Link>
      </div>
      <SectionCard title="Why it matters">
        <p>Lisbon’s Tram 28 passes through places marked by dictatorship, religious persecution, earthquakes, death, and collective memory — yet most visitors never notice them.
        Dark28 transforms a popular tourist route into an educational cultural experience focused on overlooked history and ethical storytelling.</p>
      </SectionCard>
      <SectionCard title="How it works">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-(--color-bg) p-6 shadow-sm transition hover:bg-(--color-yellow)">
            <h4 className="text-md font-semibold leading-none pb-5 tracking-tight md:text-md" style={{ fontFamily: "var(--font-headline)" }}>Step 1</h4>
            <div className="flex-wrap w-full">
              <h3 className="text-xl font-semibold leading-none pb-5 tracking-tight md:text-xl" style={{ fontFamily: "var(--font-headline)" }}>Follow Tram 28</h3>
              Explore Lisbon through the city’s most iconic tram route.
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-(--color-bg) p-6 shadow-sm transition hover:bg-(--color-yellow)">
            <h4 className="text-md font-semibold leading-none pb-5 tracking-tight md:text-md" style={{ fontFamily: "var(--font-headline)" }}>Step 2</h4>
            <div className="flex-wrap w-full">
            <h3 className="text-xl font-semibold leading-none pb-5 tracking-tight md:text-xl" style={{ fontFamily: "var(--font-headline)" }}>Discover History</h3>
            Access curated landmarks connected to tragedy, resistance, memory, and urban legends.
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-(--color-bg) p-6 shadow-sm transition hover:bg-(--color-yellow)">
            <h4 className="text-md font-semibold leading-none pb-5 tracking-tight md:text-md" style={{ fontFamily: "var(--font-headline)" }}>Step 3</h4>
            <div className="flex-wrap w-full">
            <h3 className="text-xl font-semibold leading-none pb-5 tracking-tight md:text-xl" style={{ fontFamily: "var(--font-headline)" }}>Build Your Route</h3>
            Save landmarks and create your own dark heritage journey through Lisbon.
            </div>
          </div>          
        </div>
      </SectionCard>
      <SectionCard title="Our categories">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <Link
              key={category.id}
              href={`/route?category=${category.id}`}
              className="rounded-2xl border border-black/10 bg-(--color-bg) p-6 shadow-sm transition hover:bg-(--color-yellow)"
            >
              <div className="w-full">
                <h3 className="text-xl font-semibold leading-none pb-5 tracking-tight md:text-xl" style={{ fontFamily: "var(--font-headline)" }}>{category.label}</h3>
                {category.description}
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/route"
          className="flex flex-row rounded-lg bg-(--color-yellow) px-4 py-3 mx-auto mt-5 w-fit text-lg font-medium text-black transition hover:opacity-90"
        >
          Explore all categories
        </Link>
      </SectionCard>
      <section className="mt-10">
        <h3 className="text-sm text-center uppercase tracking-wide p-2 text-black">
          A self-guided tour of 28 landmarks across Lisbon
        </h3>
        <div className="flex flex-row overflow-auto gap-4 object-center p-4">
          {landmarks.slice(0, 5).map((landmark) => (
            <Link
              key={landmark.id}
              href={`/route/${landmark.slug}`}
              className="flex flex-col gap-4 w-full max-w-xs min-h-auto rounded-lg border border-black/10 bg-white p-4 shadow-sm transition hover:bg-(--color-yellow)"
            >
              <Image
                src={landmark.imageUrl!}
                alt={landmark.title}
                width={700}
                height={700}
                className="w-56 aspect-square rounded object-cover"
              />
              <h3 className="text-xs font-medium text-center">{landmark.title}</h3>
            </Link>
          ))}
        </div>     
      </section>
      <SectionCard title="An Ethical Approach to Dark Heritage">
        <p>Dark28 does not sensationalize tragedy.
          The project focuses on historical context, cultural preservation, and respectful storytelling to encourage reflection rather than spectacle.</p>
      </SectionCard>
      <div className="flex flex-col w-full items-center gap-4 pt-10 text-center">
        <h2 className="text-3xl font-semibold leading-none tracking-tight md:text-3xl" style={{ fontFamily: "var(--font-headline)" }}>Ready to follow the route?</h2>
        <p
          className="mt-6 max-w-md text-2xl leading-snug text-(--color-gold)"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Start with the landmarks and build your own path through Lisbon’s overlooked histories.
        </p>
      </div>
      <div className="mt-10 flex w-full items-center flex-col gap-3">
        <Link
          href="/route"
          className="rounded-lg bg-(--color-text) px-5 py-3 text-lg font-medium text-(--color-bg) transition hover:opacity-90"
        >
          Start Exploring
        </Link>
      </div>
      </PageContainer>
    </main>
  );
}