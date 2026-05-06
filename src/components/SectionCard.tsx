import { ReactNode } from "react";

type SectionCardProps = {
    title: string;
    children: ReactNode;
};

export default function SectionCard({
    title,
    children,
}: SectionCardProps) {
    return (
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h2
            className="mb-3 text-2xl font-semibold"
            style={{ fontFamily: "var(--font-accent)" }}
        >
            {title}
        </h2>
        <div className="leading-7">{children}</div>
        </section>
    );
}