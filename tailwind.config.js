/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'bruno': ["Bruno Ace SC"],
        'outFit': ["Outfit"]
      },
      colors: {
        color: {
          1: "#3FB6F0"
        }
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

