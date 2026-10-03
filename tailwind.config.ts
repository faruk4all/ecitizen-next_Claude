import type { Config } from "tailwindcss";
// Tokens ported from V5 styles.css :root
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#07090d", surface: "#0d1118", surface2: "#111722", ink: "#f4f6f8", muted: "#aab2bd", brand: "#3b82f6", brand2: "#69a3ff", line: "rgba(255,255,255,.11)" },
      borderRadius: { card: "24px" },
      maxWidth: { site: "1240px" },
      boxShadow: { card: "0 24px 80px rgba(0,0,0,.35)" },
      fontFamily: { sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
