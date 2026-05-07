"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type PageHeaderProps = {
  backHref?: string;
  backLabel?: string;
};

function Logo() {
  return (
    <Link href="/" aria-label="Go to homepage" className="block w-20">
      <Image
        src="/logo.png"
        width={160}
        height={160}
        className="h-auto w-full hover:scale-130 transition-transform duration-200 ease-in-out"
        alt="Dark28 Logo"
        priority
      />
    </Link>
  );
}

export default function PageHeader({
  backHref
}: PageHeaderProps) {
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const primaryButtonClass =
    "rounded-full bg-black px-4 py-3 text-sm font-bold text-white hover:scale-110 transition-transform duration-200 ease-in-out";
  const secondaryButtonClass =
    "rounded-full bg-(--color-yellow) px-4 py-3 text-sm font-bold text-black hover:scale-110 transition-transform duration-200 ease-in-out";
  const roundButtonClass =
    "flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-extrabold text-white hover:scale-130 transition-transform duration-200 ease-in-out";
  function openMenu() {
    setIsMenuMounted(true);
  }

  function closeMenu() {
    setIsMenuVisible(false);
  }

  useEffect(() => {
    if (isMenuMounted) {
      const id = requestAnimationFrame(() => {
        setIsMenuVisible(true);
      });

      return () => cancelAnimationFrame(id);
    }
  }, [isMenuMounted]);

  function handleTransitionEnd() {
    if (!isMenuVisible) {
      setIsMenuMounted(false);
    }
  }

  return (
    <>
      <header className="bg-(--color-yellow) px-6 pb-6 pt-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          {backHref ? (
            <Link
              href={backHref}
              className={roundButtonClass}
              aria-label="Go back"
            >
              ⏴
            </Link>
          ) : (
            <div
              aria-hidden="true"
              className={roundButtonClass+" invisible"}
            >
              ⏴
            </div>
          )}

          <Logo />

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuVisible}
            onClick={openMenu}
            className={roundButtonClass}
          >
            ☰
          </button>
        </div>
      </header>

      {isMenuMounted && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={closeMenu}
            className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
              isMenuVisible ? "opacity-100" : "opacity-0"
            }`}
          />

          <aside
            onTransitionEnd={handleTransitionEnd}
            className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-6 bg-white p-6 shadow-2xl transition-transform duration-700 ease-in-out ${
              isMenuVisible ? "translate-x-0" : "translate-x-full"
            }`}
          >
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
                className={roundButtonClass}
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={closeMenu}
              className={secondaryButtonClass}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className={secondaryButtonClass}
              >
                About
              </Link>


              <Link
                href="/plan"
                onClick={closeMenu}
                className={secondaryButtonClass}
              >
                My Plan
              </Link>

              <Link
                href="/profile"
                onClick={closeMenu}
                className={secondaryButtonClass}
              >
                Profile
              </Link>

              <Link
                href="/route"
                onClick={closeMenu}
                className={primaryButtonClass}
              >
                Explore Route
              </Link>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}