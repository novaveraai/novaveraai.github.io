import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#F00008",
          highlight: "#FF0000",
          dark: "#960000",
        },
        bg: {
          base: "#000000",
          main: "#050505",
          secondary: "#0A0A0A",
          surface: "#111111",
          elevated: "#181818",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B8B8B8",
          muted: "#777777",
        },
        line: {
          DEFAULT: "#303030",
          soft: "rgba(255,255,255,0.12)",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.04)",
          border: "rgba(255,255,255,0.12)",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backdropBlur: {
        glass: "16px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.6)",
        "glow-red": "0 0 24px rgba(240,0,8,0.35)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(240,0,8,0.08) 0%, transparent 70%)",
      },
      animation: {
        "grid-drift": "grid-drift 60s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        "grid-drift": {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "60px 60px, 60px 60px" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;