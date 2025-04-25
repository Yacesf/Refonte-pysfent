/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradientMove: "gradientMove 10s ease-in-out infinite",
      },
      keyframes: {
        gradientMove: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        bleuCiel: "#d6eaf8",
      },
      fontFamily: {
        lato: ["Lato"],
        titlefont: ["Oxygen"],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
