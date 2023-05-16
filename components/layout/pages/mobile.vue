<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import type { NavTitle } from '@/types/nav'

const props = defineProps({ // 라벨은 필수값
  label: {
    type: String as PropType<NavTitle>,
    required: true
  }
})

const pathList = useNavFinder(props.label) // path 리스트
const menuOpen = ref(false) // 메뉴 오픈여부

const route = useRoute() // 라우트 감지용

</script>

<template>
  <div class="w-full text-center relative">
    <section
      class="py-3 bg-hw/80 text-white relative"
      @click="menuOpen = !menuOpen"
    >
      <h2>About</h2>
      <svg
        class="w-5 h-5 fill-white absolute top-1/2 right-3 -translate-y-1/2"
        viewBox="0 0 16 16"
      >
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
      <!-- <svg
        class="w-5 h-5 fill-white absolute top-1/2 right-3 -translate-y-1/2"
        viewBox="0 0 16 16"
      >
        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
      </svg> -->
    </section>
    <ul
      class="grid w-full items-center text-white bg-[#8ac0c5] absolute top-19 left-0 overflow-hidden transition-all duration-300"
      :style="
        !menuOpen ?
        'height: 0' :
        `height: ${pathList.length > 0 ? 2  + (2.5 * pathList.length - 1) : ''}rem`
      "
    >
      <li>
        <a
          class="py-1 block"
          v-for="list in pathList"
          :class="{'text-hw': route.path == `/${label.toLowerCase()}/${list.path}`}"
          :href="`/${label.toLowerCase()}/${list.path}`"
        >
          {{ list.name }}
        </a>
      </li>
    </ul>
  </div>
</template>