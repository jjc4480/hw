<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})

const data = {
  ongoing: {
    title: 'ongoing',
    datas: [
      {
        title: 'ongoing title',
        imageSrc: '/img/mission.jpg',
      },
    ],
  },
  complete: {
    title: 'complete',
    datas: [
      {
        title: 'complete title',
        imageSrc: '/img/mission.jpg',
      },
    ],
  },
} as any

const title = ref() // 임시용
const content = ref() // 임시용
const currentTab = ref(data.ongoing) // 선택될 박스

const handleClick = (event: MouseEvent) => {
  const target = event.target as HTMLButtonElement
  currentTab.value = data[target.value]
}
</script>

<template>
  <div class="container justify-center py-20 mx-auto  overflow-hidden">
    <section
      ref="title"
      class="mt-20 pages-fade"
      :class="
        title?.offsetTop < scrollTrigger ? 'pages-fade-done' : 'pages-fade-top'
      "
    >
      <h2 class="mb-20 text-6xl text-center">portfolio</h2>
    </section>
  </div>
  <div class="py-56 bg-fixed bg-center bg-cover project-portfolio-image"></div>
  <div
    class="container justify-center items-center gap-20 py-20 mx-auto overflow-hidden"
  >
    <ul class="flex w-full items-center justify-center">
      <li>
        <button
          @click="handleClick"
          class="py-6 px-8 text-2xl"
          :class="
            currentTab.title === 'ongoing'
              ? 'bg-white border-t-2 border-t-black border'
              : 'bg-gray-300'
          "
          :value="data.ongoing.title"
        >
          {{ data.ongoing.title }}
        </button>
      </li>
      <li>
        <button
          @click="handleClick"
          class="py-6 px-8 text-2xl"
          :class="
            currentTab.title !== 'ongoing'
              ? 'bg-white border-t-2 border-t-black border'
              : 'bg-gray-300'
          "
          :value="data.complete.title"
        >
          {{ data.complete.title }}
        </button>
      </li>
    </ul>
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
        class="container my-20 grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5"
      >
        <li
          class="items-center group w-full bg-white transition-colors duration-500 ease-in-out"
          v-for="item in currentTab.datas"
        >
        <div  class="relative px-10 pt-10 pb-0 h-96 flex overflow-hidden">
          <div class="absolute top-0 right-0 left-0 w-full h-3/4 overflow-hidden">
            <img
            class="absolute w-full h-full bottom-0 left-0 object-cover group-hover:transform group-hover:scale-110 transition-all duration-500 ease-in-out"
            :src="item.imageSrc"
            alt="hyoungwon portfolio"
            />
          </div>
          <div class="text-lg absolute z-2 flex w-full justify-between items-center px-10 bottom-0 left-0 h-1/5 font-semibold">
            <span class="line-clamp-5 sm:line-clamp-2">
              {{ item.title }}
            </span>
            <span class="font-medium text-sm text-yellow-800">
              {{ currentTab.title }}
            </span>
          </div>
        </div>
        </li>
      </ul>
    </section>
  </div>
</template>
