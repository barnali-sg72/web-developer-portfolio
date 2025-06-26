/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enables class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        radial: "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        header: ["Merriweather", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        playfair: ["Playfair Display", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          "text-shadow":
            "2px 2px 5px rgba(0,0,0,0.7), 0 0 20px rgba(255,255,255,0.8)",
        },
        ".text-shadow-lg": {
          "text-shadow": "0 4px 16px rgba(255,255,255,0.5)",
        },
        ".text-shadow-dark": {
          "text-shadow": "3px 3px 2px rgba(0,0,0,0.3)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover", "dark"]);
    },
  ],
};
