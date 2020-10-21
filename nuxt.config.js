export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Anyrep Appliance Repairs Norwich | Book online for next day',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Book online with Anyrep today for same or next day appliance repairs Norfolk! Over 25 years experience, guaranteed repairs with no hidden costs.' },
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
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/pwa'

  ],
  robots: {
    UserAgent: '*'

  },
  sitemap: {
    hostname: 'https://anyrep.co.uk',
    gzip: true,

  },
  pwa: { 
    workbox: true,
    icon: {
      fileName: 'icon.png'
    },
    meta: { 
      name: 'Anyrep',
      theme_color: '#090815', 
      author: 'William Yallop',
      lang: 'en', 
      nativeUI: true,
      description: "Book appliance repairs online with Anyrep!",
    }, 
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
