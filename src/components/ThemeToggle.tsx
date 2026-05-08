"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <div className="rounded-full border border-black/10 px-3 py-2 text-sm font-bold">
          Theme
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
        className={`rounded-full px-3 py-2 text-sm font-bold ${
          theme === "light"
            ? "bg-(--color-text) text-(--color-bg)"
            : "bg-(--color-surface) border border-black/10 text-(--color-text)"
        }`}
      >
        Light
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
        className={`rounded-full px-3 py-2 text-sm font-bold ${
          theme === "dark"
            ? "bg-(--color-text) text-(--color-bg)"
            : "bg-(--color-surface) border border-black/10 text-(--color-text)"
        }`}
      >
        Dark
      </button>

      <button
        type="button"
        onClick={() => setTheme("system")}
        aria-pressed={theme === "system"}
        className={`rounded-full px-3 py-2 text-sm font-bold ${
          theme === "system"
            ? "bg-(--color-text) text-(--color-bg)"
            : "bg-(--color-surface) border border-black/10 text-(--color-text)"
        }`}
      >
        System
      </button>
    </div>
  );
}