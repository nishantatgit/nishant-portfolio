import type { BlogHeading } from "@/content/blogConfig";

interface TableOfContentsProps {
  headings: BlogHeading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <aside className="rounded-xl border border-border bg-surface/40 p-5">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={`${heading.id}-${heading.level}`}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm text-muted transition-colors hover:text-accent ${
                heading.level === 3 ? "pl-4" : "pl-0"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
