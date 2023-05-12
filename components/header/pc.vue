<script setup lang="ts">
import { useUiStore } from '@/stores/ui'

defineProps({
  color: {
    type: String,
    default: 'white'
  },
})

const pathList = useNavPath() // nav의 path 리스트
const store = useUiStore() // ui store

</script>
<template>
  <div
    class="flex-auto items-baseline justify-between duration-300"
  >
    <section
      class="flex mt-8"
      :class="{'opacity-0': store.landing.scrollIndex > 4}"
      @mouseover="store.headerNavToggle({open: true})"
      @mouseleave="store.headerNavToggle({open: false})"
    >
      <nav
        v-for="list in pathList"
      >
        <NuxtLink
          class="block pb-12 px-8 text-2xl font-bold duration-300"
          :class="[color == 'white' ? 'text-white hover:text-black' : 'text-black hover:text-white']"
          :href="`/${list.title.toLowerCase()}`"
        >
          {{ list.title }}
        </NuxtLink>
        <ul
          class="gnb-list grid text-center"
          :class="store.header.nav ? 'opacity-100' : 'opacity-0'"
        >
          <li
            v-for="path in list.items"
          >
            <NuxtLink
              class="block py-1 hover:font-block"
              :class="[color == 'white' ? 'text-white hover:text-black' : 'text-black hover:text-white']"
              href="/test"
            >
            <!-- TODO: 상세페이지 href -->
              {{ path }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </section>
    <button
      class="nav-icon w-14 h-11 rotate-0 relative duration-500 cursor-pointer"
      @click="store.siteMap = true"
    >
      <div class="w-full bg-white top-0"></div>
      <div class="w-4/6 bg-white top-5"></div>
      <div class="w-full bg-white top-10"></div>
    </button>
  </div>
</template>