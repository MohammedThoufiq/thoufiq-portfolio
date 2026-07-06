"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: ReactNode;
  eyebrow?: string;
  children: ReactNode;
};

/**
 * Accessible, theme-aware detail dialog used for the Level-2 (detailed)
 * view of compact cards. Handles Escape, backdrop click, body scroll lock,
 * and focus management so cards stay fixed-size with no information loss.
 */
export default function DetailModal({
  open,
  onClose,
  title,
  subtitle,
  eyebrow,
  children,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog for keyboard/screen-reader users.
    panelRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="
              relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col
              overflow-hidden rounded-2xl border border-hairline
              bg-surface-strong shadow-[0_30px_80px_rgba(0,0,0,0.35)]
              outline-none
            "
          >
            <div className="flex items-start justify-between gap-4 border-b border-hairline p-6">
              <div>
                {eyebrow && (
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">
                    {eyebrow}
                  </p>
                )}
                <h3 className="mt-1 text-xl font-bold tracking-tight text-fg">
                  {title}
                </h3>
                {subtitle && (
                  <div className="mt-1 text-sm text-muted">{subtitle}</div>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 rounded-lg border border-hairline p-2 text-muted transition-colors hover:border-cyan-400 hover:text-cyan-400"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
