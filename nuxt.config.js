export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio-2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/xks4xif.css' }
    ],
    script: [
      {
        src: 'https://use.fontawesome.com/60392df943.js '
      }
    ],
    script: [
      { hid: 'script', src: 'assets/#', defer: true }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  modules: [
    'nuxt-fontawesome'
  ],


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    buildModules: [
      ['@nuxtjs/fontawesome', {
        component: 'fa',
        suffix: true,
        proIcons: { // if you have bought the Pro packages
          // list the icons you want to add, not listed icons will be tree-shaked
          solid: [
            'faHome',
            'faHeart',
            'faPhone',
          ],
          // include all icons. But dont do this.
          regular: true
        }
      }]
    ]
  
  }
}
