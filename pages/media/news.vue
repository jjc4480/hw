<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})

const article = ref() // 이미지 영역

const newsList = [
  {
    title: `반도체, 디스플레이 기계/소방 설비 전문 건설기업 형원이엔지 김정환 대표`,
    imageSrc: "/media/news1.jpg",
    src: "http://www.yhtoday.co.kr/news/articleView.html?idxno=18157&fbclid=IwAR2xMQDW-WGBkbPmXYzFRs8etnm6N29TzlaFbIpTKH_L_gF2VqqaL5PpTzc",
  },
  {
    title: `형원이엔지, 美 진출...“韓 반도체·디스플레이 시공 공략”`,
    imageSrc: "/media/news2.jpg",
    src: "https://www.etnews.com/20230703000266",
  },
]
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
    <div class="container mx-auto py-20 flex justify-center max-w-3xl">
      <input
        type="search"
        class="border-b-2 w-3/4 h-14"
        placeholder="검색어를 입력해주세요"
      />
      <button class="border-b-2 px-2" type="submit">
        <svg
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.755 14.255h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23 6.5 6.5 0 1 0-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5Zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5Z"
          ></path>
        </svg>
      </button>
    </div>

    <ul
      class="container mb-20 grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5"
    >
      <li
        class="items-center group w-full bg-white hover:bg-gray-700 hover:text-white transition-colors duration-500 ease-in-out"
        v-for="news in newsList"
      >
        <a
          :href="news.src"
          class="relative px-10 pt-10 pb-0 h-96 flex overflow-hidden"
        >
          <div class="text-lg h-1/2 font-semibold">
            <p class="line-clamp-5 min-h-full sm:line-clamp-2">
              {{ news.title }}
            </p>
          </div>
          <div class="absolute bottom-0 right-0 left-0 w-full h-1/2">
            <img
              class="absolute w-full h-full bottom-0 left-0 object-cover group-hover:transform group-hover:scale-110 transition-all duration-500 ease-in-out"
              :src="news.imageSrc"
              alt="hyoungwon news"
            />
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
