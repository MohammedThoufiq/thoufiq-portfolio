type CaseStudySectionProps = {
  eyebrow?: string;
  title: string;
  content: string;
};

export default function CaseStudySection({
  eyebrow,
  title,
  content,
}: CaseStudySectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-4xl">
        
        {/* EYEBROW */}
        {eyebrow && (
          <p
            className="
              text-accent
              uppercase
              tracking-[0.3em]
              text-sm
              font-medium
            "
          >
            {eyebrow}
          </p>
        )}

        {/* TITLE */}
        <h2
          className="
            mt-5
            text-4xl
            md:text-6xl
            font-bold
            tracking-tight
            leading-tight
            text-fg
          "
        >
          {title}
        </h2>

        {/* GRADIENT LINE */}
        <div
          className="
            mt-8
            h-px
            w-full
            bg-gradient-to-r
            from-cyan-400/60
            to-transparent
          "
        />

        {/* CONTENT */}
        <div
          className="
            mt-10
            text-xl
            leading-10
            text-body
            space-y-6
          "
        >
          {content
            .split("\n")
            .filter(Boolean)
            .map((paragraph, index) => (
              <p
                key={index}
                className="
                  leading-9
                  tracking-[0.01em]
                "
              >
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
}