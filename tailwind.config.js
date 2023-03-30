/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#343541",
        light: "#ECECF1",
        "extra-dark": "#202123",
        "response-gray": "#40414F",
        "hover-gray": "#2A2B32",
      },
    },
  },
  plugins: [],
};

