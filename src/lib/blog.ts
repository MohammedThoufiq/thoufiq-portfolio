import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(
  process.cwd(),
  "src/content/blogs"
);

export function getBlogs() {
  const files = fs.readdirSync(blogsDirectory);

  return files.map((fileName) => {
    const filePath = path.join(
      blogsDirectory,
      fileName
    );

    const fileContent = fs.readFileSync(
      filePath,
      "utf-8"
    );

    const { data } = matter(fileContent);

    return data;
  });
}

export function getBlogBySlug(slug: string) {
  const fullPath = path.join(
    blogsDirectory,
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(
    fullPath,
    "utf8"
  );

  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
}