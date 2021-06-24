import i18n from './i18n';
import tailwind from './tailwind.config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EU COVID-19 pass for Apple Wallet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'theme-color', content: tailwind.theme.colors.primary },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' }, 
    ]
  },

  // Environment variables
  publicRuntimeConfig: { // accessible from server and client
  },
  privateRuntimeConfig: { // only accessible from server
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/qr', mode:  'client' }
  ],

  // The nuxt.js internal REST endpoint
  serverMiddleware: [
    { path: '/api', handler: '~/server-middleware/rest.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    'nuxt-i18n',
  ],

  tailwindcss: {
    jit: true // enable just-in-time mode
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    //'nuxt-i18n',
  ],

  axios: {},

  i18n: {
    locales: ['en', 'de', ],
    defaultLocale: 'en',
    vueI18n: i18n,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      })
    }
  }
}
