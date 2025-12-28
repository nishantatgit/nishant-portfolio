import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SITE_TITLE = "Nishant Kumar — Full-Stack → ML Engineer Portfolio";
const SITE_DESCRIPTION = "Transitioning from Full-Stack Engineer to Machine Learning Engineer. Explore 4 end-to-end ML case studies, engineering strengths, and a recruiter-friendly, metrics-driven portfolio.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://nishant-ml-portfolio.com",
    siteName: "Nishant Kumar ML Portfolio",
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
  metadataBase: new URL("https://nishant-ml-portfolio.com"),
  robots: "index, follow",
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
  return (
    <html lang="en">
      <body
        className="antialiased bg-background text-foreground min-h-screen flex flex-col font-sans"
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
