/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy:         "#0E2A5C",
        accent:       "#2F6FE0",
        "section-blue":"#EAF3FC",
        "text-dark":  "#0B1B33",
        "text-muted": "#5B6B82",
        "border-light":"#DCE6F5",
        "card-bg":    "#F5F9FE",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #BFE0F5 0%, #D9ECFA 55%, #EAF3FC 100%)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
