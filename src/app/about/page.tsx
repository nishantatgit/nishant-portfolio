import { profile } from "@/content/profile";
import { BulletListItem } from "@/components/BulletListItem";
import { Button } from "@/components/Button";

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
  <BulletListItem>Full-Stack background: system design, APIs, cloud, frontend & backend</BulletListItem>
  <BulletListItem>Why ML: Impact, automation, and solving real-world problems</BulletListItem>
  <BulletListItem>How: 4 end-to-end ML projects, metrics-driven, production mindset</BulletListItem>
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
          <Button href="/contact">Contact</Button>
          <Button href={profile.contact.linkedin} external>LinkedIn</Button>
          <Button href={profile.contact.github} external>GitHub</Button>
          <Button href="/resume">Resume</Button>
        </div>
      </section>
    </main>
  );
}
