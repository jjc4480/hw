export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
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