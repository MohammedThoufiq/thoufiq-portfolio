export default function ContactSection() {
  return (
    <section className="py-24">
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-10
          md:p-16
        "
      >
        <p
          className="
            text-cyan-400
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
            text-gray-400
            max-w-3xl
            leading-8
          "
        >
          I&apos;m interested in backend engineering,
          distributed systems, platform engineering,
          and cloud-native opportunities.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="/resume/MohammedThoufiq_SoftwareEngineer_Java.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              rounded-xl
              bg-cyan-500
              text-black
              font-semibold
              hover:bg-cyan-400
              transition
            "
          >
            Download Resume
          </a>

          <a
            href="mailto:your-email@gmail.com"
            className="
              px-6
              py-3
              rounded-xl
              border
              border-white/10
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
              border-white/10
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
              border-white/10
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
            text-gray-500
            text-sm
          "
        >
          Based in India • Open to Remote, GCC,
          and International Backend Engineering Opportunities
        </div>
      </div>
    </section>
  );
}