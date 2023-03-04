const { faSquarePersonConfined } = require('@fortawesome/free-solid-svg-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'customyellow':'#BAA333',
      'custompurple' : 'hsl(250 , 69% , 61%)'
      } , 
      fontFamily : {
        "burtons" : "burtons",
        'poppins' : ['Poppins', 'sans-serif']
      },
      screens: {
        'cb' : '800px',
        'lb' : '640px',
        '4': {'max': '400px'},
        'lbr': {'max': '640px'},

      },
    },
   
  },
  plugins: [],
}


// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'custom-yellow':'#BAA333',
//       }
//     },
//   },  
// }

// transparent: 'transparent',
//       current: 'currentColor',
//       'white': '#ffffff',
//       'purple': '#3f3cbb',
//       'midnight': '#121063',
//       'metal': '#565584',
//       'tahiti': '#3ab7bf',
//       'silver': '#ecebff',
//       'bubble-gum': '#ff77e9',
//       'bermuda': '#78dcca',


// theme: {
//   screens: {
//     'tablet': '640px',
//     // => @media (min-width: 640px) { ... }

//     'laptop': '1024px',
//     // => @media (min-width: 1024px) { ... }

//     'desktop': '1280px',
//     // => @media (min-width: 1280px) { ... }
//   },
// }
// }