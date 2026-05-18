import Link from "next/link";

import Container from "@/components/layout/Container";

import { getCaseStudies } from "@/lib/caseStudies";

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies();

  return (
    <main className="min-h-screen bg-black text-white">
      <Container>

        {/* HERO SECTION */}
        <section className="py-28">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Engineering Case Studies
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Production Engineering
            and System Resiliency
          </h1>

          <p className="mt-8 text-xl text-gray-400 max-w-4xl leading-9">
            Deep technical breakdowns of
            production incidents, scalability
            optimizations, and backend
            architecture improvements.
          </p>
        </section>

        {/* CASE STUDY CARDS */}
        <section className="pb-32 grid gap-8">

          {caseStudies.map((study: any) => (

            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
            >

              <div
                className="
                  border border-white/10
                  rounded-3xl
                  p-10
                  bg-white/[0.03]
                  hover:border-cyan-400/30
                  hover:bg-white/[0.05]
                  transition-all
                  duration-300
                "
              >

                {/* TAGS */}
                <div className="flex flex-wrap gap-3 mb-6">

                  {study.tags.map((tag: string) => (

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

                {/* TITLE */}
                <h2 className="text-4xl font-bold tracking-tight">
                  {study.title}
                </h2>

                {/* SUMMARY */}
                <p className="mt-6 text-lg text-gray-400 leading-8 max-w-4xl">
                  {study.summary}
                </p>

                {/* FOOTER */}
                <div className="mt-10 flex items-center justify-between flex-wrap gap-4">

                  <p className="text-cyan-400 text-lg font-medium">
                    {study.heroMetric}
                  </p>

                  <p className="text-gray-500">
                    Read Case Study →
                  </p>

                </div>

              </div>

            </Link>

          ))}

        </section>

      </Container>
    </main>
  );
}