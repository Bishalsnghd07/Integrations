/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkorange: "#ff8d15",
        b778c: "#6b778c",
        heading: "#19154e",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#efefef",
          "300": "#ebebeb",
          "400": "rgba(244, 246, 248, 0.7)",
        },
        darkslateblue: "#541855",
        dodgerblue: "#518ef7",
        primery: "#8b3dff",
        azure: "#e1f0f1",
        green: "#24a205",
        deepskyblue: "#13b5ea",
        "sub-heading": "#3f4c5a",
        lavender: "#f6f0ff",
        darkslategray: "#2c3652",
        lightslategray: "#8b91a9",
        black: "#000",
        gray: "#081d34",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "made-tommy": "'MADE TOMMY'",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
        "21xl": "40px",
      },
    },
    fontSize: {
      sm: "0.88rem",
      base: "1rem",
      lg: "1.13rem",
      xl: "1.25rem",
      smi: "0.81rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
