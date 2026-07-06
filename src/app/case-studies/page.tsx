import Link from "next/link";

import Container from "@/components/layout/Container";
import GlowCard from "@/components/ui/GlowCard";

import { caseStudies } from "@/data/caseStudies";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-page text-fg">
      <Container>

        {/* HERO */}
        <section className="py-28">
          <p
            className="
              text-accent
              uppercase
              tracking-[0.3em]
              text-sm
            "
          >
            Engineering Case Studies
          </p>

          <h1
            className="
              mt-6
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-bold
              tracking-tight
              leading-tight
            "
          >
            Production Engineering,
            Scalability,
            and System Resiliency
          </h1>

          <p
            className="
              mt-8
              text-lg
              md:text-xl
              text-muted
              max-w-4xl
              leading-9
            "
          >
            Deep technical breakdowns of production incidents,
            performance optimizations, distributed systems,
            and backend architecture decisions.
          </p>
        </section>

        {/* CASE STUDIES */}
        <section className="pb-32 grid gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
            >
              <GlowCard className="p-6 md:p-10">

                {/* TAGS */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {study.tags.map((tag) => (
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
                <h2
                  className="
                    text-3xl
                    md:text-5xl
                    font-bold
                    tracking-tight
                    leading-tight
                  "
                >
                  {study.title}
                </h2>

                {/* SUMMARY */}
                <p
                  className="
                    mt-6
                    text-lg
                    text-muted
                    leading-8
                    max-w-4xl
                  "
                >
                  {study.summary}
                </p>

                {/* CTA */}
                <div
                  className="
                    mt-10
                    flex
                    items-center
                    justify-between
                    flex-wrap
                    gap-4
                  "
                >
                  <p
                    className="
                      text-accent
                      text-lg
                      font-medium
                    "
                  >
                    Read Full Case Study →
                  </p>
                </div>

              </GlowCard>
            </Link>
          ))}
        </section>

      </Container>
    </main>
  );
}