import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f3ef",
          100: "#e8e2d8",
          200: "#d1c5b3",
          300: "#b4a18e",
          400: "#9a836e",
          500: "#836d5a",
          600: "#6e584a",
          700: "#5a463c",
          800: "#4a3a33",
          900: "#3e312b",
          950: "#211a16",
        },
        gold: {
          50: "#fdf9ed",
          100: "#f9efc8",
          200: "#f3dd8e",
          300: "#ecc752",
          400: "#e5b730",
          500: "#d99f18",
          600: "#c47f12",
          700: "#a36013",
          800: "#844d17",
          900: "#6d4118",
          950: "#5c3718",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        body: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tight: "-0.025em",
        wider: "0.05em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;