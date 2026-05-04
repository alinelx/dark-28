import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <header className="flex items-center justify-between bg-(--color-yellow) px-6 pb-6 pt-10">
        <div className="text-lg font-semibold tracking-wide">Dark28</div>

        <button
          type="button"
          aria-label="Open menu"
          className="rounded-full bg-(--color-text) px-4 py-2 text-sm text-(--color-bg)"
        >
          Menu
        </button>
      </header>

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

          <button
            type="button"
            className="rounded-lg bg-(--color-burgundy) px-5 py-3 text-lg font-medium text-(--color-bg) transition hover:opacity-90"
          >
            Why Dark28?
          </button>
        </div>
      </section>
    </main>
  );
}