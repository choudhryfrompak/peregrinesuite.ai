import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "primary-light": "#60a5fa",
        dark: "#242424",
        "dark-light": "#333333",
        "gray-bg": "#f7faff",
        "gray-border": "#e5e7eb",
      },
      fontFamily: {
        mazzard: ['"Mazzard H"', "Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        fragment: ['"Fragment Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
