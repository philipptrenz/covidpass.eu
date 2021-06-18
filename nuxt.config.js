import i18n from './i18n';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EU Digital Green Certificate to Apple Wallet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  }
}
