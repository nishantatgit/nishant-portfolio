import { profile } from "@/content/profile";

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 bg-background text-white">
      <h1 className="text-3xl font-bold mb-8 text-white font-sans">Contact</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-white">Get in Touch</h2>
        <p className="text-white mb-4">
          Feel free to reach out for opportunities, collaborations, or questions about my work.
        </p>
        <form
          action={`mailto:${profile.contact.email}`}
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-4 mb-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-2 rounded border bg-muted text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded border bg-muted text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="px-4 py-2 rounded border bg-muted text-white"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 rounded bg-accent text-white font-medium shadow transition-all hover:brightness-95"
          >
            Send Email
          </button>
        </form>
        <div className="flex gap-4">
          <a
            href={`mailto:${profile.contact.email}`}
            className="underline text-accent text-white"
          >
            {profile.contact.email}
          </a>
          <a
            href={profile.contact.linkedin}
            className="underline text-accent text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={profile.contact.github}
            className="underline text-accent text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
