<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})

const article = ref() // 이미지 영역

const newsList = useNews() // 뉴스 리스트

</script>

<template>
  <div
    class="pages-fade container flex w-full h-full bg-white mx-auto flex-col items-center"
    :class="
      article?.offsetTop < scrollTrigger
        ? 'pages-fade-done'
        : 'pages-fade-bottom'
    "
    ref="article"
  >

    <ul
      class="container my-20 grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5"
    >
      <li
        class="items-center group w-full bg-white hover:bg-gray-700 hover:text-white transition-colors duration-500 ease-in-out"
        v-for="news in newsList"
      >
        <a
          :href="news.src"
          class="relative px-10 pt-10 pb-0 h-[34rem] flex overflow-hidden"
        >
          <figure>
            
            <div class="absolute bottom-0 right-0 left-0 w-full h-3/5">
              <img
              class="absolute w-full h-full bottom-0 left-0 object-cover group-hover:transform group-hover:scale-110 transition-all duration-500 ease-in-out"
              :src="news.imageSrc"
              alt="hyoungwon news"
              />
            </div>
            <figcaption class="text-lg h-2/5 font-semibold">
              <p class="line-clamp-5 min-h-full sm:line-clamp-2">
                {{ news.title }}
              </p>
            </figcaption>
          </figure>
        </a>
      </li>
    </ul>
  </div>
</template>
