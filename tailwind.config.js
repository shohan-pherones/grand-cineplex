/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins, sans-serif"],
      },
      colors: {
        red: "#ef4444",
        dark: "#0a0a0a",
        light: "#fafafa",
      },
    },
  },
  plugins: [],
};
