module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#0E273C',
      highlight: '#FF5666',
      secondary: '#B3DEE2',
      white: '#fff',
      black: '#000',
      background: '#F6F1EE',
      walletGray: 'rgb(30,30,30)',
      walletText: 'rgb(209,209,209)',
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
