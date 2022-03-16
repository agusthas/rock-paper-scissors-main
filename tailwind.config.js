const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgGradientForm: 'hsl(214, 47%, 23%)',
        bgGradientTo: 'hsl(237, 49%, 15%)',
        scissorsGradientFrom: 'hsl(39, 89%, 49%)',
        scissorsGradientTo: 'hsl(40, 84%, 53%)',
        paperGradientFrom: 'hsl(230, 89%, 62%)',
        paperGradientTo: 'hsl(230, 89%, 65%)',
        rockGradientFrom: 'hsl(349, 71%, 52%)',
        rockGradientTo: 'hsl(349, 70%, 56%)',
        textDark: 'hsl(229, 25%, 31%)',
        textScore: 'hsl(229, 64%, 46%)',
        headerOutline: 'hsl(217, 16%, 45%)',
      },
      fontFamily: {
        sans: ['Barlow Semi Condensed', ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        circle: '1',
      },
    },
  },
  plugins: [],
};
