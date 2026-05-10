import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { landmarks } from "@/data/landmarks";
import { categories } from "@/data/categories";
import Link from "next/link";
import Image from "next/image";
import SectionCard from "@/components/SectionCard";
import type { Metadata } from "next";
import Pill from "@/components/Pills";

export const metadata: Metadata = {
  title: "Dark28: Lisbon’s Dark Cultural Heritage Route",
  description:
    "Explore overlooked stories of tragedy, resistance, faith, and memory along Lisbon’s iconic Tram 28 with Dark28.",
};

export default function Home() {
  return (
    <main>
    <PageHeader backHref="" />
    <PageContainer>
      <div className="flex w-full justify-center flex-col items-center gap-4 pt-6 text-center md:pt-8">
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
          Explore overlooked stories of tragedy, resistance, faith, and memory through one of Lisbon’s most iconic tram routes.
        </p>
        
      </div>
      <div className="mt-8 flex w-full flex-col items-center gap-3 my-7">
        <Pill href="/route" label="Explore Route" style="primary" />
        <Pill href="/about" label="See how Dark28 works" style="default" />
      </div>
      <SectionCard title="Why it matters" className="mt-7">
        <p>Tram 28 passes through places shaped by dictatorship, religious persecution, disaster, colonial memory, and mourning, yet most people experience the route without seeing those layers. Dark28 reframes a familiar tourist journey as an opportunity for historical reflection, cultural awareness, and ethical discovery.</p>
      </SectionCard>
      <SectionCard title="How it works" className="mt-7">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-(--color-text)/10 bg-(--color-bg) p-6 shadow-sm transition hover:bg-(--color-yellow) hover:text-black">
            <h4 className="text-md font-semibold leading-none pb-5 tracking-tight md:text-md" style={{ fontFamily: "var(--font-headline)" }}>Step 1</h4>
            <div className="flex-wrap w-full">
              <h3 className="text-xl font-semibold leading-none pb-5 tracking-tight md:text-xl" style={{ fontFamily: "var(--font-headline)" }}>Follow the route</h3>
              Start with Lisbon’s most iconic tram line and use it as a cultural thread through the city.
            </div>
          </div>
          <div className="rounded-2xl border border-(--color-text)/10 bg-(--color-bg) p-6 shadow-sm transition hover:bg-(--color-yellow) hover:text-black">
            <h4 className="text-md font-semibold leading-none pb-5 tracking-tight md:text-md" style={{ fontFamily: "var(--font-headline)" }}>Step 2</h4>
            <div className="flex-wrap w-full">
            <h3 className="text-xl font-semibold leading-none pb-5 tracking-tight md:text-xl" style={{ fontFamily: "var(--font-headline)" }}>Discover overlooked histories</h3>
            Browse landmarks connected to repression, memory, disaster, faith, colonialism, and political struggle.
            </div>
          </div>
          <div className="rounded-2xl border border-(--color-text)/10 bg-(--color-bg) p-6 shadow-sm transition hover:bg-(--color-yellow) hover:text-black">
            <h4 className="text-md font-semibold leading-none pb-5 tracking-tight md:text-md" style={{ fontFamily: "var(--font-headline)" }}>Step 3</h4>
            <div className="flex-wrap w-full">
            <h3 className="text-xl font-semibold leading-none pb-5 tracking-tight md:text-xl" style={{ fontFamily: "var(--font-headline)" }}>Build your own path</h3>
            Save landmarks, switch direction, and create a self-guided route shaped by your own interests.
            </div>
          </div>          
        </div>
      </SectionCard>
      <div className="mt-8 flex w-full flex-col items-center gap-3">
        <Pill href="/plan" label="Explore your plan"  style="secondary" />
      </div>
      <SectionCard title="Our categories" className="mt-7">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <Link
              key={category.id}
              href={`/route?category=${category.id}`}
              className="rounded-2xl border border-(--color-text)/10 bg-(--color-bg) p-6 shadow-sm transition hover:bg-(--color-yellow) hover:text-black"
            >
              <div className="w-full">
                <h3 className="text-xl font-semibold leading-none pb-5 tracking-tight md:text-xl" style={{ fontFamily: "var(--font-headline)" }}>{category.label}</h3>
                {category.description}
              </div>
            </Link>
          ))}
        </div>
      </SectionCard>
      <div className="mt-8 flex w-full flex-col items-center gap-3">
        <Pill href="/route" label="Explore all categories"  style="secondary" />
      </div>
      <section className="mt-10">
        <h3 className="text-xl font-semibold leading-none pb-5 text-center tracking-tight md:text-xl" style={{ fontFamily: "var(--font-headline)" }}>
          Three landmarks that reveal the route
        </h3>
        <p className="mx-auto max-w-2xl text-center text-sm text-(--color-text)/70">
          These first stops show the range of stories behind Dark28, from funerary heritage and monarchy to colonial memory and political repression.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 center">
          {landmarks.slice(0, 3).map((landmark) => (
            <Link
              key={landmark.id}
              href={`/route/${landmark.slug}`}
              className="flex flex-col gap-4 w-full items-center mx-auto my-4 max-w-sm rounded-lg border border-(--color-text)/10 bg-(--color-surface) p-4 shadow-sm transition hover:bg-(--color-yellow) hover:text-black"
            >
              <Image
                src={landmark.imageUrl!}
                alt={landmark.title}
                width={700}
                height={700}
                className="w-full aspect-square items-center rounded object-cover"
              />
              <h3 className="text-xl font-medium text-center" style={{ fontFamily: "var(--font-headline)" }}>{landmark.title}</h3>
              <span className="text-center text-xs font-semibold text-(--color-text)/50">
                View landmark
              </span>
            </Link>
          ))}
        </div>     
      </section>
      <SectionCard title="An Ethical Approach to Dark Heritage">
        <p>Dark28 treats difficult history with care. Rather than dramatizing violence or loss, the project emphasizes context, remembrance, and responsible interpretation, encouraging users to engage with Lisbon’s past in a more reflective way.</p>
      </SectionCard>
        <div className="flex w-full flex-col items-center gap-4 pt-8 text-center">
          <h2 className="text-3xl font-semibold leading-none tracking-tight md:text-3xl" style={{ fontFamily: "var(--font-headline)" }}>Ready to explore Lisbon differently?</h2>
          <p
            className="mt-6 max-w-md text-2xl leading-snug text-(--color-gold)"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Start with the landmarks and follow a route shaped by memory, conflict, belief, and historical change.
          </p>
        </div>
        <div className="mt-8 flex w-full flex-col mb-10 items-center gap-3">
          <Pill
            href="/route"
            label="Explore landmarks"
            style="primary"
          />
        </div>
    </PageContainer>
    </main>
  );
}