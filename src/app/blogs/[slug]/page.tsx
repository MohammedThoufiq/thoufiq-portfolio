import Container from "@/components/layout/Container";
import { getBlogBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetails({
  params,
}: Props) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  return (
    <main className="min-h-screen bg-page text-fg">
      <Container>
        <article className="py-28 max-w-4xl">
          <p className="text-accent uppercase tracking-[0.3em] text-sm">
            Technical Blog
          </p>

          <h1 className="mt-6 text-6xl font-bold tracking-tight leading-tight">
            {blog.frontmatter.title}
          </h1>

          <p className="mt-6 text-faint">
            {blog.frontmatter.date}
          </p>
        </article>
      </Container>
    </main>
  );
}