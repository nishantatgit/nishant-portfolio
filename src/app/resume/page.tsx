import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Resume - Nishant Kumar",
  description:
    "View and download Nishant Kumar's resume, highlighting full-stack engineering experience and applied ML project work.",
  path: "/resume",
  keywords: ["ml engineer resume", "nishant kumar resume", "machine learning resume"],
});

export default function ResumePage() {
  const resumeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Resume",
    url: `${SITE_URL}/resume`,
    description: "Resume preview and download page for Nishant Kumar.",
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 bg-background text-foreground">
      <JsonLd data={resumeStructuredData} />
      <h1 className="text-3xl font-bold mb-8 text-headline font-sans">Resume</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-foreground">Preview</h2>
        <div className="border rounded bg-muted p-4 flex justify-center">
          <iframe
            src="/resume.pdf"
            title="Resume PDF"
            width="100%"
            height="600"
            className="w-full h-[600px] rounded"
          />
        </div>
      </section>
      <section>
        <Button href="/resume.pdf" download className="inline-block px-6 py-3">
          Download Resume
        </Button>
      </section>
    </main>
  );
}
