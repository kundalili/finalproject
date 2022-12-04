/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {   
      // backgroundImage: {
      //   'mother': "url('./src/assets/header.png')",
      // },
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'coral': '#e7695b',
      'vividBlue': '#043bff',
      'lightBlue':'#7B98FF',
      'softRed': '#E7695B',
      'lotionPink':'#f7cfcc',
      'darkGray':'#3E3E3E',
      'softBlue':'#b4c5ff'
      
  },},
 
  plugins: [],
}
}