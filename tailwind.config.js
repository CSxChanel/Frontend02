// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./app/dashboard/**/*.{js,ts,jsx,tsx}",
    "./app/_components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    primary: {
      light: "#3b82f6",
      dark: "#1d4ed8",
    },
    extend: {},
  },
  plugins: [],
};
