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
      'coral': '#EE968C',
      'vividBlue': '#022969',
      'lightBlue':'#7B98FF',
      'softRed': '#E7695B',
      'lotionPink':'#f7cfcc',
      'darkGray':'#3E3E3E',
      'softBlue':'#b4c5ff',
      'greyBlue':'#4e6996',
      "rose":"#fce7e5",
      "darkRed":"#e8e2e4",
      "stone":"#e8e2e4",
      "lightStone":"#d0cbcd",
      "darkStone":"#8B8788",
      "darkBlue":"#203354"

      
  },},
 
  plugins: [],
}
}