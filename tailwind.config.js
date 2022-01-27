module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "global-font": ["Outfit", "sans-serif"],
      },
      animation: {
        progress: "progress 3s forwards",
      },
      keyframes: {
        progress80: {
          "0%": { width: "0%" },
          "100%": { width: "80%" },
        },
        progress70: {
          "0%": { width: "0%" },
          "100%": { width: "70%" },
        },
        progress60: {
          "0%": { width: "0%" },
          "100%": { width: "60%" },
        },
        progress50: {
          "0%": { width: "0%" },
          "100%": { width: "50%" },
        },
        progress40: {
          "0%": { width: "0%" },
          "100%": { width: "40%" },
        },
        progress30: {
          "0%": { width: "0%" },
          "100%": { width: "30%" },
        },
      },
    },
  },
  plugins: [],
};
