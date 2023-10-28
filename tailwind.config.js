import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'sea-green': '#51b788',
        'kelp-green': '#2e6a50',
        'baby-blue': '#91e0ef',
        'dark-turquoise': '#023e8a',
        'royal-blue': '#120e3d'
      }
    },
  },
  plugins: [nextui()],
  darkMode: "class"
}
