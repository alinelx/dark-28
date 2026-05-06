import Link from "next/link";
import Image from "next/image";

type PageHeaderProps = {
  backHref?: string;
  backLabel?: string;
  brand?: typeof Logo;
};

export function Logo(){
  return (
    <Image
        src="https://i.imgur.com/NgOQvTi.png"
        width= "0"
        height="0"
        sizes="20vw"
        className="w-full h-auto"
        alt="Dark28 Logo"
    />
  )
}

export default function PageHeader({
  backHref,
  backLabel,
  brand = Logo,
}: PageHeaderProps) {
  return (
    <header className="bg-(--color-yellow) px-6 pb-6 pt-10">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        {backHref && backLabel ? (
          <Link
            href={backHref}
            className="text-sm font-semibold underline underline-offset-4"
          >
            {backLabel}
          </Link>
        ) : (
          <div />
        )}

        <div className="text-lg w-auto aspect-ratio-1 font-semibold tracking-wide">{brand()}</div>
      </div>
    </header>
  );
}