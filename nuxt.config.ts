export default defineNuxtConfig({
  modules: [
    "@sidebase/nuxt-auth",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-swiper",
    "@fullpage/nuxt-fullpage",
  ],
  css: ["@/assets/css/app.css"],
  auth: {
    enableGlobalAppMiddleware: false,
  },
  tailwindcss: {
    cssPath: false,
  },
  runtimeConfig: {
    public: {
      fullpageKey: "LEVU6-M35JH-1FLK9-56J28-FROUN",
    },
  },
  app: {
    head: {
      titleTemplate: "%s - " + "HYOUNGWON USA",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
    },
  },
});
