/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
        light: "#2d2d2d",
        lighter: "#9ca3af",
      },
    },
  },
  plugins: [],
};
