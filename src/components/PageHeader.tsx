"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Pill from "./Pills";
import Button from "./Buttons";

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
        className="h-auto w-full transition-transform duration-200 ease-in-out hover:scale-110 hover:rotate-360"
        alt="Dark28 Logo"
        priority
      />
    </Link>
  );
}

export default function PageHeader({ backHref }: PageHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <Pill href={backHref} style="round" label="⏴" />
        ) : (
          <div className="invisible">
            <Pill style="round" label="⏴" />
          </div>
        )}

        {isMenuOpen ? (
          <div className="invisible">
          <Logo />
          </div>
        ) : (
          <Logo />
        )}

        <Button
          style="round"
          onClick={openMenu}
          ariaLabel="Open menu"
          ariaControls="site-menu"
          ariaExpanded={isMenuOpen}
        >
          ☰
        </Button>
      </div>
      </header>

      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/20"
        />
      )}

      <aside
        id="site-menu"
        aria-label="Main menu"
        className={`fixed right-0 top-0 z-50 flex h-full place-content-end w-72 flex-col gap-6 bg-(--color-surface)/80 p-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-row items-center gap-4 justify-evenly">
          <ThemeToggle />

          <Logo />

          <Button style="round" onClick={closeMenu} ariaLabel="Close menu">
            ✕
          </Button>
        </div>

        <nav className="flex flex-col w-fit gap-7">
          <Link onClick={closeMenu} href="/"><Pill style="secondary" label="Home" /></Link>
          <Link onClick={closeMenu} href="/about"><Pill style="secondary" label="About" /></Link>
          <Link onClick={closeMenu} href="/plan"><Pill style="secondary" label="My Plan" /></Link>
          <Link onClick={closeMenu} href="/profile"><Pill style="secondary" label="My progress" /></Link>
          <Link onClick={closeMenu} href="/route"><Pill style="primary" label="Explore route" /></Link>
          <div className="text-xs text-center place-items-end">Dark28: Unveiling Lisbon’s hidden stories. Crafted by <Link href="https://github.com/alinelx/dark-28" className="font-black underline">alinelx</Link>.</div>
        </nav>
      </aside>
    </>
  );
}