import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishant Kumar — Full-Stack → ML Engineer Portfolio",
  description:
    "Transitioning from Full-Stack Engineer to Machine Learning Engineer. Explore 4 end-to-end ML case studies, engineering strengths, and a recruiter-friendly, metrics-driven portfolio.",
  openGraph: {
    title: "Nishant Kumar — Full-Stack → ML Engineer Portfolio",
    description:
      "Transitioning from Full-Stack Engineer to Machine Learning Engineer. Explore 4 end-to-end ML case studies, engineering strengths, and a recruiter-friendly, metrics-driven portfolio.",
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
    title: "Nishant Kumar — Full-Stack → ML Engineer Portfolio",
    description:
      "Transitioning from Full-Stack Engineer to Machine Learning Engineer. Explore 4 end-to-end ML case studies, engineering strengths, and a recruiter-friendly, metrics-driven portfolio.",
    images: ["/vercel.svg"],
  },
  metadataBase: new URL("https://nishant-ml-portfolio.com"),
  robots: "index, follow",
  icons: {
    icon: "/nk.ico",
  },
};

export const viewport = {
  themeColor: "#0f172a",
};

import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/nk.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
        style={{
          fontFamily: "var(--font-geist-sans), Inter, ui-sans-serif, system-ui, sans-serif"
        }}
      >
        {children}
      </body>
    </html>
  );
}
