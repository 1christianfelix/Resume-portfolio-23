/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        darumadrop: ["Darumadrop One"],
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
      screens: {
        1440: "2560px",
        1080: "1920px",
      },
      dropShadow: {
        "3xl-white": "0 0 25px rgba(241, 243, 226, .5)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#666090",
          info: "#218aff",
          accent: "#28272c",
        },
      },
    ],
  },
};
