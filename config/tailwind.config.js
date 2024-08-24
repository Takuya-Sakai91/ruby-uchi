import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import daisyui from "daisyui";

export default {
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.{js,jsx,ts,tsx}",
    "./app/views/**/*.{erb,haml,html,slim}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms, typography, containerQueries, daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e60012",
          secondary: "#e71f19",
          accent: "#00ff00",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#38bdf8",
          success: "#ff00ff",
          warning: "#ffff00",
          error: "#ff0000",
        },
      },
    ],
  },
};
