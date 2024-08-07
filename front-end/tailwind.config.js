module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ceviche: ['Ceviche One', 'system-ui'],
        freckle: ['Freckle Face', 'system-ui'],
        zilla:   ['Zilla Slab Highlight', 'serif'],
        Caveat:  ['Caveat', 'curs'] ,
      },
      backgroundImage: {
        'mens-category': "url('/src/assets/images/men1.jpg')",
        'womens-category': "url('/src/assets/images/women.jpg')",
        'kids-category': "url('/src/assets/images/kid1.jpg')",
        'home-bg':"url('/src/assets/images/bg1.jpg')",
      },
    },
  },
  plugins: [],
};
