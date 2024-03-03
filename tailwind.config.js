/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'black': '#080808',
      'white': '#FFFFFF',
      'yellow': '#ffbc14',
      'yellow-light' : 'rgb(255, 242, 224)' ,
      'text-contrast': '#947107',
      'text': "#1B1B1B",
      'text-light': '#5E5E5E'
    }
  },
  important : true ,
  plugins: [],
}