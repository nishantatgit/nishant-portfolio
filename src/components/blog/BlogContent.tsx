import type { ReactNode } from "react";

interface BlogContentProps {
  children: ReactNode;
}

export function BlogContent({ children }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-headline prose-p:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-hover prose-strong:text-headline prose-code:text-accent prose-pre:bg-transparent prose-li:text-foreground">
      {children}
    </div>
  );
}
