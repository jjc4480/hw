<script setup lang="ts">
import { PropType } from 'vue'

import type { NavTitle } from '@/types/nav'

import ScrollTrigger from '@/components/scrollTrigger.vue'
import Pc from '@/components/layout/pages/pc.vue'
import Mobile from '@/components/layout/pages/mobile.vue'

defineProps({
  label: {
    type: String as PropType<NavTitle>,
    required: true
  },
})

const scrollTrigger = ref(0) // 스크롤 트리거 높이값

/**
 * @param h 트리거 높이값
 */
function updateScroll (h: number) {
  // 이벤트시 업데이트해준다
  scrollTrigger.value = h
}
</script>

<template>
  <div>
    <div class="pages-layout flex flex-col w-full h-[60vh] items-center"
      :class="`${label.toLowerCase()}-navigation`"
    >
      <section class="flex flex-auto items-center">
        <h2
          class="text-6xl text-white font-black"
        >{{ label }}</h2>
      </section>
      <Pc
        class="2xl:flex hidden"
        :label="label"
      ></Pc>
      <Mobile
        class="2xl:hidden block"
        :label="label"
      ></Mobile>
    </div>
    <ScrollTrigger
      :rate="0.6"
      @update-scroll="updateScroll"
    >
      <NuxtPage
        :scrollTrigger="scrollTrigger"
      />
    </ScrollTrigger>
    <div
      class="fixed right-0 bottom-0 z-10 "
    >
      {{scrollTrigger}}
    </div>
  </div>
</template>