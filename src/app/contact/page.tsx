import Link from "next/link";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/contact/ContactForm";
import GlowCard from "@/components/ui/GlowCard";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-page text-fg">
      <Container>
        <section className="max-w-5xl mx-auto py-28">

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

          <h1
            className="
              mt-4
              text-5xl
              md:text-7xl
              font-bold
            "
          >
            Let&apos;s Connect
          </h1>

          <p
            className="
              mt-8
              text-xl
              text-muted
              max-w-3xl
              leading-9
            "
          >
            Interested in backend engineering,
            distributed systems, cloud-native
            platforms, or collaboration opportunities?
            Feel free to reach out.
          </p>

          <div
            className="
              mt-16
              grid
              md:grid-cols-2
              gap-10
            "
          >

            {/* CONTACT DETAILS */}
            <GlowCard className="p-8">
              <h2 className="text-3xl font-bold text-fg">
                Contact Information
              </h2>

              <div className="mt-8 space-y-6">

                <div>
                  <p className="text-faint">
                    Email
                  </p>
                  <a
                    href="mailto:mohammed.thoufiq.005@gmail.com"
                    className="text-accent"
                  >
                    mohammed.thoufiq.005@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-faint">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/mohammed-thoufiq-s/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent"
                  >
                    View Profile
                  </a>
                </div>

                <div>
                  <p className="text-faint">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/MohammedThoufiq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent"
                  >
                    View GitHub
                  </a>
                </div>

                <div>
                  <p className="text-faint">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919677536883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div>
                  <p className="text-faint">
                    Resume
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/resume"
                      className="text-accent hover:text-cyan-300 transition-colors"
                    >
                      View Resume
                    </Link>
                    <a
                      href="/resume/MohammedThoufiq_SoftwareEngineer_Java.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-cyan-300 transition-colors"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>

              </div>
            </GlowCard>
            <div><ContactForm /></div>

          </div>

        </section>
      </Container>
    </main>
  );
}