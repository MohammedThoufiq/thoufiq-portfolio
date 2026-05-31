import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Section from "@/components/layout/Section";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { experiences } from "@/data/experience";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Container>
        <section className="py-32">
          <div className="max-w-4xl">
            <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase">
              Backend Engineer
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Mohammed Thoufiq
            </h1>

            <div className="mt-10 flex flex-wrap gap-4">
  <a
    href="/resume/MohammedThoufiq_SoftwareEngineer_Java.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-6 py-3
      rounded-xl
      bg-cyan-500
      text-black
      font-semibold
      hover:bg-cyan-400
      transition
    "
  >
    Download Resume
  </a>

  <a
    href="https://github.com/MohammedThoufiq"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-6 py-3
      rounded-xl
      border
      border-white/10
      hover:border-cyan-400
      transition
    "
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/mohammed-thoufiq-s/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-6 py-3
      rounded-xl
      border
      border-white/10
      hover:border-cyan-400
      transition
    "
  >
    LinkedIn
  </a>
</div>

            <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-9 md:leading-10">
              Building scalable distributed backend systems using Java, Spring Boot, Kafka, Microservices, AWS, and Azure.
            </p>
          </div>
        </section>

        <Section title="Featured Projects">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard
                key={project.id}
                slug={project.slug}
                title={project.title}
                description={project.shortDescription}
                techStack={project.techStack}
                highlights={project.highlights}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
  <a
    href="/projects"
    className="
      inline-flex
      items-center
      gap-2
      px-6
      py-3
      rounded-xl
      border
      border-cyan-500/20
      text-cyan-400
      hover:border-cyan-400
      hover:text-cyan-300
      transition-all
    "
  >
    View All Projects →
  </a>
</div>
        </Section>

        <Section title="Experience">
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.slice(0, 2).map((experience) => (
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
          <div className="mt-10 text-center">
  <a
    href="/experience"
    className="
      inline-flex
      items-center
      gap-2
      px-6
      py-3
      rounded-xl
      border
      border-cyan-500/20
      text-cyan-400
      hover:border-cyan-400
      hover:text-cyan-300
      transition-all
    "
  >
    View Full Experience →
  </a>
</div>
        </Section>
        <Section title="Featured Engineering Case Study">
  <Link href="/case-studies/high-heap-memory-incident">
    <div
      className="
        border border-white/10
        rounded-3xl
        p-10
        bg-gradient-to-br
        from-cyan-500/10
        to-transparent
        hover:border-cyan-400/30
        transition-all
      "
    >
      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
        Production Incident
      </p>

      <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
        Reducing Heap Usage
        from 90% to 25%
      </h2>

      <p className="mt-8 text-xl text-gray-400 max-w-4xl leading-9">
        How bounded async execution,
        pagination, query optimization,
        and connection lifecycle fixes
        eliminated OOM failures during
        a 3,000 concurrent request spike.
      </p>

      <p className="mt-10 text-cyan-400 text-lg font-medium">
        Read Full Case Study →
      </p>
    </div>
  </Link>
</Section>
      </Container>
    </main>
  );
}