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
//import Magnet from "@/components/animations/Magnet";
import BorderGlow from "@/components/animations/BorderGlow";
import ResumeActions from "@/components/resume/ResumeActions";
import Highlights from "@/components/home/Highlights";
import Certifications from "@/components/home/Certifications";


export default function Home() {
  return (
    <main className="min-h-screen bg-page text-fg pt-28">
      <Container>
        <section id="home"
  className="
    relative
    overflow-hidden
    py-16
    md:py-24
  "
>
  {/* Elegant, minimal ambient glow (no grid noise) */}
  <div className="pointer-events-none absolute -top-32 -left-24 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
  <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-400/5 blur-[120px]" />

  <HeroStagger>

    <div className="max-w-4xl">

      <HeroItem>
        <p
          className="
            text-accent
            text-sm
            tracking-[0.3em]
            uppercase
          "
        >
          Java Backend Engineer
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
            text-body
            font-medium
          "
        >
          Java Backend Engineer • Microservices • Distributed Systems • Cloud
        </h2>
      </HeroItem>

      <HeroItem>
        <p
          className="
            mt-8
            text-lg
            md:text-xl
            text-muted
            leading-8
            md:leading-9
            max-w-3xl
          "
        >
          Java Backend Engineer with 3.5+ years of experience
          building enterprise-scale microservices, event-driven
          platforms, and high-performance APIs — 25+ microservices,
          11 batch applications, and 80–100 APIs processing over
          150K requests/hour using Java 21, Spring Boot 3, Kafka,
          Azure, and AWS.
        </p>
      </HeroItem>

      <HeroItem>
  <div
    className="
      mt-10
      grid
      grid-cols-2
      gap-4
      sm:grid-cols-4
    "
  >
    <ResumeActions fullWidth />

    <AnimatedButton delay={0.05}>
      <Link
        href="https://github.com/MohammedThoufiq"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-full
          flex
          items-center
          justify-center
          px-6
          py-3
          rounded-xl
          border
          border-hairline
          transition-all
          duration-200
          hover:border-cyan-400
          hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
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
          w-full
          flex
          items-center
          justify-center
          px-6
          py-3
          rounded-xl
          border
          border-hairline
          transition-all
          duration-200
          hover:border-cyan-400
          hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
        "
      >
        LinkedIn
      </Link>
    </AnimatedButton>

    <AnimatedButton delay={0.15}>
      <Link
        href="/contact"
        className="
          w-full
          flex
          items-center
          justify-center
          px-6
          py-3
          rounded-xl
          border
          border-hairline
          transition-all
          duration-200
          hover:border-cyan-400
          hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
        "
      >
        Let&apos;s Connect
      </Link>
    </AnimatedButton>
  </div>
</HeroItem>

    </div>

  </HeroStagger>

</section>

        <AnimatedSection>
  <Highlights />
</AnimatedSection>

        <AnimatedSection delay={0.05}>
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
      text-accent
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
                client={experience.client}
                role={experience.role}
                duration={experience.duration}
                summary={experience.summary}
                metric={experience.metric}
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
      text-accent
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

        <AnimatedSection delay={0.15}>
          <Certifications />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <section id="case-studies">
        <Section title="Featured Engineering Case Study">
  <Link href="/case-studies/high-heap-memory-incident">
    <BorderGlow
  className="
    w-full
    overflow-hidden
    rounded-3xl
    p-4
    md:p-6
    text-accent
    transition-transform
    duration-300
    hover:-translate-y-1
  "
  edgeSensitivity={30}
  glowColor="34 211 238"
  backgroundColor="var(--c-surface-strong)"
  borderRadius={28}
  glowRadius={35}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={["#22d3ee", "#06b6d4", "#67e8f9"]}
>
      <p className="text-accent uppercase tracking-[0.3em] text-sm">
        Production Incident
      </p>

      <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
        Reducing Heap Usage
        from 90% to 25%
      </h2>

      <p className="mt-8 text-xl text-muted max-w-4xl leading-9">
        How bounded async execution,
        pagination, query optimization,
        and connection lifecycle fixes
        eliminated OOM failures during
        a 3,000 concurrent request spike.
      </p>

      <p className="mt-10 text-accent text-lg font-medium">
        Read Full Case Study →
      </p>
    </BorderGlow>
  </Link>
</Section>
</section>
</AnimatedSection>
      </Container>
    </main>
  );
}