<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi'
import { useRoute } from 'nuxt/app'
import type { NavTitle } from '@/types/nav'

const props = defineProps({
  label: {
    type: String as PropType<NavTitle>,
    required: true
  },
})

const pathList = useNavFinder(props.label) // path 리스트
const pathStart = props.label.toLowerCase() // 라우트 시작점

const route = useRoute() // 라우트 감지용
</script>

<template>
  <div>
    <div class="flex flex-col w-full h-[60vh] items-center"
      :class="`${pathStart}-navigation`"
    >
      <section class="flex flex-auto items-center">
        <h2
          class="text-6xl text-white font-black"
        >{{ label }}</h2>
      </section>
      <div class="flex w-[95vw] ml-auto gap-20 justify-center relative bg-hw/70">
        <nav class="flex mx-auto pr-[5vw] gap-20">
          <a
            v-for="list in pathList"
            class="block w-52 py-10 text-2xl text-gray-400 text-center relative hover:text-white duration-300
                  before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out before:transform before:scale-x-0 hover:before:scale-x-100"
            :class="{'active': route.path == `/${pathStart}/${list.path}`}"
            :href="`/${pathStart}/${list.path}`"
          >
            {{ list.name }}
            <span
              class="w-0 h-0 absolute top-1 left-2/4 -translate-x-1/2
                        border-l-8 border-l-transparent
                        border-t-8 border-b-white
                        border-r-8 border-r-transparent">
            </span>
          </a>
        </nav>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>