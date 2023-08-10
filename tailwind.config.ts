/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: "#808080",
      lightgray: "#f0f0f0",
      lightpurple: "#e6e6fa",
    },
  },
  plugins: [],
};
