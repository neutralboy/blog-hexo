module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      sans: ['Noto Sans JP', 'sans-serif'],
      display: ['Roboto'],
      body: ['Noto Sans JP']
    },
    extend:{
      typography: {
        DEFAULT: {
          css: {
            strong: { color: "white" },
            blockquote: { color: "white" },
            h1: { color: "white" },
            h3: { color: "white" },
            h2: { color: "white" },
            h4: { color: "white" },
            h5: { color: "white" },
            h6: { color: "white" },
            pre: { fontFamily: 'IBM Plex Mono' },
            code: { fontFamily: 'IBM Plex Mono', color: "white" }
          }
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
