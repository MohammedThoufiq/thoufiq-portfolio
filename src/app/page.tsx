import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Container>
        <section className="py-28">
          <h1 className="text-6xl font-bold tracking-tight">
            Mohammed Thoufiq
          </h1>

          <p className="mt-6 text-2xl text-gray-400">
            Java Backend Engineer
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-500">
            Building scalable backend systems using Java,
            Spring Boot, Kafka, Microservices, AWS,
            and Azure.
          </p>
        </section>
      </Container>
    </main>
  );
}