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
        //light mode colours
        bg1L: '#F1F2F4',
        bg2L: '#F9EDC2',
        bg3L: '#FFFFFF',
        bg4L: '#F5C855',
        detl1L: '#000000',
        detl2L: '#FFFFFF',
        text1L: '#000000',
        footL: '#FFFFFF',
        //dark mode colours
        bg1D: '#444444',
        bg2D: '#121212',
        bg3D: '#B0B0B0',
        bg4D: '#444444',
        detl1L: '#F5C855',
        detl2L: '#000000',
        text1L: '#E0E0E0',
        footL: '#444444',
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

