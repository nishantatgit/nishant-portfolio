import { profile } from "@/content/profile";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-8 text-headline font-sans">About</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-foreground">Professional Narrative</h2>
        <p className="text-muted mb-4">
          I started my career as a Full-Stack Engineer, building robust web applications and scalable systems. My passion for impact and curiosity about data-driven solutions led me to transition into Machine Learning, where I now focus on applied ML and productionizing models end-to-end.
        </p>
        <ul className="ml-6 text-muted">
  <li className="flex items-center gap-3 mb-2">
    <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
  <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
    <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
      <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
      <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
    </svg>
  </span>
</span>
    <span className="align-middle">Full-Stack background: system design, APIs, cloud, frontend & backend</span>
  </li>
  <li className="flex items-center gap-3 mb-2">
    <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
  <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
    <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
      <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
      <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
    </svg>
  </span>
</span>
    <span className="align-middle">Why ML: Impact, automation, and solving real-world problems</span>
  </li>
  <li className="flex items-center gap-3 mb-2">
    <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
  <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
    <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
      <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
      <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
    </svg>
  </span>
</span>
    <span className="align-middle">How: 4 end-to-end ML projects, metrics-driven, production mindset</span>
  </li>
</ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-foreground">Transition Timeline</h2>
        <ol className="border-l-2 border-accent pl-6">
          <li className="mb-4">
            <span className="font-semibold text-foreground">Full-Stack Engineer</span>
            <div className="text-muted text-sm">2017–2023: Built web apps, APIs, cloud systems</div>
          </li>
          <li className="mb-4">
            <span className="font-semibold text-foreground">ML Exploration</span>
            <div className="text-muted text-sm">2022–2023: Self-study, ML courses, first models</div>
          </li>
          <li>
            <span className="font-semibold text-foreground">Applied ML Engineer</span>
            <div className="text-muted text-sm">2023–present: End-to-end ML projects, production ML</div>
          </li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2 text-foreground">Links</h2>
        <div className="flex gap-4 flex-wrap">
          <a
            href="/contact"
            className="px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 hover:shadow-accent/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Contact
          </a>
          <a
            href={profile.contact.linkedin}
            className="px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 hover:shadow-accent/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={profile.contact.github}
            className="px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 hover:shadow-accent/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="/resume"
            className="px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 hover:shadow-accent/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Resume
          </a>
        </div>
      </section>
    </main>
  );
}
