"use client";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const { theme, toggle, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className={`
        relative flex h-9 w-9 items-center justify-center
        rounded-full border border-hairline
        text-accent
        transition-colors
        hover:border-cyan-400 hover:text-cyan-300
        ${className}
      `}
    >
      {/* Avoid hydration mismatch: render nothing until mounted */}
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
