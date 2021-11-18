module.exports = {
  mode: 'jit',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'rgb(39,33,91)', 
      white: 'rgb(255,255,255)', // Important: In rgb() notation for Wallet pass compatibility!
      black: 'rgb(0,0,0)',       // Important: In rgb() notation for Wallet pass compatibility!
      error: 'rgb(255,17,31)',
      btn: {
        DEFAULT: 'rgba(39,33,91,0.15)',
        hover: 'rgba(39,33,91,0.25)',
        active: 'rgba(39,33,91,0.35)'
      },
      checkbox: {
        DEFAULT: 'rgba(39,33,91,0.15)',
        hover: 'rgba(39,33,91,0.25)',
        active: 'rgba(39,33,91,0.35)',
        checked: {
          DEFAULT: 'rgba(39,33,91,1.0)',
          hover: 'rgba(39,33,91,0.9)',
          active: 'rgba(39,33,91,0.8)',
        }
      },
      walletGray: 'rgb(30,30,30)',
      walletText: 'rgb(209,209,209)',
    },
    fontFamily: {
      body: ['-apple-system', 'sans-serif'],
      display: ['apple-system', 'sans-serif']
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }
}
