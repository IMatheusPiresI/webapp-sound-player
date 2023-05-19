/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['R'],
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { width: '50px', backgroundColor: 'white' },
          '35%': { width: '50px', backgroundColor: 'white' },
          '45%': { width: '30px', backgroundColor: '#fff1' },
          '90%': { width: '30px', backgroundColor: '#fff1' },
          '95%': { width: '50px', backgroundColor: 'white' },
          '100%': { width: '50px', backgroundColor: 'white' },
        },
        wiggle_reverse: {
          '0%': { width: '30px', backgroundColor: '#fff1' },
          '35%': { width: '30px', backgroundColor: '#fff1' },
          '45%': { width: '50px', backgroundColor: 'white' },
          '90%': { width: '50px', backgroundColor: 'white' },
          '95%': { width: '30px', backgroundColor: '#fff1' },
          '100%': { width: '30px', backgroundColor: '#fff1' },
        },
        left_transition: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '35%': { transform: 'translateX(0)', opacity: 1 },
          '45%': { transform: 'translateX(-500px)', opacity: 0 },
          '85%': { transform: 'translateX(-500px)', opacity: 0 },
          '95%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        right_transition: {
          '0%': { transform: 'translateX(500px)', opacity: 0 },
          '35%': { transform: 'translateX(500px)', opacity: 0 },
          '45%': { transform: 'translateX(0)', opacity: 1 },
          '85%': { transform: 'translateX(0)', opacity: 1 },
          '95%': { transform: 'translateX(500px)', opacity: 0 },
          '100%': { transform: 'translateX(500px)', opacity: 0 },
        },
      },
      animation: {
        wiggle: 'wiggle 8s linear infinite',
        wiggle_reverse: 'wiggle_reverse 8s linear infinite',
        hide_first_sign: 'left_transition 8s linear infinite',
        hide_second_sign: 'right_transition 8s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
