import Link from "next/link";
import type { BlogSection } from "@/content/blogConfig";

interface BlogSectionCardProps {
  section: BlogSection;
  postCount: number;
}

export function BlogSectionCard({ section, postCount }: BlogSectionCardProps) {
  return (
    <Link
      href={`/blog/${section.id}`}
      className="group block rounded-xl border border-border bg-surface/40 p-6 transition-all hover:border-accent/40 hover:bg-surface/70"
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl" aria-hidden>
          {section.emoji}
        </div>
        <div className="flex-1">
          <h3 className="mb-2 text-h3 font-semibold text-headline transition-colors group-hover:text-accent">
            {section.title}
          </h3>
          <p className="mb-3 text-body text-muted">{section.description}</p>
          <p className="text-sm text-muted">
            {postCount} {postCount === 1 ? "post" : "posts"}
          </p>
        </div>
      </div>
    </Link>
  );
}
