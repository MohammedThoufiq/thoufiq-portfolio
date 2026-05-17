import Container from "@/components/layout/Container";
import { getBlogs } from "@/lib/blog";
import Link from "next/link";

export default function BlogsPage() {
  const blogs = getBlogs();

  return (
    <main className="min-h-screen bg-black text-white">
      <Container>
        <section className="py-28">
          <h1 className="text-6xl font-bold">
            Technical Blogs
          </h1>

          <p className="mt-6 text-gray-400 text-xl">
            Production engineering, distributed systems,
            and backend architecture.
          </p>
        </section>

        <section className="pb-32">
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog: any) => (
              <div
                key={blog.slug}
                className="
                  border border-white/10
                  rounded-2xl
                  p-8
                  bg-white/[0.03]
                "
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <h2 className="text-3xl font-bold hover:text-cyan-400 transition-colors">
                    {blog.title}
                  </h2>
                </Link>

                <p className="mt-4 text-gray-400 leading-8">
                  {blog.summary}
                </p>

                <p className="mt-6 text-sm text-gray-500">
                  {blog.date}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}