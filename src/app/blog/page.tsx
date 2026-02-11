import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSectionCard } from "@/components/blog/BlogSectionCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllSections, getFeaturedPosts, getPostsBySection } from "@/lib/blog";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog - Nishant Kumar",
  description: "Insights on machine learning, system design, tools, and career growth.",
  path: "/blog",
  keywords: ["ml engineering blog", "machine learning notes", "system design blog", "ml career insights"],
});

export default function BlogPage() {
  const sections = getAllSections();
  const featuredPosts = getFeaturedPosts(3);
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog",
    url: `${SITE_URL}/blog`,
    description: "Insights on machine learning, system design, tools, and career growth.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: featuredPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.section}/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <div className="bg-background">
      <JsonLd data={blogStructuredData} />
      <section className="border-b border-border bg-gradient-to-b from-surface/50 to-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <h1 className="mb-4 text-hero font-extrabold text-headline">Blog</h1>
          <p className="max-w-2xl text-body-lg text-muted">
            Lessons from building ML systems, engineering trade-offs, and transitioning into ML engineering.
          </p>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <h2 className="mb-8 text-display font-bold text-headline">Featured Posts</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {featuredPosts.map((post) => (
                <BlogCard key={`${post.section}-${post.slug}`} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <h2 className="mb-8 text-display font-bold text-headline">Browse by Topic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <BlogSectionCard
                key={section.id}
                section={section}
                postCount={getPostsBySection(section.id).length}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
