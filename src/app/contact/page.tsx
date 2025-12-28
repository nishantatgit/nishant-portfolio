import { profile } from "@/content/profile";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-surface/50 to-background">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
          <h1 className="text-hero font-extrabold mb-6 text-headline">Get in Touch</h1>
          <p className="text-body-lg text-muted max-w-2xl">
            I'm always open to discussing new opportunities, collaborations, or just chatting about machine learning.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-h2 font-bold mb-6 text-headline">Send a Message</h2>
              <form
                action={`mailto:${profile.contact.email}`}
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-xl bg-accent text-white font-semibold shadow-sm hover:bg-accent-hover hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-h2 font-bold mb-6 text-headline">Contact Information</h2>
              <div className="space-y-6">
                <p className="text-body text-foreground leading-relaxed">
                  Feel free to reach out through any of the channels below. I typically respond within 24-48 hours.
                </p>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:shadow-soft transition-all">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-headline mb-1">Email</h3>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-accent hover:text-accent-hover transition-colors text-sm"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:shadow-soft transition-all">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-headline mb-1">LinkedIn</h3>
                    <a
                      href={profile.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover transition-colors text-sm"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:shadow-soft transition-all">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Github className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-headline mb-1">GitHub</h3>
                    <a
                      href={profile.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover transition-colors text-sm"
                    >
                      View my code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
