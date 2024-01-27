module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f8f8fa",
          100: "#f2f3f6",
          600: "#6e6e70",
          900: "#0f1728",
          "50_01": "#f8f9fb",
          "50_02": "#f9f5ff",
          "900_0c": "#1018280c",
          "900_61": "#0f172861",
          "900_01": "#101828",
        },
        blue_gray: {
          50: "#eaecf0",
          100: "#cfd4dc",
          500: "#667084",
          700: "#475466",
          800: "#344053",
          900: "#292d32",
          "100_01": "#d0d5dd",
        },
        deep_purple: {
          50: "#e9d7fe",
          300: "#9d76ed",
          400: "#7e56d8",
          500: "#6840c6",
        },
        green: { A100: "#abefc6", A700: "#17b26a" },
        teal: { 800: "#067647" },
        light_green: { 50: "#ebfdf2" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        ibmplexsansarabic: "IBM Plex Sans Arabic",
        inter: "Inter",
        ibmplexsans: "IBM Plex Sans",
      },
      boxShadow: { bs: "0px 1px  2px 0px #1018280c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
