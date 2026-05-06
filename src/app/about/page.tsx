import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <PageHeader backHref="/" />
      <SectionCard title="What is Dark28?">
        <p>
          Dark28 is a digital cultural heritage project that reimagines Lisbon’s
          iconic Tram 28 as a route through the city’s darker and often overlooked
          histories.
          <br />
          <br />
          Instead of focusing only on postcard landmarks, it invites visitors to
          explore places connected to death, dictatorship, religion, colonialism,
          disaster, punishment, and collective memory.
        </p>
      </SectionCard>
      <SectionCard title="Why Dark28?">
        <p>
          Dark28 offers a unique perspective on Lisbon’s cultural landscape by
          highlighting stories that are often marginalized or forgotten.
        </p>
      </SectionCard>
      <SectionCard title="Ethical approach">
        <p>
          Dark28 is not designed to sensationalize suffering. Its goal is to  present difficult histories with context, sensitivity, and respect.
          <br />
          <br />
          The project encourages critical reflection, cultural awareness, and responsible tourism by framing each site as part of Lisbon’s wider historical, political, and social reality.
        </p>
      </SectionCard>
      <SectionCard title="Project origin">
        <p>
          Dark28 began as an academic project in Cultural Tourism and Heritage at EHTL and is now being rebuilt as a digital product and front-end app/web portfolio piece.
          <br />
          <br />
          It combines historical storytelling, editorial design, tourism research, and modern web development into a product that is both educational and scalable.
        </p>
      </SectionCard>
      <div className="pt-2 items-center justify-center text-center">
        <Link
          href="/route"
          className="inline-block rounded-full bg-(--color-burgundy) px-5 py-3 text-lg font-bold text-(--color-bg) transition hover:opacity-90"
        >
          Explore Route
        </Link>
      </div>
    </main>
  );
}