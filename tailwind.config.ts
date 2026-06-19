import type { Config } from "tailwindcss";

/**
 * Tailwind is configured and available for future work, but the current
 * Norien visuals are driven by the ported design system in app/globals.css.
 * Preflight is DISABLED so Tailwind's reset can never alter the existing,
 * pixel-perfect appearance (globals.css ships its own reset).
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        ink: { 950: "#04090f", 900: "#070d15", 850: "#0a121d", 800: "#0e1726" },
        ivory: "#f5efe1",
        parchment: "#e8dcc0",
        gold: { DEFAULT: "#d9b15f", light: "#f0d79a", dark: "#a87d33" },
      },
    },
  },
  plugins: [],
};

export default config;
