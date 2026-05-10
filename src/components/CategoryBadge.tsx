import Pills from "./Pills";

type CategoryBadgeProps = {
  label: string;
  href?: string;
};

export default function CategoryBadge({
  label,
  href,
}: CategoryBadgeProps) {
  if (href) {
    return (
      <Pills href={href} label={label} style="category"/>
    );
  }
  return <Pills label={label} style="category" />;
}