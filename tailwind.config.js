import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greyish: "#464545",
        darkGrey: "#2f2f2f",
        blackTeal: "#1b1b1b",
        lightOrange: "#ff7518",
        darkOrange: "#f54703",
        white: "#fdfbfd",
      },
      keyframes: {
        // spark: {
        //   "25%,50%, 100%": {
        //     color: "#dd9551",
        //     boxShadow: "inset -2px -2px 10px 2px #dd9551",
        //   },
        //   "0%, 40%, 75%": {
        //     color: "#71717a",
        //     boxShadow: "none",
        //   },
        // },
        // sparkOut: {
        //   "25%,50%, 100%": {
        //     boxShadow: "0px 4px 1px 0px #dd955160",
        //   },
        //   "0%, 40%, 75%": {
        //     boxShadow: "0px 4px 1px 0px #dd955100",
        //   },
        // },
        breezy: {
          "0%": {
            boxShadow: "2px 7px #820000",
            borderBottomWidth: "45px",
          },
          "30%": {
            boxShadow: "4px 12px 2px 2px #820000",
            borderBottomWidth: "42px",
          },

          "100%": {
            boxShadow: "3px 10px 1px 1px #820000",
            borderBottomWidth: "43.5px",
          },
        },
        breezySM: {
          "0%": {
            boxShadow: "2px 3px #820000",
            borderBottomWidth: "24px",
          },
          "30%": {
            boxShadow: "3px 5px 2px 1px #820000",
            borderBottomWidth: "23.5px",
          },

          "100%": {
            boxShadow: "2px 4px 1px 1px #820000",
            borderBottomWidth: "23px",
          },
        },
      },
      animation: {
        spark: "spark 2s step-end forwards",
        sparkOut: "sparkOut 2s step-end forwards",
        breezy: "breezy 3s infinite alternate",
        breezySM: "breezySM 5s infinite alternate",
      },
    },
    fontFamily: {
      inter: ["Inter var", "sans-serif"],
      spectral: ["Spectral SC", "serif"],
      games: ["Games", "sans-serif"],
      uniSans: ["UniSans", "sans-serif"],
      grandezza: ["Grandezza", "serif"],
    },
  },
  plugins: [],
};
