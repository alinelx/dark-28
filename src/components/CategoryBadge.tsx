import Link from "next/link";

type CategoryBadgeProps = {
  label: string;
  href?: string;
};

export default function CategoryBadge({
  label,
  href,
}: CategoryBadgeProps) {
  const className =
    "rounded-full bg-(--color-burgundy) gap-2 px-4 py-1 text-xs shadow-text ring-2 shadow-md/70 font-semibold text-white (--transform-button)";

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return <span className={className}>{label}</span>;
}