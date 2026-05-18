import Container from "@/components/layout/Container";
import { getBlogBySlug } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import CaseStudySection from "@/components/case-studies/CaseStudySection";

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
    <main className="min-h-screen bg-black text-white">
      <Container>
        <article className="py-28 max-w-4xl">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Technical Blog
          </p>

          <h1 className="mt-6 text-6xl font-bold tracking-tight leading-tight">
            {blog.frontmatter.title}
          </h1>

          <p className="mt-6 text-gray-500">
            {blog.frontmatter.date}
          </p>
        </article>
      </Container>
    </main>
  );
}