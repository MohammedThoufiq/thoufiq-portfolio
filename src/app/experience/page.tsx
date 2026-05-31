import Container from "@/components/layout/Container";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Container>

        {/* HERO */}
        <section className="py-28">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Experience
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
            Building Reliable Backend Systems
          </h1>

          <p className="mt-8 text-xl text-gray-400 max-w-4xl leading-9">
            Java Backend Engineer with experience designing,
            developing, supporting, and optimizing
            enterprise-scale backend platforms.
          </p>
        </section>

        {/* TIMELINE */}
        <section className="pb-32 space-y-12">

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                company={experience.company}
                role={experience.role}
                duration={experience.duration}
                description={experience.description}
                highlights={experience.highlights}
                techStack={experience.techStack}
              />
            ))}
          </div>

        </section>

      </Container>
    </main>
  );
}