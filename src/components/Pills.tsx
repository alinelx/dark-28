import Link from "next/link";

type PillType = {
  label: string;
  href?: string;
  style: "primary" | "secondary" | "round" | "category" | "info" | "default";
};

function pillClasses(style: PillType["style"]) {
  switch (style) {
    case "primary":
      return "rounded-full mb-3 px-6 py-3 uppercase font-bold shadow-text ring-1 shadow-md/50 text-xl bg-(--color-text) text-(--color-surface) hover:bg-(--color-yellow) hover:text-(--color-black) transition-all duration-200 ease-in-out hover:scale-110";

    case "secondary":
      return "rounded-full mb-3 px-5 py-2 uppercase font-bold shadow-text ring-1 shadow-md/50 text-md bg-(--color-yellow) text-(--color-black) hover:bg-(--color-black) hover:text-(--color-white) transition-all duration-200 ease-in-out hover:scale-110";

    case "round":
      return "flex h-12 w-auto aspect-square items-center justify-center rounded-full bg-(--color-black) text-lg font-extrabold text-(--color-white) transition-all duration-100 ease-in-out hover:scale-110 hover:text-xl";

    case "info":
      return "rounded-full gap-4 px-4 py-1 uppercase font-bold text-xs  bg-(--color-gold) text-(--color-black) hover:bg-(--color-text) hover:text-(--color-bg) transition-all duration-200 ease-in-out hover:scale-105";
    
    case "category":
      return "rounded-full gap-4 px-4 py-1 uppercase font-bold shadow-text shadow-md/50 text-xs bg-(--color-burgundy) text-(--color-white) hover:bg-(--color-text) hover:text-(--color-bg) transition-all duration-200 ease-in-out hover:scale-105";

    default:
      return "rounded-full gap-4 px-4 py-1 uppercase font-bold shadow-text shadow-md/50 text-xs bg-(--color-bg) text-(--color-text) hover:bg-(--color-text) hover:text-(--color-bg) transition-all duration-200 ease-in-out hover:scale-110";
  }
}

export default function Pill({ label, href, style }: PillType) {
  const className = pillClasses(style);

  if (href) {
    return <Link href={href} className={className}>{label}</Link>;
  }

  return <span className={className}>{label}</span>;
}