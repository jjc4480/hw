<script setup lang="ts">
import { PropType } from "vue";

import type { NavTitle } from "@/types/nav";

import ScrollTrigger from "@/components/scrollTrigger.vue";
import Pc from "@/components/layout/pages/pc.vue";
import Mobile from "@/components/layout/pages/mobile.vue";

defineProps({
  label: {
    type: String as PropType<NavTitle>,
    required: true,
  },
});

let isMount = false;

const scrollTrigger = ref(0); // 스크롤 트리거 높이값

/**
 * @param h 트리거 높이값
 */
function updateScroll(h: number) {
  // 이벤트시 업데이트해준다
  scrollTrigger.value = h;
}

onMounted(() => {
  isMount = true;
});
</script>

<template>
  <div>
    <div
      class="pages-layout flex flex-col w-full h-[75vh] items-center"
      :class="`${label.toLowerCase()}-navigation`"
    >
      <section class="flex flex-auto items-center pt-24">
        <h2
          class="pages-fade text-5xl text-white font-black delay-300 duration-700"
          :class="isMount ? 'pages-fade-done' : 'pages-fade-bottom'"
        >
          {{ label }}
        </h2>
      </section>
      <Pc class="2xl:flex hidden" :label="label"></Pc>
      <Mobile class="2xl:hidden block" :label="label"></Mobile>
    </div>
    <ScrollTrigger :rate="0.6" @update-scroll="updateScroll">
      <NuxtPage :scrollTrigger="scrollTrigger" />
    </ScrollTrigger>
    <div class="fixed right-0 bottom-0 z-10">
      {{ scrollTrigger }}
    </div>
  </div>
</template>
