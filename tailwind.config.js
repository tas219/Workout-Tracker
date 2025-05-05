/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        //common colours
        white: '#FFFFFF',
        black: '#000000',
        accent: '#F5C855',
        delete: '#C31F1C',
        //backgrounds:
        primary: {
          light: '#F1F2F4',
          dark: '#444444'
        },
        secondary: {
          light: '#F9EDC2',
          dark: '#121212'
        },
        tertiary: {
          light: '#FFFFFF',
          dark: '#B0B0B0'
        },
        quinary: {
          light: '#F5C855',
          dark: '#444444'
        },
        footer: {
          light: '#FFFFFF',
          dark: '#444444'
        },
        //details:
        detail: {
          light: '#000000',
          dark: '#F5C855'
        },
        detailInv: {
          light: '#FFFFFF',
          dark: '#000000'
        },      
        //text:  
        primaryText: {
          light: '#000000',
          dark: '#E0E0E0'
        },
        

      },
      fontFamily:{
        plight: ["Poppins-Light", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],

      },
    },
  },
  plugins: [],
}

