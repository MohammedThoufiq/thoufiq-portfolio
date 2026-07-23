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
import ProfileImage from "@/components/resume/ProfileImage";
import Highlights from "@/components/home/Highlights";
import Certifications from "@/components/home/Certifications";
import { profile } from "@/data/resume";
import { MapPin, Mail, Phone } from "lucide-react";


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

    <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">

      {/* Left: intro */}
      <div>

        <HeroItem>
          <p className="text-accent text-sm tracking-[0.3em] uppercase">
            {profile.role}
          </p>
        </HeroItem>

        <HeroItem>
          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            {profile.name}
          </h1>
        </HeroItem>

        <HeroItem>
          <h2 className="mt-6 text-xl md:text-2xl text-body font-medium">
            {profile.title}
          </h2>
        </HeroItem>

        <HeroItem>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-accent" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 hover:text-fg"
            >
              <Mail size={14} className="text-accent" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="inline-flex items-center gap-1.5 hover:text-fg"
            >
              <Phone size={14} className="text-accent" />
              {profile.phone}
            </a>
          </div>
        </HeroItem>

        <HeroItem>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ResumeActions />

            <AnimatedButton>
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
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

            <AnimatedButton>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
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

            <AnimatedButton>
              <Link
                href="/contact"
                className="
                  inline-flex
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

      {/* Right: portrait */}
      <HeroItem>
        <div className="relative mx-auto w-full max-w-[300px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hairline">
            <ProfileImage variant="hero" priority className="h-full w-full" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/15 bg-black/30 px-3 py-2 backdrop-blur-md">
              <p className="text-sm font-semibold text-white">{profile.name}</p>
              <p className="text-xs text-cyan-300">{profile.role}</p>
            </div>
          </div>
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