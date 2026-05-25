import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C97A",
          dark: "#A07828",
        },
        dark: {
          DEFAULT: "#080810",
          2: "#12121a",
          3: "#161628",
          4: "#1C1C32",
        },
        text: {
          DEFAULT: "#F0EEE8",
          muted: "#8A8999",
        },
        border: "rgba(201,168,76,0.12)",
        input: "rgba(255,255,255,0.04)",
        ring: "#C9A84C",
        background: "#080810",
        foreground: "#F0EEE8",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "1.25rem",
        md: "1rem",
        sm: "0.75rem",
      },
      animation: {
        ticker: "tickerMove 28s linear infinite",
        "orb-float": "orbFloat 8s ease-in-out infinite",
        "vid-float": "vidFloat 7s ease-in-out infinite",
        "gold-pulse": "goldPulse 2.2s ease infinite",
        "fade-in": "fadeIn .35s ease",
      },
    },
  },
  plugins: [],
};

export default config;
