<script setup lang="ts">
import { useUiStore } from '@/stores/ui'

defineProps({
  color: { // white면 header의 nav를 흰색으로 아니면 검은색으로
    type: String,
    default: 'white'
  },
})

const pathList = useNav() // nav의 path 리스트
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
        v-for="(list, key) in pathList"
        :key="key"
      >
        <a
          class="block pb-12 px-8 text-2xl font-bold duration-300"
          :class="[color == 'white' ? 'text-white hover:text-black' : 'text-black hover:text-white']"
          :href="`/${useLowcase(key)}/${list[0].path}`"
        >
          {{ key }}
        </a>
        <ul
          class="gnb-list grid text-center"
          :class="store.header.nav ? 'opacity-100' : 'opacity-0'"
        >
          <li
            v-for="child in list"
            :key="child.name"
          >
            <a
              class="block py-1 hover:font-block"
              :class="[color == 'white' ? 'text-white hover:text-black' : 'text-black hover:text-white']"
              :href="`/${useLowcase(key)}/${child.path}`"
            >
              {{ child.name }}
            </a>
          </li>
        </ul>
      </nav>
    </section>
    <button
      class="nav-icon w-8 h-11 rotate-0 relative duration-500 cursor-pointer"
      @click="store.siteMap = true"
    >
      <div
        class="w-full top-0"
        :class="[color == 'white' ? 'bg-white' : 'bg-black']"
      ></div>
      <div
        class="w-4/6 top-3"
        :class="[color == 'white' ? 'bg-white' : 'bg-black']"
      ></div>
      <div
        class="w-full top-6"
        :class="[color == 'white' ? 'bg-white' : 'bg-black']"
      ></div>
    </button>
  </div>
</template>