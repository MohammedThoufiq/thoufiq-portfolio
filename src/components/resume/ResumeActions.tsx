"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download, Eye, FileText } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { resumePdfPath } from "@/data/resume";

type Props = {
  /** Fill the parent width (e.g. inside the hero button grid). */
  fullWidth?: boolean;
  /** Where the dropdown expands from — matters near page edges. */
  align?: "left" | "right";
};

/**
 * Split button: primary action opens the premium Resume View page,
 * an attached chevron reveals a dropdown with both View and Download.
 * Matches the site's cyan / rounded-xl / glow design language.
 */
export default function ResumeActions({
  fullWidth = false,
  align = "left",
}: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointer = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className={`relative ${fullWidth ? "w-full" : "inline-block"}`}
    >
      <div className="flex w-full">
        {/* Primary action → premium resume page */}
        <Link
          href="/resume"
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-l-xl
            bg-cyan-500
            px-6
            py-3
            font-semibold
            text-black
            transition-all
            duration-200
            hover:bg-cyan-400
            hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
          "
        >
          <FileText size={18} />
          Resume
        </Link>

        {/* Dropdown toggle */}
        <button
          type="button"
          aria-label="Resume options"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="
            flex
            items-center
            justify-center
            rounded-r-xl
            border-l
            border-black/20
            bg-cyan-500
            px-3
            text-black
            transition-all
            duration-200
            hover:bg-cyan-400
            hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
          "
        >
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={18} />
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            role="menu"
            className={`
              absolute
              z-50
              mt-2
              w-56
              overflow-hidden
              rounded-xl
              border
              border-hairline
              bg-surface-strong/95
              p-1.5
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              backdrop-blur-xl
              ${align === "right" ? "right-0" : "left-0"}
            `}
          >
            <Link
              href="/resume"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-4
                py-3
                text-sm
                text-body
                transition-colors
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              <Eye size={16} className="text-cyan-400" />
              View Resume
            </Link>

            <a
              href={resumePdfPath}
              download
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-4
                py-3
                text-sm
                text-body
                transition-colors
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              <Download size={16} className="text-cyan-400" />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
