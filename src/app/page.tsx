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
          Learn more about us
        </Link>
      </div>
      <SectionCard title="Why it matters">
        <p className="p-4">Lisbon’s Tram 28 passes through places marked by dictatorship, religious persecution, earthquakes, death, and collective memory — yet most visitors never notice them.
        Dark28 transforms a popular tourist route into an educational cultural experience focused on overlooked history and ethical storytelling.</p>
      </SectionCard>
      <SectionCard title="How it works">
        <div className="flex flex-row w-full overflow-auto wrap-none justify-evenly">
          <SectionCard title="Step 1">
            <div className="flex-wrap w-50 p-2">
            <h1 className="max-w-md text-xl font-semibold leading-none pb-5 tracking-tight md:text-3xl" style={{ fontFamily: "var(--font-headline)" }}>Follow Tram 28</h1>
            Explore Lisbon through the city’s most iconic tram route.
            </div>
          </SectionCard>
          <SectionCard title="Step 2">
            <div className="flex-wrap w-50">
            <h1 className="max-w-md text-xl font-semibold leading-none pb-5 tracking-tight md:text-3xl" style={{ fontFamily: "var(--font-headline)" }}>Discover History</h1>
            Access curated landmarks connected to tragedy, resistance, memory, and urban legends.
            </div>
          </SectionCard>
          <SectionCard title="Step 3">
            <div className="flex-wrap w-50">
            <h1 className="max-w-md text-xl font-semibold leading-none pb-5 tracking-tight md:text-3xl" style={{ fontFamily: "var(--font-headline)" }}>Build Your Route</h1>
            Save landmarks and create your own dark heritage journey through Lisbon.
            </div>
          </SectionCard>          
        </div>
      </SectionCard>
      <SectionCard title="Our categories">
        <div className="flex flex-row w-full h-full overflow-auto wrap-none justify-evenly">
          {categories.slice(0, 5).map((category) => (
            <Link
              key={category.id}
              href={`/route?category=${category.id}`}
              className="flex-wrap w-full h-full"
            >
              <SectionCard title="">
                <div className="flex-wrap w-50 min-h-80">
                  <h1 className="max-w-md text-xl font-semibold pb-5 leading-none tracking-tight md:text-3xl" style={{ fontFamily: "var(--font-headline)" }}>{category.label}</h1>
                  {category.description}
                </div>
              </SectionCard>
            </Link>
          ))}
        </div>
      </SectionCard>
      <section className="mt-10">
        <h3 className="text-sm text-center uppercase tracking-wide p-2 text-black">
          A self-guided tour of 28 landmarks across Lisbon
        </h3>
        <div className="flex flex-row overflow-auto items-center justify-evenly gap-4 p-4">
          {landmarks.slice(0, 5).map((landmark) => (
            <Link
              key={landmark.id}
              href={`/route/${landmark.slug}`}
              className="flex flex-col items-center gap-4 w-fit rounded-lg border border-black/10 bg-white p-4 shadow-sm transition hover:bg-(--color-yellow)"
            >
              <Image
                src={landmark.imageUrl!}
                alt={landmark.title}
                width={700}
                height={700}
                className="w-full h-auto aspect-square rounded object-cover"
              />
              <h3 className="text-sm font-medium w-50">{landmark.title}</h3>
            </Link>
          ))}
        </div>     
      </section>
      <SectionCard title="An Ethical Approach to Dark Heritage">
        <p className="p-4">Dark28 does not sensationalize tragedy.
          The project focuses on historical context, cultural preservation, and respectful storytelling to encourage reflection rather than spectacle.</p>
      </SectionCard>
      <div className="flex flex-col w-full items-center gap-4 pt-10 text-center">
        <p
          className="mt-6 max-w-md text-2xl leading-snug text-(--color-gold)"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Explore Lisbon Through Its Forgotten Stories
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