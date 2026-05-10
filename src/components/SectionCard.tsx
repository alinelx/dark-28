import { ReactNode } from "react";

type SectionCardProps = {
  title?: string;
  className?: string;
  children: ReactNode;
};



export default function SectionCard({
  title,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={`rounded-3xl p-3 mx-auto w-fit font-semibold ring-1 shadow-text transition-all delay-200 duration-200 ease-in-out hover:scale-102 shadow-md ${className}`}
    > {title? (<h2
        className="mb-3 text-2xl font-black"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {title}
      </h2>) : null}
      {children}
    </section>
  );
}