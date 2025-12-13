export default function ResumePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 bg-background text-foreground">
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
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 hover:shadow-accent/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Download Resume
        </a>
      </section>
    </main>
  );
}
