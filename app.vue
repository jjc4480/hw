<script setup lang="ts">
import SiteMap from '@/components/header/sitemap.vue'

</script>
<template>
  <div class="flex min-h-screen flex-col">
    <LayoutHeader />
    <NuxtPage />
    <LayoutFooter
      class="mt-auto"
    />
    <SiteMap></SiteMap>
  </div>
</template>
