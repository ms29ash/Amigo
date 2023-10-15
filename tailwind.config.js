/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0D0D0D",
        gray: "#222426",
        lightGray: "#303336",
        green: "#05F26C",
        sgreen: "#00D292",
      },
      boxShadow: {
        opt: "0px 4px 12px rgba(0,0,0,0)",
      },
    },
  },
  plugins: [],
};
