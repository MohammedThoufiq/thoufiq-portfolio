import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import GlowCard from "@/components/ui/GlowCard";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl: string;
};

export default function ProjectCard({
  slug,
  title,
  description,
  techStack,
  highlights,
  githubUrl,
}: ProjectCardProps) {
  return (
    <GlowCard className="p-6 md:p-7">
    <div className="flex h-full min-h-[280px] flex-col">
      <Link href={`/projects/${slug}`} className="group">
        <h3 className="text-lg font-bold tracking-tight text-fg transition-colors group-hover:text-cyan-400 md:text-xl">
          {title}
        </h3>
      </Link>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-xs text-cyan-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-4 leading-7 text-muted">{description}</p>

      {highlights[0] && (
        <p className="mt-3 inline-flex items-start gap-2 text-sm text-body">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
          {highlights[0]}
        </p>
      )}

      <div className="mt-auto flex items-center gap-5 pt-6">
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-cyan-400"
        >
          View details
          <ArrowUpRight size={16} />
        </Link>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-fg"
        >
          GitHub
        </a>
      </div>
    </div>
    </GlowCard>
  );
}
