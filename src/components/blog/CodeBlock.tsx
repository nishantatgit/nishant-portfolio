import type { HTMLAttributes, ReactNode } from "react";

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  children: ReactNode;
}

export function CodeBlock({ children, className = "", ...props }: CodeBlockProps) {
  return (
    <pre
      className={`overflow-x-auto rounded-xl border border-border bg-[#0f172a] p-4 text-sm text-slate-100 ${className}`}
      {...props}
    >
      {children}
    </pre>
  );
}
