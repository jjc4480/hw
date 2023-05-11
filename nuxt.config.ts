export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
  ],
  css: [
    '@/assets/css/app.css',
  ],
  auth: {
    enableGlobalAppMiddleware: true,
  },
  tailwindcss: {
    cssPath: false,
  }
})