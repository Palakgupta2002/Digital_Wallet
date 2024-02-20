/** @type {import('tailwindcss').Config} */
import flowbiteplugin from "flowbite/plugin"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],

  theme: {
    extend: {},
  },
  plugins: [
    flowbiteplugin
  ],
}

