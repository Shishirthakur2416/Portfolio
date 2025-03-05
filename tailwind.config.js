// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",  // Black background for Header
        secondary: "#ffffff",  // White for text hover
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],  // Add a professional sans-serif font
      },
    },
  },
  plugins: [],
};
