/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Great Vibes'],
        'sans': ['Josefin Sans']
      },
      colors: {
        "bg-200": "#f2e5e5",
        "bg-300": "#c9bdbd",
        "bg-100": "#fcefef",
        "primary-100": "#ffc0cb",
        "primary-200": "#e0a3ad",
        "primary-300": "#99616c",
        "accent-100": "#ffdab9",
        "accent-200": "#997a5c",
        "text-100": "#4a4a4a",
        "text-200": "#767676"
      }
    },
  },
  plugins: [],
}

