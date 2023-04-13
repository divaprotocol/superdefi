/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        
        'light-purple': '#E1DEFF',
        'diva-white': '#FFFFFF',
        'diva-purplr': '#6A2DFF',
        'dark-diva':'#242649',
        'background-gradient':'linear-gradient(180deg, #E1DEFF 0%, #FFFFFF 100%)'
      },
      
    },
  },
  plugins: [],
};
