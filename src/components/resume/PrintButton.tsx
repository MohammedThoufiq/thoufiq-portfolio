"use client";

import { Printer } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Triggers the browser print dialog. The page ships a print-only,
 * ATS-friendly document (see ResumePrintDocument) so "Save as PDF"
 * produces the redesigned layout rather than the dark screen UI.
 */
export default function PrintButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => window.print()}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-xl border border-hairline px-6 py-3
        font-medium text-body
        transition-colors
        hover:border-cyan-400 hover:text-cyan-300
        ${className}
      `}
    >
      <Printer size={18} />
      Save as PDF
    </motion.button>
  );
}
