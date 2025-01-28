/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to right, #001c32, #00060a, #001c32)',
      'custom-gradient-2': 'linear-gradient(to right, #130F40,#000000, #130F40)'
    },
    fontFamily: {
      'lobster': ['Lobster', 'sans-serif'],
      'lora': ['Lora', 'serif'],
    },
  },
};
export const plugins = [];
