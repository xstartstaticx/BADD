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

      /*  colors:{
        medgreen: {
          1:'#116666',
          2:'#1eb7b7',
          3:'#22cccc',
          4: '#a6eaea',
          5: '#d2f4f4',},  
        medred: {
          1:'#ee1442',
        
        },
       },  */ 
    },
   
  },
  plugins: [require("flowbite/plugin")],
};
