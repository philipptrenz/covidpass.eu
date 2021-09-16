import i18n from './i18n';
import tailwind from './tailwind.config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'COVID Pass',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'bg-primary'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Scan your vaccination, test and recovery certificates in QR code representation and save them to your Apple Wallet' },
      { name: 'application-name', content: 'COVID Pass'},
      { name: 'keywords', content: 'Apple Wallet, EU Digital COVID Certificate, EU Green Certificate, Vaccination, Recovery, Test, Impfung, Genesung'},
      { name: 'author', content: 'Donatus Wolf, Philipp Trenz'},
      { name: 'theme-color', content: tailwind.theme.colors.primary },
      { name: 'msapplication-TileColor', content: tailwind.theme.colors.primary },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { property: 'og:title', content: 'COVID Pass' },
      { property: 'og:description', content: 'Your digital COVID pass just one click away' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://covidpass.eu' },
      { property: 'og:site_name', content: 'COVID Pass' },
      { property: 'og:image', content: '/og-image.png' },
      { property: 'og:image:width', content: '1280' },
      { property: 'og:image:height', content: '640' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:description', content: 'Scan your vaccination, test and recovery certificates in QR code representation and save them to your Apple Wallet' },
      { name: 'twitter:creator', content: '@donatuswolf' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon" type="image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon" type="image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: tailwind.theme.colors.primary },
    ]
  },

  // Environment variables
  publicRuntimeConfig: { // accessible from server and client
    teamIdentifier: process.env.PASS_TEAM_IDENTIFIER,
    passIdentifier: process.env.PASS_TYPE_IDENTIFIER,
  },
  privateRuntimeConfig: { // only accessible from server
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/qr', mode: 'client' },
    { src: '~/plugins/hcert', mode: 'client' },
    { src: '~/plugins/pkpass', mode: 'client' },
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

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    { 
      src: 'nuxt-user-agent',
      ssr: false
    }
  ],

  axios: {},

  i18n: {
    locales: ['en', 'de' , 'fr', 'es', 'it', 'ru', 'tr', 'ar' ],
    defaultLocale: 'en',
    strategy: 'prefix',
    vueI18n: i18n,
    detectBrowserLanguage: { 
      fallbackLocale: 'en', 
      useCookie: false,
      onlyOnRoot: true,
    }
  },

  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    html: true,
    xhtmlOut: true, 
    runtime: true,  // Support `$md()`
    linkify: true,
    typographer: true,
    breaks: true,
    use: [
      [
        'markdown-it-link-attributes',
        {
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        }
      ],
      // 'markdown-it-div',
    ]
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
