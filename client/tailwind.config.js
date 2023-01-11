/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // customStyle: {
      //   borderRadius: `50px`,
      //   background: `#e0e0e0`,
      //   boxShadow: `20px -20px 60px #bebebe,
      //        -20px 20px 60px #ffffff`,
      // },
    },
  },
  plugins: [require("flowbite/plugin")],
};
