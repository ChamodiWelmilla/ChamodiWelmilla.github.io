// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind where to look for your classes
  ],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};
