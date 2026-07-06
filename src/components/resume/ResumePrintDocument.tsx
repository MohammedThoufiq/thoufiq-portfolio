import {
  certifications,
  education,
  profile,
  resumeExperience,
  skillGroups,
  summary,
} from "@/data/resume";

/**
 * ATS-friendly, print-only résumé document. Single column, black text on
 * white, real selectable text (no images) so applicant-tracking systems
 * parse it cleanly. Hidden on screen; revealed for print / "Save as PDF".
 * Mirrors the provided résumé exactly.
 */
export default function ResumePrintDocument() {
  return (
    <div className="hidden print:block print-resume mx-auto max-w-[800px] bg-white px-10 py-8 text-black">
      {/* Header */}
      <header className="border-b border-gray-300 pb-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-sm font-medium text-gray-700">{profile.title}</p>
        <p className="mt-2 text-xs text-gray-600">
          {profile.location} &nbsp;•&nbsp; {profile.phone} &nbsp;•&nbsp;{" "}
          {profile.email}
        </p>
        <p className="mt-1 text-xs text-gray-600">
          {profile.linkedinLabel} &nbsp;•&nbsp; {profile.githubLabel}
        </p>
      </header>

      {/* Summary */}
      <section className="mt-5">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
          Professional Summary
        </h2>
        <p className="mt-2 text-[12.5px] leading-relaxed text-gray-800">
          {summary}
        </p>
      </section>

      {/* Skills */}
      <section className="mt-5">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
          Technical Skills
        </h2>
        <ul className="mt-2 space-y-1 text-[12.5px] text-gray-800">
          {skillGroups.map((group) => (
            <li key={group.category}>
              <span className="font-semibold">{group.category}:</span>{" "}
              {group.skills.join(", ")}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mt-5">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
          Professional Experience
        </h2>
        {resumeExperience.map((exp) => (
          <div key={exp.id} className="mt-3">
            <div className="flex items-baseline justify-between">
              <h3 className="text-[13px] font-bold text-gray-900">{exp.role}</h3>
              <span className="text-[11.5px] italic text-gray-600">
                {exp.duration}
              </span>
            </div>
            <p className="text-[12px] text-gray-700">
              {exp.company} | {exp.client}
            </p>
            <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[12px] leading-snug text-gray-800">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="mt-5">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
          Certifications
        </h2>
        <ul className="mt-2 space-y-1 text-[12.5px] text-gray-800">
          {certifications.map((cert) => (
            <li key={cert.name}>
              {cert.name}
              {cert.status ? (
                <span className="italic"> — {cert.status}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mt-5">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
          Education
        </h2>
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="mt-2 flex items-baseline justify-between"
          >
            <div>
              <p className="text-[13px] font-bold text-gray-900">{edu.degree}</p>
              <p className="text-[12px] text-gray-700">{edu.institution}</p>
              {edu.detail && (
                <p className="text-[11.5px] text-gray-600">{edu.detail}</p>
              )}
            </div>
            <span className="text-[11.5px] italic text-gray-600">
              {edu.duration}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
