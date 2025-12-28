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
        background: "#ffffff",     // Pure white background for cleanliness
        surface: "#fafafa",        // Subtle surface color
        foreground: "#0a0a0a",     // Near-black for main text
        headline: "#1a1a1a",       // Dark for headlines
        accent: {
          DEFAULT: "#2563eb",      // Professional blue
          hover: "#1d4ed8",        // Darker blue on hover
          light: "#dbeafe",        // Light blue for backgrounds
        },
        muted: {
          DEFAULT: "#6b7280",      // Professional grey
          foreground: "#9ca3af",   // Lighter grey for secondary text
        },
        card: "#ffffff",           // White cards with shadows
        border: "#e5e7eb",         // Subtle borders
        success: "#10b981",        // Green for success states
        warning: "#f59e0b",        // Amber for warnings
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h1': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h2': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h3': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -3px rgba(0, 0, 0, 0.1), 0 15px 30px -2px rgba(0, 0, 0, 0.05)',
        'hard': '0 10px 40px -3px rgba(0, 0, 0, 0.15), 0 20px 40px -2px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
export default config;
