
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custompink': '#fe6f61',
        'lightgray45': '#1f1f1f',
      },
      fontFamily: {

        'rockSalt': ["Rock Salt"],
        'pp-formula-condensed': ['PP Formula Condensed', 'sans-serif'],
        'neue-montreal' : ['Neue Montreal']

      }
    },
  },
  
};
