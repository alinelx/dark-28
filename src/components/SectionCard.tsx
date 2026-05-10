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
      className={`rounded-3xl p-7 my-10 mx-3 justify-center items-center font-semibold ring-1 shadow-text  transition-all delay-200 duration-200 ease-in-out hover:scale-102 shadow-md ${className}`}
    > {title? (<h2
        className="mb-3 text-2xl font-black"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {title}
      </h2>) : null}
      <div className="leading-7">{children}</div>
    </section>
  );
}