import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { BlogContent } from "@/components/blog/BlogContent";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { mdxComponents } from "@/components/mdx-components";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllPosts, getPostBySlug, getSectionById } from "@/lib/blog";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    section: post.section,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}): Promise<Metadata> {
  const { section, slug } = await params;
  const post = getPostBySlug(section, slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: `${post.frontmatter.title} - Blog - Nishant Kumar`,
    description: post.frontmatter.description,
    path: `/blog/${section}/${slug}`,
    keywords: [...post.frontmatter.tags, "machine learning blog", "engineering blog"],
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section: sectionId, slug } = await params;
  const post = getPostBySlug(sectionId, slug);
  const section = getSectionById(sectionId);

  if (!post || !section) {
    notFound();
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      "@type": "Person",
      name: "Nishant Kumar",
    },
    publisher: {
      "@type": "Organization",
      name: "Nishant Kumar ML Portfolio",
    },
    url: `${SITE_URL}/blog/${section.id}/${slug}`,
    keywords: post.frontmatter.tags,
    articleSection: section.title,
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: section.title,
        item: `${SITE_URL}/blog/${section.id}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.frontmatter.title,
        item: `${SITE_URL}/blog/${section.id}/${slug}`,
      },
    ],
  };

  return (
    <div className="bg-background">
      <JsonLd data={articleStructuredData} />
      <JsonLd data={breadcrumbStructuredData} />
      <article className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_280px] lg:py-20">
        <div>
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
            <span>/</span>
            <Link href={`/blog/${section.id}`} className="hover:text-accent">
              {section.title}
            </Link>
          </nav>

          <header className="mb-10 border-b border-border pb-8">
            <h1 className="mb-4 text-hero font-extrabold text-headline">{post.frontmatter.title}</h1>
            <p className="mb-6 text-body-lg text-muted">{post.frontmatter.description}</p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
              <time>{formatDate(post.frontmatter.date)}</time>
              <span>•</span>
              <span>{post.frontmatter.readingTime}</span>
            </div>

            {post.frontmatter.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <BlogContent>
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  ],
                },
              }}
            />
          </BlogContent>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <TableOfContents headings={post.headings} />
        </div>
      </article>
    </div>
  );
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
