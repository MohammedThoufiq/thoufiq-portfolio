"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { animate, cubicBezier, motion, useInView, type Variants } from "framer-motion";
import { Award, GraduationCap, Mail, MapPin, MessageSquare, Phone } from "lucide-react";

import ProfileImage from "@/components/resume/ProfileImage";
import ResumeActions from "@/components/resume/ResumeActions";
import PrintButton from "@/components/resume/PrintButton";
import GlowCard from "@/components/ui/GlowCard";
import {
  certifications,
  education,
  highlights,
  profile,
  resumeExperience,
  skillGroups,
  summary,
} from "@/data/resume";

/* Brand icons (removed from lucide-react core in this version) */
function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5Z" />
    </svg>
  );
}
function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/* Animation helpers */
const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
};

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ delay }} className={className}>
      {children}
    </motion.div>
  );
}

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.1, ease: "easeOut", onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{value}</span>;
}

const SECTIONS = [
  { id: "summary", label: "Summary" },
  { id: "highlights", label: "Highlights" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function SectionNav() {
  const [active, setActive] = useState("summary");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-[101px] z-50 -mx-5 mb-6 border-y border-hairline bg-page/90 px-5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto py-3">
        <div className="flex items-center gap-2 pr-2">
          <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-hairline">
            <ProfileImage variant="circle" className="h-full w-full" />
          </div>
          <span className="hidden shrink-0 text-sm font-semibold text-fg sm:inline">
            {profile.name}
          </span>
        </div>
        <div className="mx-1 h-5 w-px shrink-0 bg-hairline" />
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors ${
              active === s.id ? "bg-cyan-500/10 text-accent" : "text-muted hover:text-fg"
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg md:text-3xl">{title}</h2>
    </div>
  );
}

const skillChip =
  "rounded-md border border-hairline bg-page px-2.5 py-1 text-xs text-body";

export default function ResumeView() {
  return (
    <div className="print:hidden">
      <main className="min-h-screen bg-page pt-24 text-body md:pt-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
          {/* HERO */}
          <section id="top" className="relative overflow-hidden py-10 md:py-14">
            <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[110px]" />

            <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
              <motion.div
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                animate="show"
              >
                <motion.p variants={fadeUp} className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                  {profile.role}
                </motion.p>
                <motion.h1 variants={fadeUp} className="mt-3 text-4xl font-bold leading-tight tracking-tight text-fg md:text-5xl">
                  {profile.name}
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-4 text-base text-body md:text-lg">
                  {profile.tagline}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-accent" />
                    {profile.location}
                  </span>
                  <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-fg">
                    <Mail size={14} className="text-accent" />
                    {profile.email}
                  </a>
                  <a href={`tel:${profile.phoneHref}`} className="inline-flex items-center gap-1.5 hover:text-fg">
                    <Phone size={14} className="text-accent" />
                    {profile.phone}
                  </a>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
                  <ResumeActions />
                  <PrintButton />
                </motion.div>
              </motion.div>

              {/* Portrait + subtle glass label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="relative mx-auto w-full max-w-[300px]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hairline">
                  <ProfileImage variant="hero" priority className="h-full w-full" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/15 bg-black/30 px-3 py-2 backdrop-blur-md">
                    <p className="text-sm font-semibold text-white">{profile.name}</p>
                    <p className="text-xs text-cyan-300">{profile.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <SectionNav />

          {/* SUMMARY */}
          <section id="summary" className="scroll-mt-32 py-12">
            <Reveal>
              <Heading eyebrow="Profile" title="Professional Summary" />
            </Reveal>
            <Reveal delay={0.05}>
              <GlowCard className="p-7 md:p-9">
                <p className="text-lg leading-8 text-body">{summary}</p>
              </GlowCard>
            </Reveal>
          </section>

          {/* HIGHLIGHTS */}
          <section id="highlights" className="scroll-mt-32 py-12">
            <Reveal>
              <Heading eyebrow="Impact" title="Key Highlights" />
            </Reveal>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {highlights.map((stat, i) => {
                const isNumeric = /^\d+$/.test(stat.value);
                return (
                  <Reveal key={stat.label} delay={i * 0.05}>
                    <GlowCard>
                      <div className="flex h-full flex-col items-center justify-center p-5 text-center">
                        <div className="text-3xl font-bold text-accent md:text-4xl">
                          {isNumeric ? <CountUp to={Number(stat.value)} /> : stat.value}
                          {stat.suffix}
                        </div>
                        <p className="mt-1 text-xs uppercase tracking-wider text-muted">{stat.label}</p>
                      </div>
                    </GlowCard>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="scroll-mt-32 py-12">
            <Reveal>
              <Heading eyebrow="Toolbox" title="Skills & Technologies" />
            </Reveal>
            <Reveal delay={0.05}>
              <GlowCard>
                <div className="divide-y divide-hairline">
                  {skillGroups.map((group) => (
                    <div
                      key={group.category}
                      className="grid gap-3 p-5 sm:grid-cols-[200px_1fr] sm:gap-6"
                    >
                      <p className="text-sm font-semibold text-fg">{group.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span key={skill} className={skillChip}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </Reveal>
          </section>

          {/* EXPERIENCE — clean single-rail timeline */}
          <section id="experience" className="scroll-mt-32 py-12">
            <Reveal>
              <Heading eyebrow="Journey" title="Experience" />
            </Reveal>
            <div className="relative ml-1 border-l border-hairline pl-6 md:ml-2 md:pl-8">
              <div className="space-y-8">
                {resumeExperience.map((exp) => (
                  <Reveal key={exp.id}>
                    <div className="relative">
                      <span className="absolute -left-[31px] top-1.5 z-10 h-3 w-3 rounded-full border-2 border-page bg-cyan-400 md:-left-[39px]" />
                      <GlowCard className="p-6">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="text-lg font-bold tracking-tight text-fg">{exp.role}</h3>
                          <span className="text-sm text-faint">{exp.duration}</span>
                        </div>
                        <p className="mt-1 text-accent">{exp.company}</p>
                        <p className="text-sm text-faint">
                          {exp.client} · {exp.location}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.techStack.map((t) => (
                            <span key={t} className={skillChip}>
                              {t}
                            </span>
                          ))}
                        </div>
                        <ul className="mt-5 space-y-2.5 text-body">
                          {exp.highlights.map((h) => (
                            <li key={h} className="flex gap-3 leading-7">
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </GlowCard>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS + EDUCATION */}
          <div className="grid gap-10 py-12 md:grid-cols-2">
            <section id="certifications" className="scroll-mt-32">
              <Reveal>
                <Heading eyebrow="Credentials" title="Certifications" />
              </Reveal>
              {certifications.map((cert, i) => (
                <Reveal key={cert.name} delay={i * 0.05}>
                  <GlowCard className="p-5">
                    <div className="flex items-start gap-4">
                      <Award size={24} className="mt-0.5 shrink-0 text-accent" />
                      <div>
                        <p className="font-medium text-fg">{cert.name}</p>
                        {cert.status && (
                          <span className="mt-2 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-xs text-cyan-300">
                            {cert.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </GlowCard>
                </Reveal>
              ))}
            </section>

            <section id="education" className="scroll-mt-32">
              <Reveal>
                <Heading eyebrow="Foundation" title="Education" />
              </Reveal>
              {education.map((edu, i) => (
                <Reveal key={edu.degree} delay={i * 0.05}>
                  <GlowCard className="p-5">
                    <div className="flex items-start gap-4">
                      <GraduationCap size={24} className="mt-0.5 shrink-0 text-accent" />
                      <div>
                        <p className="font-semibold text-fg">{edu.degree}</p>
                        <p className="mt-1 text-muted">{edu.institution}</p>
                        <p className="mt-1 text-sm text-faint">{edu.duration}</p>
                        {edu.detail && <p className="mt-1 text-sm text-accent">{edu.detail}</p>}
                      </div>
                    </div>
                  </GlowCard>
                </Reveal>
              ))}
            </section>
          </div>

          {/* CONTACT */}
          <section id="contact" className="scroll-mt-32 py-12 pb-28">
            <Reveal>
              <Heading eyebrow="Get in touch" title="Contact" />
            </Reveal>
            <Reveal delay={0.05}>
              <GlowCard className="p-8">
                <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
                  <div className="mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-2xl ring-1 ring-hairline md:h-32 md:w-32">
                    <ProfileImage variant="circle" className="h-full w-full" />
                  </div>
                  <div>
                    <p className="text-base text-body md:text-lg">
                      Open to backend engineering, distributed systems, and cloud-native
                      opportunities — remote, GCC, and international.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-black transition hover:bg-cyan-400"
                      >
                        <MessageSquare size={17} />
                        Contact Me
                      </Link>
                      <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl border border-hairline px-5 py-2.5 text-body transition hover:border-cyan-400 hover:text-fg">
                        <Mail size={17} className="text-accent" />
                        Email
                      </a>
                      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-hairline px-5 py-2.5 text-body transition hover:border-cyan-400 hover:text-fg">
                        <LinkedinIcon />
                        LinkedIn
                      </a>
                      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-hairline px-5 py-2.5 text-body transition hover:border-cyan-400 hover:text-fg">
                        <GithubIcon />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          </section>
        </div>
      </main>
    </div>
  );
}
