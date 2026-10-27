/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6e9fbf",
        "primary-hover": "#5889a8",
        secondary: "#004E89",
        "secondary-dark": "#001F3F",
        dark: "#1A1A1A",
        "light-gray": "#F5F5F5",
        // Editorial redesign palette
        canvas: "#F4F6F8",
        "canvas-2": "#E9EEF3",
        paper: "#FFFFFF",
        ink: "#0D1B2E",
        "ink-2": "#334155",
        muted: "#5B6878",
        "muted-2": "#77849A",
        line: "#DCE3EA",
        "line-2": "#E7ECF1",
        accent: "#FF6B35",
        ok: "#16A34A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      backgroundImage: {
        "brand-grad": "linear-gradient(120deg, #004E89, #2C7DB8 55%, #6E9FBF)",
      },
    },
  },
  plugins: [],
};
