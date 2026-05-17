import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectDetails({ params }: Props) {
  const project = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Container>
          <div className="py-32">
            Project not found
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Container>
        <section className="py-28">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Case Study
          </p>

          <h1 className="mt-6 text-6xl font-bold tracking-tight">
            {project.title}
          </h1>

          <p className="mt-8 text-xl text-gray-400 leading-9">
            {project.fullDescription}
          </p>
        </section>

        <section className="pb-24">
          <h2 className="text-3xl font-bold mb-8">
            Architecture
          </h2>

          <p className="text-lg text-gray-400 leading-9">
            {project.architecture}
          </p>
        </section>

        <section className="pb-24">
          <h2 className="text-3xl font-bold mb-8">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="
                  px-4 py-2
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
        </section>

        <section className="pb-32">
          <h2 className="text-3xl font-bold mb-8">
            Engineering Highlights
          </h2>

          <ul className="space-y-4 text-lg text-gray-400">
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                • {highlight}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}