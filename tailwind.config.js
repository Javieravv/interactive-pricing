import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '400px',
        'md': '500px'
      },
      colors: {
        "SoftCyan": "hsl(174, 77%, 80%)",    // (Full Slider Bar)
        "StrongCyan" : "hsl(174, 86%, 45%)", //(Slider Backround)
        "LightGrayishBackground": "hsl(14, 92%, 95%)", // Red (Discount 
        "LightRed" : "hsl(15, 100%, 70%)", //(Discount Text)
        "PaleBlue" : "hsl(226, 100%, 87%)", //(CTA Text)
        "White" : "hsl (0, 0%, 100%)", //(Pricing Component Background)
        "VeryPaleBlue" : "hsl(230, 100%, 99%)", //(Main Background)
        "LightGrayishBlue":{
          "empty": "hsl(224, 65%, 95%)", //(Empty Slider Bar)
          "toogle": "hsl(223, 50%, 87%)", //(Toggle Background)
        }, 
        "GrayishBlue" : "hsl(225, 20%, 60%)", //(Text)
        "DarkDesaturatedBlue" : "hsl(227, 35%, 25%)", //(Text & CTA Background)
      },
      fontFamily: {
        "manrope": ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "pattern": "url(./images/bg-pattern.svg)",
        "pattern-circles": "url(./images/pattern-circles.svg)",
        "icon-chek": "url(./images/icon-chek.svg)",
        "icon-slider": "url(./images/icon-slider.svg)",
      }
    },
  },
  plugins: [
    
  ],
}

