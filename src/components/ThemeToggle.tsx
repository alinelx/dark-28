"use client";

import { useTheme } from "@/hooks/useTheme";
import Button from "./Buttons";

export default function ThemeToggle(){
  const { theme, setTheme } = useTheme();
  return (
    <Button 
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style="round"
      ariaLabel={theme === "dark" ? "dark mode"  : "light mode"}
    >
      {theme === "dark"
          ? "👻"
          : "🧛"}
    </Button>
  );
}