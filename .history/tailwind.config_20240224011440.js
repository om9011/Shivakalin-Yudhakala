
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#8B4513",
        secondary : "#A0522D",
        tertiary : "#8B3A3A"
      }
    },
  },
  plugins: [
    require('postcss-nesting'),
    require('tailwindcss'),
  ],
}

