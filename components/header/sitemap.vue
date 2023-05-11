<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUiStore } from '@/stores/ui'
const pathList = useNavPath() // nav의 path 리스트
const store = useUiStore() // ui store

const { siteMap } = storeToRefs(store)

const animation = ref(false) // 애니메이션 구현용

watch(siteMap, (n, o) => {
  if (o == true && n == false) {
    // 켜졌다 꺼질때만
    animation.value = true
    setTimeout(() => {
      animation.value = false
    }, 1500)
  }
})
</script>

<template>
  <div class="sitemap flex w-screen h-screen items-center justify-center fixed duration-500"
    :class="{
      'open': store.siteMap,
      'animate': animation
    }"
  >
    <div class="container mx-auto">
      <section
        class="flex items-center justify-between"
      >
        <h1 class="text-7xl font-black text-white overflow-hidden">
          <span class="block">SITEMAP</span>
        </h1>
        <button
          class="flex w-10 h-10 items-center justify-center bg-white rounded-full group"
          type="button"
          @click="store.siteMapToggle({open: false})"
        >
          <svg
            class="w-4 h-4 group-hover:rotate-180 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </button>
      </section>

      <div
        class="flex lg:flex-row flex-col mt-20 items-stretch justify-between"
      >
        <article
          class="w-full px-5 lg:py-0 py-2 lg:first:border-l lg:border-r lg:border-b-0 border-b border-gray-400/50"
          v-for="(list, title) in pathList"
        >
          <h2
            class="text-white text-3xl font-bold overflow-hidden"
          >
            <span class="block">{{ title }}</span>
          </h2>
          <ul
            class="lg:mt-20 mt-5 text-white hover:text-gray-400/50"
          >
            <li
              class="overflow-hidden"
              v-for="path in list"
            >
              <NuxtLink
                class="block py-3 hover:text-white hover:font-block duration-300"
                href="/test"
              >
                {{ path }}
              </NuxtLink>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</template>