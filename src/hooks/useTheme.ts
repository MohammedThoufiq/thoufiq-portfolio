"use client";

import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme) {
  const el = document.documentElement;
  el.classList.toggle("dark", theme === "dark");
  el.style.colorScheme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* ignore */
  }
}

/**
 * Reactive theme state. Subscribes to <html> class changes via a
 * MutationObserver so every consumer stays in sync no matter which
 * component performed the toggle.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(currentTheme());
    setMounted(true);

    const observer = new MutationObserver(() => setTheme(currentTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggle = () =>
    applyTheme(currentTheme() === "dark" ? "light" : "dark");

  return { theme, toggle, mounted };
}
