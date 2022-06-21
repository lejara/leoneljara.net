module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        LJ_LightBlue: "#50c8e8",
        LG_Green: "#5d7c43",
      },
      fontSize: {
        title: "14rem",
      },
      screens: {
        xs: "320px",
      },
      zIndex: {
        "-10": "-10",
        "-15": "-15",
        "-20": "-20",
        "-40": "-40",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [],
};
