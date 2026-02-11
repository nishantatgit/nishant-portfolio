import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { profile } from "@/content/profile";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const SITE_TITLE = "Nishant Kumar — Full-Stack → ML Engineer Portfolio";
const SITE_DESCRIPTION = "Transitioning from Full-Stack Engineer to Machine Learning Engineer. Explore 4 end-to-end ML case studies, engineering strengths, and a recruiter-friendly, metrics-driven portfolio.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "Nishant Kumar ML Portfolio",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/vercel.svg"],
  },
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/nk.ico",
  },
};

export const viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    email: `mailto:${profile.contact.email}`,
    sameAs: [profile.contact.github, profile.contact.linkedin],
    jobTitle: "Machine Learning Engineer",
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <html lang="en">
      <body
        className="antialiased bg-background text-foreground min-h-screen flex flex-col font-sans"
      >
        <JsonLd data={personStructuredData} />
        <JsonLd data={websiteStructuredData} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
