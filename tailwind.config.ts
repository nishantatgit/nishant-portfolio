import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#f9f9f6", // Off-white background
        foreground: "#111111", // Black for main text
        headline: "#23272e",   // Dark grey for headlines
        accent: "#2563eb",     // Blue for links/buttons
        muted: "#5a5a5a",      // Muted text
        card: "#fcfcfa",       // Slightly off-white card
        border: "#e5e7eb",     // Light border
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        'hero': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'section': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
      },
      borderRadius: {
        'lg': '0.75rem',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
export default config;
