import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllSections, getPostsBySection, getSectionById } from "@/lib/blog";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export async function generateStaticParams() {
  const sections = getAllSections();
  return sections.map((section) => ({
    section: section.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section: sectionId } = await params;
  const section = getSectionById(sectionId);

  if (!section) {
    return {};
  }

  return buildMetadata({
    title: `${section.title} - Blog - Nishant Kumar`,
    description: section.description,
    path: `/blog/${section.id}`,
    keywords: [section.title.toLowerCase(), "blog section", "machine learning blog"],
  });
}

export default async function SectionBlogPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section: sectionId } = await params;
  const section = getSectionById(sectionId);

  if (!section) {
    notFound();
  }

  const posts = getPostsBySection(sectionId);
  const sectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${section.title} Blog Posts`,
    url: `${SITE_URL}/blog/${section.id}`,
    description: section.description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.section}/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <div className="bg-background">
      <JsonLd data={sectionStructuredData} />
      <section className="border-b border-border bg-gradient-to-b from-surface/50 to-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <Link href="/blog" className="mb-6 inline-flex items-center text-body text-accent hover:underline">
            ← Back to Blog
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-5xl" aria-hidden>
              {section.emoji}
            </span>
            <h1 className="text-hero font-extrabold text-headline">{section.title}</h1>
          </div>

          <p className="max-w-2xl text-body-lg text-muted">{section.description}</p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          {posts.length === 0 ? (
            <p className="text-body text-muted">No posts yet in this section.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={`${post.section}-${post.slug}`} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
