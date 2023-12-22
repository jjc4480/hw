<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})

const projects = useProjects();

const title = ref() // 임시용
const content = ref() // 임시용

</script>

<template>
  <div class="container justify-center pt-20 mx-auto  overflow-hidden">
    <section
      ref="title"
      class="mt-20 pages-fade"
      :class="
        title?.offsetTop < scrollTrigger ? 'pages-fade-done' : 'pages-fade-top'
      "
    >
      <h2 class="mb-20 text-6xl text-center font-black">포트폴리오</h2>
    </section>
  </div>
  <div
    class="container justify-center items-center gap-20 pb-20 mx-auto overflow-hidden"
  >
    <section
      ref="content"
      class="mt-20 text-2xl w-full pages-fade"
      :class="
        content?.offsetTop < scrollTrigger
          ? 'pages-fade-done'
          : 'pages-fade-left'
      "
    >
      <ul
        class="container my-20 grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-52 sm:gap-y-32 "
      >
        <li
          class="items-center group w-full bg-white transition-colors duration-500 ease-in-out"
          v-for="item in projects"
        >
        <div  class="relative px-10 pt-10 pb-0 h-96 flex overflow-hidden">
          <div class="absolute top-0 right-0 left-0 w-full h-3/4 overflow-hidden">
            <img
            class="absolute w-full h-full bottom-0 left-0 object-cover group-hover:transform group-hover:scale-110 transition-all duration-500 ease-in-out"
            :src="item.src"
            alt="hyoungwon portfolio"
            />
          </div>
          <div class="text-lg absolute z-2 flex w-full justify-between items-center px-10 bottom-0 left-0 h-1/5 font-semibold">
            <span class="text-2xl pr-4">
              {{ item.title }}
            </span>
            <span class="font-medium text-sm whitespace-pre text-yellow-800 capitalize">
              {{ item.koStatus }}
            </span>
          </div>
        </div>
        </li>
      </ul>
    </section>
  </div>
</template>
