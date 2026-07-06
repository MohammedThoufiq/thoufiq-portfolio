import { Award } from "lucide-react";

import Section from "@/components/layout/Section";
import GlowCard from "@/components/ui/GlowCard";
import { certifications, education } from "@/data/resume";

/**
 * Compact Certifications + Education strip for the home page — quick
 * credibility signal for recruiters and hiring managers.
 */
export default function Certifications() {
  return (
    <Section title="Certifications & Education">
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <GlowCard key={cert.name} className="p-6">
            <div className="flex items-start gap-4">
              <Award size={26} className="mt-0.5 shrink-0 text-accent" />
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
        ))}

        {education.map((edu) => (
          <GlowCard key={edu.degree} className="p-6">
            <p className="font-semibold text-fg">{edu.degree}</p>
            <p className="mt-1 text-muted">{edu.institution}</p>
            <p className="mt-1 text-sm text-faint">{edu.duration}</p>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}
