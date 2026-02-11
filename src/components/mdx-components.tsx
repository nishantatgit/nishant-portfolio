import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/blog/CodeBlock";

export const mdxComponents: MDXComponents = {
  pre: (props) => <CodeBlock {...props} />,
};
