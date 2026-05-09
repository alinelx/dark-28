"use client";

import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle(){
  const { theme, setTheme } = useTheme();
  const roundButtonClass =
    "flex h-12 w-12 items-center justify-center rounded-full bg-(--color-text) text-lg (--transition-button)";
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={roundButtonClass}
    >
      {theme === "dark"
          ? "👻"
          : "🧛"}
    </button>
  );
}