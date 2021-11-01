import i18n from './i18n';
import tailwind from './tailwind.config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'COVID Pass',
    htmlAttrs: {
      //...i18nHead.htmlAttrs
    },
    bodyAttrs: {
      class: 'bg-primary'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Scan your vaccination, test and recovery certificates in QR code representation and save them to your Apple Wallet' },
      { name: 'application-name', content: 'COVID Pass in your iOS Apple Wallet'},
      { name: 'keywords', content: 'Apple Wallet, iOS Wallet, iPhone Wallet, EU Digital COVID Certificate, COVID, covid pass, green pass, EU Green Certificate, Vaccination, Recovery, Test'},
      { name: 'author', content: 'Donatus Wolf, Philipp Trenz'},
      { name: 'theme-color', content: tailwind.theme.colors.primary },
      { name: 'msapplication-TileColor', content: tailwind.theme.colors.primary },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { property: 'og:title', content: 'COVID Pass' },
      { property: 'og:description', content: 'Your digital COVID pass in your iPhone Apple Wallet' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://covidpass.eu' },
      { property: 'og:site_name', content: 'COVID Pass' },
      { property: 'og:image', content: '/og-image.png' },
      { property: 'og:image:width', content: '1280' },
      { property: 'og:image:height', content: '640' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:description', content: 'Scan your vaccination, test and recovery certificates in QR code representation and save them to your Apple Wallet' },
      { name: 'twitter:creator', content: '@donatuswolf' },
      //...i18nHead.meta
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon" type="image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon" type="image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: tailwind.theme.colors.primary },
      //...i18nHead.link
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
    },
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  axios: {},

  sitemap: {
    hostname: 'https://covidpass.eu',
    i18n: true,
    gzip: true,
  },

  robots: {
    Sitemap: (req) => `https://${req.headers.host}/sitemap.xml`,
    UserAgent: '*',
    Disallow: (req) => req.headers.host.startsWith('dev.') ? '/': '',
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'de', iso: 'de-DE' },
      { code: 'fr', iso: 'fr-FR' },
      { code: 'es', iso: 'es-ES' },
      { code: 'it', iso: 'it-IT' },
      { code: 'ru', iso: 'ru-RU' },
      { code: 'tr', iso: 'tr-TR' },
      { code: 'ar', iso: 'ar-YE' },
    ],
    defaultLocale: 'en',
    baseUrl: 'https://covidpass.eu',
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
