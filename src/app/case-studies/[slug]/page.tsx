import Container from "@/components/layout/Container";

import ArchitectureDiagram from "@/components/architecture/ArchitectureDiagram";

import MetricsGrid from "@/components/case-studies/MetricsGrid";

import CaseStudySection from "@/components/case-studies/CaseStudySection";

import { caseStudies } from "@/data/caseStudies";

export default async function CaseStudyDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const study = caseStudies.find(
    (item) => item.slug === slug
  );

  if (!study) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Container>
          <div className="py-32">
            Case study not found
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Container>
        <article className="py-28 max-w-5xl mx-auto">

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mb-8">
            {study.tags.map((tag: string) => (
              <span
                key={tag}
                className="
                  px-4 py-2
                  rounded-full
                  text-sm
                  bg-cyan-500/10
                  border border-cyan-500/20
                  text-cyan-300
                  backdrop-blur-sm
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
              md:text-6xl
              lg:text-7xl
              font-bold
              tracking-tight
              leading-[1.05]
              text-white
            "
          >
            {study.title}
          </h1>

          <p
            className="
              mt-10
              text-lg
              md:text-xl
              text-gray-400
              leading-10
              max-w-4xl
            "
          >
            {study.summary}
          </p>

          {/* HERO DIVIDER */}
          <div
            className="
              mt-14
              h-px
              w-full
              bg-gradient-to-r
              from-cyan-400/60
              via-cyan-400/20
              to-transparent
            "
          />

          {/* METRICS */}
          <div className="mt-20">
            <MetricsGrid />
          </div>

          {/* EXECUTIVE SUMMARY */}
          <CaseStudySection
            eyebrow="Production Incident"
            title="Executive Summary"
            content={study.intro}
          />

          {/* HEAP GRAPH */}
          <ArchitectureDiagram
            title="Heap Usage During Traffic Spike"
            description="
              Heap monitoring showed sustained memory
              pressure and unstable recovery patterns
              during concurrent traffic spikes.
            "
            image="/architecture/heap-memory-graph.png"
          />

          {/* WHAT WENT WRONG */}
          <CaseStudySection
            eyebrow="System Failure"
            title="What Went Wrong"
            content={study.problem}
          />

          {/* BEFORE ARCHITECTURE */}
          <ArchitectureDiagram
            title="Architecture Before Optimization"
            description="
              The original architecture lacked bounded
              resource control and allowed traffic spikes
              to directly impact heap stability.
            "
            image="/architecture/before-fix-architecture.png"
          />

          {/* ROOT CAUSE */}
          <CaseStudySection
            eyebrow="Investigation"
            title="Root Cause Analysis"
            content={study.rootCause}
          />

          {/* ROOT CAUSE DIAGRAM */}
          <ArchitectureDiagram
            title="Root Cause Breakdown"
            description="
              Multiple architectural weaknesses amplified
              one another under concurrency and caused
              cascading instability.
            "
            image="/architecture/root-cause-analysis.png"
          />

          {/* ENGINEERING FIXES */}
          <CaseStudySection
            eyebrow="Optimization Strategy"
            title="Engineering Improvements"
            content={study.fixes}
          />

          {/* AFTER ARCHITECTURE */}
          <ArchitectureDiagram
            title="Architecture After Optimization"
            description="
              The optimized architecture introduced
              bounded execution, indexed queries,
              pagination, and controlled memory behavior.
            "
            image="/architecture/after-fix-architecture.png"
          />

          {/* RESULTS */}
          <CaseStudySection
            eyebrow="Performance Impact"
            title="Results"
            content={study.results}
          />

          {/* CONCLUSION */}
          <CaseStudySection
            eyebrow="Key Engineering Takeaway"
            title="Conclusion"
            content={study.conclusion}
          />

        </article>
      </Container>
    </main>
  );
}