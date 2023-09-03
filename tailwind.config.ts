import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        textGradient1: {
          "33.33%, 83.33%": { color: "inherit" },
          "0%, 16.67%, 100%": { color: "transparent" },
        },
        textGradient2: {
          "0%, 16.67%, 66.67%, 100%": { color: "inherit" },
          "33.33%, 50%": { color: "transparent" },
        },
        textGradient3: {
          "0%, 50%, 100%": { color: "inherit" },
          "66.67%, 83.33%": { color: "transparent" },
        },
        buttonGradient1: {
          "33.33%, 83.33%": { opacity: "0" },
          "0%, 16.67%, 100%": { opacity: "1" },
        },
        buttonGradient2: {
          "0%, 16.67%, 66.67%, 100%": { opacity: "0" },
          "33.33%, 50%": { opacity: "1" },
        },
        buttonGradient3: {
          "0%, 50%, 100%": { opacity: "0" },
          "66.67%, 83.33%": { opacity: "1" },
        },
      },
      animation: {
        textGradient1: "textGradient1 8s infinite",
        textGradient2: "textGradient2 8s infinite",
        textGradient3: "textGradient3 8s infinite",
        buttonGradient1: "buttonGradient1 8s infinite",
        buttonGradient2: "buttonGradient2 8s infinite",
        buttonGradient3: "buttonGradient3 8s infinite",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
} satisfies Config;
