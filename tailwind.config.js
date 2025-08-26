/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      common: {
        white: "#fff",
        black: "#000",
      },
      lightGreen: "#00AD93",
      primaryText: "#002D38",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      boxShadow: {
        "custom-drop": "0 3.61px 25px 0 rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        lightToDarkGreen:
          "linear-gradient(180deg, rgba(0, 173, 147, 0.2) 0%, rgba(0, 173, 147, 1) 100%);",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
  corePlugins: { preflight: true },
  important: true,
};
