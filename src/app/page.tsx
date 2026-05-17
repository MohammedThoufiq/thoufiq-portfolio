import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Section from "@/components/layout/Section";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { experiences } from "@/data/experience";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Container>
        <section className="py-32">
          <div className="max-w-4xl">
            <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase">
              Backend Engineer
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Mohammed Thoufiq
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-9 md:leading-10">
              Building scalable distributed backend systems
              using Java, Spring Boot, Kafka, Microservices,
              AWS, and Azure.
            </p>
          </div>
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

        <Section title="Experience">
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
        </Section>
        <Footer />
      </Container>
    </main>
  );
}