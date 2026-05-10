import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import PageContainer from "@/components/PageContainer";
import Pill from "@/components/Pills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dark28: Understanding the Route",
  description:
    "Learn how Dark28 reimagines Lisbon’s Tram 28 through dark heritage, historical context, and ethical storytelling.",
};

export default function AboutPage() {
  return (
    <main className=" bg-(--color-bg) text-(--color-text)">
      <PageHeader backHref="/" />
      <PageContainer>
          <div className="flex w-full justify-center flex-col items-center pt-6 text-center md:pt-8">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--font-headline)" }}>
            Understanding the route
          </h1>
          <p
          className="text-2xl text-(--color-gold) pt-6 md:pt-8"
          style={{ fontFamily: "var(--font-accent)" }}
          >
            Dark28 reimagines Lisbon’s Tram 28 as a self-guided experience focused on overlooked history, ethical storytelling, and cultural reflection.
          </p>
        <SectionCard title="Why this project exists?" className="mt-7">
          <p>
          Lisbon is often presented through postcard imagery, yet many places along Tram 28 are tied to dictatorship, colonialism, death, persecution, and collective memory. Dark28 was designed to make those histories more visible without turning them into spectacle.
          </p>
        </SectionCard>
        <SectionCard title="Why Tram 28" className="mt-7">
          <p>
          Tram 28 already offers a familiar route through Lisbon, which makes it a powerful narrative structure. Instead of inventing an entirely new path, Dark28 reinterprets an existing one through a darker cultural lens.
          </p>
        </SectionCard>
        <SectionCard title="How the experience works" className="mt-7">
          <p>
          Users can browse landmarks by historical theme, open detail pages with contextual storytelling, save stops into a personal plan, mark places as visited, and follow the route in either direction.
          </p>
        </SectionCard>
        <SectionCard title="Ethical approach" className="mt-7">
          <p>
          Dark28 does not sensationalize suffering. The project prioritizes context, memory, and respect, framing each place as part of Lisbon’s wider historical and social reality.
          </p>
        </SectionCard>
        <SectionCard title="From research to product" className="my-7">
          <p>
          The project began as an academic concept in cultural tourism and heritage and was later rebuilt as a front-end portfolio piece. This version focuses on interface design, information architecture, content modelling, and product thinking.
          </p>
        </SectionCard>
        <Pill style="secondary" href="/route" label="Explore the landmarks" />
        </div>
      </PageContainer>
    </main>
  );
}