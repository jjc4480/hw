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
  <section
    class="mt-8"
    @mouseover="store.navToggle({open: true})"
    @mouseleave="store.navToggle({open: false})"
  >
    <nav
      v-for="(list, title) in pathList"
    >
      <NuxtLink
        class="block pb-12 px-8 text-2xl font-bold duration-300 text-white hover:text-black"
        href="/test"
      >
        {{ title }}
      </NuxtLink>
      <ul
        class="gnb-list grid text-center"
        :class="store.nav ? 'opacity-100' : 'opacity-0'"
      >
        <li
          v-for="path in list"
        >
          <NuxtLink
            class="block py-1 text-white hover:text-black hover:font-block"
            href="/test"
          >
            {{ path }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </section>
</template>