import ResumeActions from "@/components/resume/ResumeActions";
import GlowCard from "@/components/ui/GlowCard";
import { profile } from "@/data/resume";

export default function ContactSection() {
  return (
    <section className="py-24">
      <GlowCard className="p-10 md:p-16">
        <p
          className="
            text-accent
            uppercase
            tracking-[0.3em]
            text-sm
          "
        >
          Contact
        </p>

        <h2
          className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
          "
        >
          Let&apos;s Build Scalable Systems
        </h2>

        <p
          className="
            mt-6
            text-muted
            max-w-3xl
            leading-8
          "
        >
          I&apos;m interested in backend engineering,
          distributed systems, platform engineering,
          and cloud-native opportunities.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">

          <ResumeActions />

          <a
            href={`mailto:${profile.email}`}
            className="
              px-6
              py-3
              rounded-xl
              border
              border-hairline
              hover:border-cyan-400
              transition
            "
          >
            Email Me
          </a>

          <a
            href="https://github.com/MohammedThoufiq"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              rounded-xl
              border
              border-hairline
              hover:border-cyan-400
              transition
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-thoufiq-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              rounded-xl
              border
              border-hairline
              hover:border-cyan-400
              transition
            "
          >
            LinkedIn
          </a>

        </div>

        <div
          className="
            mt-10
            text-faint
            text-sm
          "
        >
          Based in India • Open to Remote, GCC,
          and International Backend Engineering Opportunities
        </div>
      </GlowCard>
    </section>
  );
}