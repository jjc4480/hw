<script setup lang="ts">
import { useUiStore } from '@/stores/ui'
import SiteMap from '@/components/header/sitemap.vue'

const store = useUiStore() // ui store
</script>
<template>
  <div class="flex min-h-screen flex-col">
    <LayoutHeader />
    <NuxtPage />
    <LayoutFooter
      class="mt-auto"
    />
    <SiteMap></SiteMap>
    <Transition name="app-bg">
      <div
        v-show="store.header.nav"
        class="w-full h-screen fixed top-0 left-0 z-10 bg-black opacity-50"
      ></div>
    </Transition>
  </div>
</template>
