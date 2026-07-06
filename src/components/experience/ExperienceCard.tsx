"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

import DetailModal from "@/components/ui/DetailModal";
import GlowCard from "@/components/ui/GlowCard";

type ExperienceCardProps = {
  company: string;
  client?: string;
  role: string;
  duration: string;
  summary?: string;
  metric?: string;
  highlights: string[];
  techStack: string[];
};

/**
 * Level-1 compact experience card — fixed height, uniform across the grid,
 * showing role, duration, key tech, a one-line summary and the headline
 * metric. Full responsibilities open in a detail modal (Level 2).
 */
export default function ExperienceCard({
  company,
  client,
  role,
  duration,
  summary,
  metric,
  highlights,
  techStack,
}: ExperienceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <GlowCard className="p-6 md:p-7">
        <div className="flex h-full min-h-[280px] flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-fg md:text-xl">
              {role}
            </h3>
            <p className="mt-1 text-accent">{company}</p>
            {client && <p className="mt-0.5 text-sm text-faint">{client}</p>}
          </div>
          <span className="shrink-0 rounded-full border border-hairline px-3 py-1 text-xs text-muted">
            {duration}
          </span>
        </div>

        {summary && (
          <p className="mt-5 leading-7 text-muted">{summary}</p>
        )}

        {metric && (
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-fg">
            <TrendingUp size={16} className="text-accent" />
            {metric}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-xs text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          className="mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-sm font-medium text-accent transition-colors hover:text-cyan-400"
        >
          View details
          <ArrowUpRight size={16} />
        </button>
        </div>
        </GlowCard>
      </motion.div>

      <DetailModal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow={duration}
        title={role}
        subtitle={
          <>
            {company}
            {client ? ` · ${client}` : ""}
          </>
        }
      >
        <div className="mb-6 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-3 text-body">
          {highlights.map((h) => (
            <li key={h} className="flex gap-3 leading-7">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </DetailModal>
    </>
  );
}
