import PageHeader from "@/components/PageHeader";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <PageHeader backHref="" />
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
    </main>
  );
}