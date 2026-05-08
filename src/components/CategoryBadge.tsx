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
    "rounded-full bg-(--color-burgundy) px-4 py-1 text-xs font-semibold text-(--color-surface) transition hover:opacity-90";

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return <span className={className}>{label}</span>;
}