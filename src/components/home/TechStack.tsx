import TechCard from "./TechCard";
import { techStack } from "@/data/techStack";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <p
            className="
              text-accent
              uppercase
              tracking-[0.4em]
              text-sm
            "
          >
            Core Engineering Stack
          </p>

          <h2 className="mt-6 text-5xl font-bold">
            Technologies I Build With
          </h2>

          <div className="w-24 h-[3px] bg-fg/30 mx-auto mt-6 rounded-full" />

          <p className="mt-8 text-xl text-muted max-w-3xl mx-auto">
            Production technologies used for building scalable backend
            systems, distributed architectures, cloud integrations,
            and event-driven platforms.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {techStack.map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              category={tech.category}
              //url={tech.url}
            />
          ))}
        </div>

      </div>
    </section>
  );
}