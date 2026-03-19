import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // YĀTRĀ Brand Book — Primary: Gotu
        gotu: ["var(--font-gotu)", "Georgia", "serif"],
        // YĀTRĀ Brand Book — Secondary: Avenir equivalent
        nunito: ["var(--font-nunito)", "system-ui", "sans-serif"],
        // Keep aliases for backward compat with existing JSX
        cormorant: ["var(--font-gotu)", "Georgia", "serif"],
        inter: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      colors: {
        // YĀTRĀ Brand Book — Primary palette
        "yatra-cream":  "#E2E1DF",
        "yatra-white":  "#EFF0F1",
        "yatra-beige":  "#D1C7BF",
        "yatra-taupe":  "#BFBCB8",
        // YĀTRĀ Brand Book — Accent palette
        "yatra-terra":  "#A23E29",   // terracotta
        "yatra-charcoal": "#3B3A3B",
        "yatra-blue":   "#324354",   // deep blue — "like the depth of the ocean"
      },
    },
  },
  plugins: [],
};
export default config;
