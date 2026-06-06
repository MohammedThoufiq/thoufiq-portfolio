import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Section from "@/components/layout/Section";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { experiences } from "@/data/experience";
import TechStack from "@/components/home/TechStack";
import Link from "next/link";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedButton from "@/components/animations/AnimatedButton";
import { HeroStagger, HeroItem,} from "@/components/animations/HeroStagger";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Container>
        <section id="home"
  className="
    relative
    overflow-hidden
    py-16
    md:py-24
  "
>
  <div
  className="
    absolute
    inset-0
    -z-10
    opacity-[0.03]
    pointer-events-none
    bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
    bg-[size:48px_48px]
  "
/>

  {/* Background Grid */}

  <div
    className="
      absolute
      inset-0
      -z-10
      opacity-[0.03]
      pointer-events-none

      bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

      bg-[size:48px_48px]
    "
  />

  <HeroStagger>

    <div className="max-w-4xl">

      <HeroItem>
        <p
          className="
            text-cyan-400
            text-sm
            tracking-[0.3em]
            uppercase
          "
        >
          Backend Engineer
        </p>
      </HeroItem>

      <HeroItem>
        <h1
          className="
            mt-4
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            tracking-tight
            leading-tight
          "
        >
          Mohammed Thoufiq
        </h1>
      </HeroItem>

      <HeroItem>
        <h2
          className="
            mt-6
            text-xl
            md:text-2xl
            text-gray-300
            font-medium
          "
        >
          Backend Engineer • Distributed Systems • Cloud
        </h2>
      </HeroItem>

      <HeroItem>
        <p
          className="
            mt-8
            text-lg
            md:text-xl
            text-gray-400
            leading-8
            md:leading-9
            max-w-3xl
          "
        >
          Building enterprise-scale APIs,
          event-driven platforms,
          and high-performance backend
          systems using Java, Spring Boot,
          Kafka, AWS, Azure, and modern
          distributed architecture patterns.
        </p>
      </HeroItem>

      <HeroItem>

        <div
          className="
            mt-10
            flex
            flex-wrap
            gap-4
          "
        >
          <AnimatedButton>
          <Link
            href="/resume/MohammedThoufiq_SoftwareEngineer_Java.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              rounded-xl
              bg-cyan-500
              text-black
              font-semibold

              transition-all
              duration-200

              hover:scale-[1.03]
              hover:bg-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]

              active:scale-[0.97]
            "
          >
            Download Resume
          </Link>
          </AnimatedButton>

          <AnimatedButton delay={0.05}>
          <Link
            href="https://github.com/MohammedThoufiq"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              rounded-xl
              border
              border-white/10

              transition-all
              duration-200

              hover:scale-[1.03]
              hover:border-cyan-400
              hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]

              active:scale-[0.97]
            "
          >
            GitHub
          </Link>
          </AnimatedButton>

          <AnimatedButton delay={0.1}>
          <Link
            href="https://www.linkedin.com/in/mohammed-thoufiq-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              rounded-xl
              border
              border-white/10

              transition-all
              duration-200

              hover:scale-[1.03]
              hover:border-cyan-400
              hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]

              active:scale-[0.97]
            "
          >
            LinkedIn
          </Link>
          </AnimatedButton>

        </div>

      </HeroItem>

    </div>

  </HeroStagger>

</section>

        <AnimatedSection>
  <TechStack />
</AnimatedSection>
<AnimatedSection delay={0.1}>
  <section id="projects">
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
  <Link
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
  </Link>
</div>
        </Section>
        </section>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <section id="experience">
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
  <Link
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
  </Link>
</div>
        </Section>
        </section>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <section id="case-studies">
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
</section>
</AnimatedSection>
      </Container>
    </main>
  );
}