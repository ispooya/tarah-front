export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tarah | طراح',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/fonts/stylesheet.css', '~/assets/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-scroll.client', '~/plugins/vue-progress.client'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
    // '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/image',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  ssr: false,
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  router: {
    middleware: ['auth', 'authenticated']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  axios: {
    baseURL: process.env.API_URL,
    proxy: true,
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },
  proxy: {
    '/backend/': {
      target: process.env.API_URL,
      pathRewrite: { '^/backend/': '' },
      changeOrigin: true
    }
  },
  fontawesome: {
    icons: {
      solid: true
    }
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/dashboard',
      home: '/dashboard'
    },

    watchLoggedIn: true,
    strategies: {
      local: false,
      laravelPassport: {
        provider: 'laravel/passport',
        grantType: 'password',
        url: process.env.API_URL,
        clientId: process.env.PASSPORT_CLIENT_ID,
        clientSecret: process.env.PASSPORT_CLIENT_SECRET,
        redirectUri: process.env.APP_URL,
        scope: '',
        endpoints: {
          userInfo: '/api/user'
        }
      }
    }
  }
}
