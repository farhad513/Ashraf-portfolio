/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101827",
        navy: "#111c2f",
        wine: "#a20f18",
        paper: "#f7f8fa",
        line: "#e8eaee",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(16,24,39,.08)",
        card: "0 10px 35px rgba(16,24,39,.07)",
      },
    },
  },
  plugins: [],
};