import fs from "fs";
import path from "path";
import matter from "gray-matter";

const caseStudiesDirectory = path.join(
  process.cwd(),
  "src/content/case-studies"
);

export function getCaseStudies() {
  const files = fs.readdirSync(caseStudiesDirectory);

  return files.map((fileName) => {
    const filePath = path.join(
      caseStudiesDirectory,
      fileName
    );

    const fileContents = fs.readFileSync(
      filePath,
      "utf-8"
    );

    const { data } = matter(fileContents);

    return data;
  });
}

export function getCaseStudyBySlug(slug: string) {
  const fullPath = path.join(
    caseStudiesDirectory,
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