export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@fullpage/nuxt-fullpage',
  ],
  css: [
    '@/assets/css/app.css',
  ],
  auth: {
    enableGlobalAppMiddleware: false,
  },
  tailwindcss: {
    cssPath: false,
  },
  app : {
    head : {
      titleTemplate: '%s - ' + 'HYOUNGWON USA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ],
    }
  },
})