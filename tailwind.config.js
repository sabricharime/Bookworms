import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

    },
    fontFamily: {
      Source: ['Source Sans 3', 'sans-seri'],
      Tajawal: ['Tajawal', "sans-seri"]
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}

