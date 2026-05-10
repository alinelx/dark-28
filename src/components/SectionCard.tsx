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
      className={`rounded-3xl gap-7 p-10 m-10 w-full justify-center items-center font-semibold ring-1 shadow-text  transition-all delay-200 duration-200 ease-in-out hover:scale-102 shadow-md ${className}`}
    > <h2
        className="mb-3 text-2xl font-black"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {title}
      </h2>
      <div className="leading-7">{children}</div>
    </section>
  );
}