/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    height: {
      header: '560px',
      rate: '400px',
    },
    fontSize: {
      h1: '2.6rem',
    },
    screens: {
      xs: '475px',
    },
    colors: {
      main: '#080A1A',
      subMain: '#F20000',
      dry: '#0B0F29',
      star: '#FFB000',
      text: '#cecece',
      border: '#4b5563',
      dryGray: '#E0D5D5',
    },
  },
};
export const plugins = [
  require('@tailwindcss/line-clamp'),
];