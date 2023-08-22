module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'1020px',
      xl:'1440px',
    },

    extend: {

      colour: {
        darkBlue1: 'hsl(240°, 100%, 27.3%)',
        dustyPink:'	hsl(98%, 47%, 69%)',
      },

      fontFamily: {
        open: ['Open Sans' , 'sans-serif' ],
        alata: ['Alata' , 'sans-serif' ],
        poppins: ['Poppins' , 'sans-serif' ],
        raleway: ['Raleway' , 'sans-serif'],
        ubuntu: ['Ubuntu' , 'sans-serif'],
        lobster: ['Lobster', 'cursive']
      },
    },

    
  },

  plugins: [require('@tailwindcss/line-clamp')],
  plugins: [require('daisyui')],
}
