import Container from "@/components/layout/Container";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Container>
        <section className="max-w-5xl mx-auto py-28">

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
              text-gray-400
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
            <div
              className="
                rounded-3xl
                border
                border-white/10
                p-8
                bg-white/[0.03]
              "
            >
              <h2 className="text-3xl font-bold">
                Contact Information
              </h2>

              <div className="mt-8 space-y-6">

                <div>
                  <p className="text-gray-500">
                    Email
                  </p>
                  <a
                    href="mailto:mohammed.thoufiq.005@gmail.com"
                    className="text-cyan-400"
                  >
                    mohammed.thoufiq.005@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-500">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/mohammed-thoufiq-s/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400"
                  >
                    View Profile
                  </a>
                </div>

                <div>
                  <p className="text-gray-500">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/MohammedThoufiq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400"
                  >
                    View GitHub
                  </a>
                </div>

                <div>
                  <p className="text-gray-500">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919677536883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div>
                  <p className="text-gray-500">
                    Resume
                  </p>
                  <a
                    href="/resume/MohammedThoufiq_SoftwareEngineer_Java.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400"
                  >
                    Download Resume
                  </a>
                </div>

              </div>
            </div>
            <div><ContactForm /></div>

          </div>

        </section>
      </Container>
    </main>
  );
}