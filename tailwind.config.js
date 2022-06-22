module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        LJ_LightBlue: "#50c8e8",
        LJ_Green: "#00bf8c",
        LJ_Orange: "#fdb215",
      },
      height: {
        100: "25rem",
        110: "27.5rem",
        125: "31.25rem",
        135: "33.75rem",
        150: "37.5rem",
        152: "38rem",
        170: "42.5rem",
        200: "50rem",
        250: "62.5rem",
        p90: "90%",
        p92: "92%",
        p57: "57%",
        p43: "43%",
        p8: "8%",
      },
      width: {
        100: "25rem",
        120: "30rem",
        125: "31.25rem",
        150: "37.5rem",
        152: "38rem",
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
    width: ["responsive", "hover", "focus"],
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [],
};
