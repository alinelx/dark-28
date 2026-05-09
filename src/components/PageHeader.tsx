"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

type PageHeaderProps = {
  backHref?: string;
};

function Logo() {
  return (
    <Link href="/" aria-label="Go to homepage" className="block w-20">
      <Image
        src="/logo.png"
        width={160}
        height={160}
        className="h-auto w-full transition-transform duration-200 ease-in-out hover:scale-110"
        alt="Dark28 Logo"
        priority
      />
    </Link>
  );
}

export default function PageHeader({ backHref }: PageHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const primaryButtonClass =
    "rounded-full bg-black px-4 py-3 text-sm font-bold text-white transition-transform duration-200 ease-in-out hover:scale-105";

  const secondaryButtonClass =
    "rounded-full bg-(--color-yellow) px-4 py-3 text-sm font-bold text-black transition-transform duration-200 ease-in-out hover:scale-105";

  const roundButtonClass =
    "flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-extrabold text-white transition-transform duration-200 ease-in-out hover:scale-110";

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <header className="bg-(--color-yellow) px-6 pb-6 pt-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          {backHref ? (
            <Link href={backHref} className={roundButtonClass} aria-label="Go back">
              ⏴
            </Link>
          ) : (
            <div aria-hidden="true" className={`${roundButtonClass} invisible`}>
              ⏴
            </div>
          )}

          <Logo />

          <button
            type="button"
            aria-label="Open menu"
            aria-controls="site-menu"
            aria-expanded={isMenuOpen}
            onClick={openMenu}
            className={roundButtonClass}
          >
            ☰
          </button>
        </div>
      </header>

      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-(--color-text)/40 transition-opacity duration-300 ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="site-menu"
        aria-label="Main menu"
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-6 bg-(--color-surface) p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold text-(--color-text)"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Dark28
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className={roundButtonClass}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          <Link href="/" onClick={closeMenu} className={secondaryButtonClass}>
            Home
          </Link>

          <Link href="/about" onClick={closeMenu} className={secondaryButtonClass}>
            About
          </Link>

          <Link href="/plan" onClick={closeMenu} className={secondaryButtonClass}>
            My Plan
          </Link>

          <Link href="/profile" onClick={closeMenu} className={secondaryButtonClass}>
            My Progress
          </Link>

          <Link href="/route" onClick={closeMenu} className={primaryButtonClass}>
            Explore Route
          </Link>
        </nav>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-(--color-text)/60">Theme</p>
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}