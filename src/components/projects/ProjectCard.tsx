import Link from "next/link";
import BorderGlow from "../animations/BorderGlow";

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
  githubUrl
}: ProjectCardProps) {
  return (
    <BorderGlow
  className="
    w-full
    overflow-hidden
    rounded-3xl
    p-4
    md:p-6
    text-cyan-400
    transition-transform
    duration-300
    hover:-translate-y-1
  "
  edgeSensitivity={30}
  glowColor="34 211 238"
  backgroundColor="#0A0F14"
  borderRadius={28}
  glowRadius={35}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={["#22d3ee", "#06b6d4", "#67e8f9"]}
>
      <Link href={`/projects/${slug}`}>
  <h3 className="text-lg md:text-xl font-bold tracking-tight hover:text-cyan-400 transition-colors">
    {title}
  </h3>
</Link>

<div className="flex flex-wrap gap-3 mt-6">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="
  px-3 py-1
  text-sm
  rounded-full
  bg-cyan-500/10
  border border-cyan-500/20
  text-cyan-300
"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-5 text-gray-400 leading-8 text-lg">
        {description}
      </p>

      <ul className="mt-6 space-y-3 text-gray-400">
        {highlights.map((highlight) => (
          <li key={highlight}>
            • {highlight}
          </li>
        ))}
      </ul>
      <a
  href={githubUrl}
  target="_blank"
  className="
    inline-flex
    items-center
    mt-8
    text-cyan-400
    hover:text-cyan-300
    transition-colors
  "
>
  View Project →
</a>
    </BorderGlow>
  );
}