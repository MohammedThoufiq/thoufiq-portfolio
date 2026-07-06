import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProjectCard from "@/components/projects/ProjectCard";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-page text-fg">
      <Container>
        <section className="py-28">
          <p className="text-accent uppercase tracking-[0.3em] text-sm">
            Portfolio
          </p>

          <h1 className="mt-6 text-6xl font-bold tracking-tight">
            Projects
          </h1>

          <p className="mt-8 text-xl text-muted leading-9 max-w-3xl">
            Scalable backend systems, distributed architectures,
            resiliency engineering, and production-focused
            implementations.
          </p>
        </section>

        <Section title="Featured Projects">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
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
        </Section>
      </Container>
    </main>
  );
}