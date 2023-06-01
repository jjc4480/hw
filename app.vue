<script setup lang="ts">
import { useUiStore } from "@/stores/ui"
import { useRoute } from 'nuxt/app'

const route = useRoute() // 라우트 감지용

import SiteMap from "@/components/header/sitemap.vue"

const store = useUiStore(); // ui store


onMounted(() => {
  store.app.loaded = true
})
</script>
<template>
  <div class="flex min-h-screen flex-col selection:bg-hw selection:text-white">
    <LayoutHeader v-show="store.app.loaded" />
    <NuxtPage />
    <LayoutFooter
      v-show="route.path != '/'"
      class="mt-auto"
    />
    <SiteMap v-show="store.app.loaded"></SiteMap>
    <Transition name="app-bg">
      <div
        v-show="store.header.nav"
        class="w-full h-screen fixed top-0 left-0 z-10 bg-black opacity-50"
      ></div>
    </Transition>
  </div>
</template>
