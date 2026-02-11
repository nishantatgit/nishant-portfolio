import Link from "next/link";
import type { BlogPost } from "@/content/blogConfig";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface/40 p-6 transition-all hover:border-accent/40 hover:bg-surface/70">
      <Link href={`/blog/${post.section}/${post.slug}`} className="group block">
        <div className="mb-3 flex items-start justify-between gap-4">
          <time className="text-sm text-muted">{formatDate(post.date)}</time>
          <span className="whitespace-nowrap text-sm text-muted">{post.readingTime}</span>
        </div>

        <h3 className="mb-2 text-h3 font-semibold text-headline transition-colors group-hover:text-accent">
          {post.title}
        </h3>

        <p className="mb-4 text-body text-muted">{post.description}</p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
