import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <header className="bg-(--color-yellow) px-6 pb-6 pt-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold underline underline-offset-4"
          >
            Back Home
          </Link>

          <div className="text-lg font-semibold tracking-wide">Dark28</div>
        </div>
      </header>

      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-10">
        <h1
          className="text-4xl font-black md:text-5xl"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Why Dark28?
        </h1>

        <p
          className="text-2xl font-bold text-(--color-gold)"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          A cultural route through Lisbon’s overlooked histories of tragedy,
          power, faith, punishment, and memory.
        </p>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2
            className="mb-3 text-2xl font-semibold"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            What is Dark28?
          </h2>
          <p className="leading-7">
            Dark28 is a digital cultural heritage project that reimagines
            Lisbon’s iconic Tram 28 as a route through the city’s darker and
            often overlooked histories.<br/><br/>
            Instead of focusing only on postcard
            landmarks, it invites visitors to explore places connected to death,
            dictatorship, religion, colonialism, disaster, punishment, and
            collective memory.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2
            className="mb-3 text-2xl font-semibold"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Why dark heritage?
          </h2>
          <p className="leading-7">
            Dark heritage helps us understand how cities are shaped not only by
            beauty and celebration, but also by conflict, loss, violence,
            repression, and remembrance.<br/><br/>
            Lisbon’s urban landscape preserves
            traces of these histories in cemeteries, prisons, churches, ruins,
            museums, and public spaces.<br/><br/>Dark28 turns those traces into a guided
            experience of reflection and discovery.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2
            className="mb-3 text-2xl font-semibold"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Ethical approach
          </h2>
          <p className="leading-7">
            Dark28 is not designed to sensationalize suffering. Its goal is to
            present difficult histories with context, sensitivity, and respect.<br/><br/>
            The project encourages critical reflection, cultural awareness, and
            responsible tourism by framing each site as part of Lisbon’s wider
            historical, political, and social reality.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2
            className="mb-3 text-2xl font-semibold"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Project origin
          </h2>
          <p className="leading-7">
            Dark28 began as an academic project in Cultural Tourism and Heritage at EHTL
            and is now being rebuilt as a digital product and front-end app/web
            portfolio piece.<br/><br/>
            It combines historical storytelling, editorial
            design, tourism research, and modern web development into a product
            that is both educational and scalable.
          </p>
        </section>

        <div className="pt-2 items-center justify-center text-center">
          <Link
            href="/route"
            className="inline-block rounded-full bg-(--color-burgundy) px-5 py-3 text-lg font-bold text-(--color-bg) transition hover:opacity-90"
          >
            Explore Route
          </Link>
        </div>
      </section>
    </main>
  );
}