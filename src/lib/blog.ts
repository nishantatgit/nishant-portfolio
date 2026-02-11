import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { blogSections } from "@/content/blogConfig";
import type { BlogHeading, BlogPost, BlogPostFrontmatter } from "@/content/blogConfig";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

type RawFrontmatter = {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  featured?: boolean;
  published?: boolean;
};

export function getAllSections() {
  return blogSections;
}

export function getSectionById(sectionId: string) {
  return blogSections.find((section) => section.id === sectionId);
}

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const section of blogSections) {
    const sectionDir = path.join(BLOG_DIR, section.id);
    if (!fs.existsSync(sectionDir)) continue;

    const files = fs.readdirSync(sectionDir);

    for (const filename of files) {
      if (!filename.endsWith(".mdx")) continue;

      const filePath = path.join(sectionDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const frontmatter = data as RawFrontmatter;

      if (!frontmatter.title || !frontmatter.description || !frontmatter.date) {
        continue;
      }

      posts.push({
        slug: filename.replace(/\.mdx$/, ""),
        section: section.id,
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date,
        readingTime: readingTime(content).text,
        tags: frontmatter.tags ?? [],
        featured: frontmatter.featured ?? false,
        published: frontmatter.published !== false,
      });
    }
  }

  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsBySection(sectionId: string): BlogPost[] {
  return getAllPosts().filter((post) => post.section === sectionId);
}

export function getPostBySlug(section: string, slug: string): {
  frontmatter: BlogPostFrontmatter;
  content: string;
  headings: BlogHeading[];
} | null {
  const filePath = path.join(BLOG_DIR, section, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const frontmatter = data as RawFrontmatter;

  if (!frontmatter.title || !frontmatter.description || !frontmatter.date) {
    return null;
  }

  return {
    frontmatter: {
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      tags: frontmatter.tags ?? [],
      readingTime: readingTime(content).text,
    },
    content,
    headings: extractHeadings(content),
  };
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}

function extractHeadings(content: string): BlogHeading[] {
  const lines = content.split("\n");
  const headings: BlogHeading[] = [];
  let inCodeBlock = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) continue;

    if (trimmed.startsWith("## ")) {
      const text = trimmed.replace(/^##\s+/, "").trim();
      headings.push({ id: slugifyHeading(text), text, level: 2 });
    }

    if (trimmed.startsWith("### ")) {
      const text = trimmed.replace(/^###\s+/, "").trim();
      headings.push({ id: slugifyHeading(text), text, level: 3 });
    }
  }

  return headings;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
