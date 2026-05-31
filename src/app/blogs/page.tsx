import Container from "@/components/layout/Container";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Container>
        <section className="py-32">
          <h1 className="text-5xl font-bold">
            Technical Blogs
          </h1>

          <p className="mt-8 text-gray-400 text-xl">
            Long-form technical content is currently being prepared.
          </p>
        </section>
      </Container>
    </main>
  );
}