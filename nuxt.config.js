export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Anyrep Appliance Repairs | Book online | Norwich',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Book online with Anyrep for same or next day appliance repairs. Providing our guaranteed repair services across the Norwich and Norfolk area at a competitive price.' },
      { name: 'theme-color', content: '#090815' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { 
    color: '#256EFF', 
    height: '3px',
    throttle: 0
  },
  css: [
    'swiper/dist/css/swiper.css',
  ],
  plugins: [
    {src: "~plugins/persistedstate.js", ssr: false},
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },

  ],
  components: true,
  buildModules: [
  ],
  modules: [
    'nuxt-lazy-load',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'

  ],
  robots: {
    UserAgent: '*'

  },
  sitemap: {
    hostname: 'https://anyrep.com',
    gzip: true,

  },
  pwa: { 
    workbox: {}, 
    meta: { 
      name: 'Anyrep',
      theme_color: '#090815', 
      author: 'William Yallop',
      lang: 'en', 
      nativeUI: true,
      description: "Book appliance repairs online with Anyrep!",
    }, 
    icon: {},
    manifest: { 
      name: 'Anyrep', 
      short_name: 'Anyrep', 
      lang: 'en', 
      display: 'standalone',
      background_color: '#090815',
      theme_color: '#090815'
    } 
  },
  axios: {},
  build: {
  },
  server: {     
    port: 8000,
    host: '0.0.0.0',  
  }
}
