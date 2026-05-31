import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";

import { projectDetails } from "@/data/projectDetails";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectDetails.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Container>
        <article className="max-w-5xl mx-auto py-28">

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-3 py-1
                  rounded-full
                  text-sm
                  bg-cyan-500/10
                  border border-cyan-500/20
                  text-cyan-300
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* HERO */}
          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              tracking-tight
            "
          >
            {project.title}
          </h1>

          <p
            className="
              mt-8
              text-xl
              text-gray-400
              leading-9
              max-w-4xl
            "
          >
            {project.subtitle}
          </p>
          <div
  className="
    mt-20
    grid
    grid-cols-2
    md:grid-cols-4
    gap-6
  "
>
  {project.metrics?.map((metric) => (
    <div
      key={metric.label}
      className="
        p-6
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
      "
    >
      <p className="text-gray-500 text-sm">
        {metric.label}
      </p>

      <p
        className="
          mt-4
          text-3xl
          font-bold
          text-cyan-400
        "
      >
        {metric.after}
      </p>
    </div>
  ))}
</div>

          {/* OVERVIEW */}
          <section className="mt-24">
            <p
              className="
                text-cyan-400
                uppercase
                tracking-[0.3em]
                text-sm
              "
            >
              Project Overview
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              System Overview
            </h2>

            <div
              className="
                mt-8
                text-lg
                text-gray-300
                leading-9
              "
            >
              {project.overview}
            </div>
          </section>

          {/* ARCHITECTURE */}
          <section className="mt-24">
            <p
              className="
                text-cyan-400
                uppercase
                tracking-[0.3em]
                text-sm
              "
            >
              Architecture
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Event Flow
            </h2>

            <pre className="font-mono text-xs md:text-sm leading-relaxed whitespace-pre">
              {project.architecture}
            </pre>
          </section>

          {/* CHALLENGES */}
          <section className="mt-24">
            <p
              className="
                text-cyan-400
                uppercase
                tracking-[0.3em]
                text-sm
              "
            >
              Engineering Challenges
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Key Challenges
            </h2>

            <div
              className="
                mt-8
                text-lg
                text-gray-300
                leading-9
                whitespace-pre-line
              "
            >
              {project.challenges}
            </div>
          </section>

          {/* RESULTS */}
          <section className="mt-24">
            <p
              className="
                text-cyan-400
                uppercase
                tracking-[0.3em]
                text-sm
              "
            >
              Results
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Outcome
            </h2>

            <div
              className="
                mt-8
                text-lg
                text-gray-300
                leading-9
                whitespace-pre-line
              "
            >
              {project.results}
            </div>
          </section>

        </article>
      </Container>
    </main>
  );
}