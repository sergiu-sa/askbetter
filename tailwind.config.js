/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    {
      pattern:
        /(text|bg|border)-(indigo|green|orange)-(50|100|200|500|600|700)/,
      variants: ["hover"],
    },
    "font-sm",
    "font-md",
    "font-lg",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        accent: "#4f9cff",
        background: "#f9f9f6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
