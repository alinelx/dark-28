"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type PageHeaderProps = {
  backHref?: string;
  backLabel?: string;
};

function Logo() {
  return (
    <Link href="/" aria-label="Go to homepage" className="block w-16">
      <Image
        src="/logo.png"
        width={160}
        height={160}
        className="h-auto w-full"
        alt="Dark28 Logo"
        priority
      />
    </Link>
  );
}

export default function PageHeader({
  backHref
}: PageHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="bg-(--color-yellow) px-6 pb-6 pt-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          {backHref ? (
            <Link
              href={backHref}
              className="rounded-full bg-(--color-yellow) px-4 py-2 text-2xl font-bold text-black"
              aria-label="Go back"
            >
              ⬅
            </Link>
          ) : (
            <div
              aria-hidden="true"
              className="invisible rounded-full bg-(--color-yellow) px-4 py-2 text-2xl font-bold"
            >
              ⬅
            </div>
          )}

          <Logo />

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="rounded-full bg-(--color-text) px-4 py-2 text-sm font-bold text-(--color-bg)"
          >
            Menu
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-black/40"
          />

          <aside className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-6 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Dark28
              </div>

              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="rounded-full bg-(--color-text) px-3 py-2 text-sm font-bold text-(--color-bg)"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={closeMenu}
                className="rounded-full bg-(--color-yellow) px-4 py-3 text-sm font-bold text-black"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="rounded-full bg-(--color-burgundy) px-4 py-3 text-sm font-bold text-(--color-bg)"
              >
                About
              </Link>

              <Link
                href="/route"
                onClick={closeMenu}
                className="rounded-full bg-(--color-text) px-4 py-3 text-sm font-bold text-(--color-bg)"
              >
                Explore Route
              </Link>

              <Link
                href="/plan"
                onClick={closeMenu}
                className="rounded-full  p-2 text-sm font-bold text-black"
              >
                My Plan
              </Link>
              <Link
                href="/profile"
                onClick={closeMenu}
                className="rounded-full p-2 pt-1 text-sm font-bold text-black"
              >
                Profile
              </Link>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}