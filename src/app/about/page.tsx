import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import PageContainer from "@/components/PageContainer";

export default function AboutPage() {
  return (
    <main className=" bg-(--color-bg) text-(--color-text)">
      <PageHeader backHref="/" />
      <PageContainer>
        <div className="flex flex-col w-full items-center gap-8 pt-10 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--font-headline)" }}>
            Why Dark28?
          </h1>
          <p
          className="mt-6 max-w-md text-2xl leading-snug text-(--color-gold)"
          style={{ fontFamily: "var(--font-accent)" }}
          >
            Dark28 offers a unique perspective on Lisbon’s cultural landscape by highlighting stories that are often marginalized or forgotten.
          </p>
        <div className="mt-10 flex w- items-center flex-col gap-6">
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
      </div>
      <div className="pt-2 items-center justify-center text-center">
        <Link
          href="/route"
          className="inline-block rounded-full bg-(--color-burgundy) px-5 py-3 text-lg font-bold text-(--color-bg) transition hover:opacity-90"
        >
          Explore Route
        </Link>
      </div>
      </div>
      </PageContainer>
    </main>
  );
}