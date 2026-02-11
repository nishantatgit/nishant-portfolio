export type BlogSection = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
};

export const blogSections: BlogSection[] = [
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "ML systems, experiments, and production insights",
    emoji: "🤖",
    color: "blue",
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Architecture, scaling, and engineering trade-offs",
    emoji: "🏗️",
    color: "purple",
  },
  {
    id: "career",
    title: "Career",
    description: "Lessons from transitioning to ML engineering",
    emoji: "🚀",
    color: "green",
  },
  {
    id: "tools",
    title: "Tools & Setup",
    description: "Dev tools, workflows, and productivity tips",
    emoji: "🛠️",
    color: "orange",
  },
];

export type BlogPost = {
  slug: string;
  section: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
  published: boolean;
};

export type BlogPostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
};

export type BlogHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};
