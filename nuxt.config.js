export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'anyrep-home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'

  ],
  sitemap: {
    hostname: 'https://anyrep.com',
    gzip: true,

  },
  axios: {},
  build: {
  },
  server: {     
    port: 8000,
    host: '0.0.0.0',  
  }
}
