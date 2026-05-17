type ExperienceCardProps = {
  company: string;
  role: string;
  duration: string;
  description: string;
  highlights: string[];
  techStack: string[];
};

export default function ExperienceCard({
  company,
  role,
  duration,
  description,
  highlights,
  techStack,
}: ExperienceCardProps) {
  return (
    <div
      className="
        relative
        border border-white/10
        rounded-2xl
        p-8
        bg-white/[0.03]
      "
    >
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-3xl font-bold">
            {role}
          </h3>

          <p className="mt-2 text-cyan-400">
            {company}
          </p>
        </div>

        <p className="text-gray-500">
          {duration}
        </p>
      </div>

      <p className="mt-8 text-lg leading-8 text-gray-400">
        {description}
      </p>

      <ul className="mt-8 space-y-4 text-gray-400">
        {highlights.map((highlight) => (
          <li key={highlight}>
            • {highlight}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3 mt-8">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="
              px-3 py-1
              rounded-full
              text-sm
              bg-cyan-500/10
              border border-cyan-500/20
              text-cyan-300
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}