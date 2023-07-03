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
    title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sit
          provident cum sint fugit laudantium ipsum nihil voluptatum sunt,
          expedita ipsam deserunt laboriosam nemo magnam quisquam nostrum
          obcaecati a cupiditate!`,
    imageSrc: "asdf",
  },
  {
    title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sit
          provident cum sint fugit laudantium ipsum nihil voluptatum sunt,
          expedita ipsam deserunt laboriosam nemo magnam quisquam nostrum
          obcaecati a cupiditate!`,
    imageSrc: "asdf",
  },
  {
    title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sit
          provident cum sint fugit laudantium ipsum nihil voluptatum sunt,
          expedita ipsam deserunt laboriosam nemo magnam quisquam nostrum
          obcaecati a cupiditate!`,
    imageSrc: "asdf",
  },
  {
    title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sit
          provident cum sint fugit laudantium ipsum nihil voluptatum sunt,
          expedita ipsam deserunt laboriosam nemo magnam quisquam nostrum
          obcaecati a cupiditate!`,
    imageSrc: "asdf",
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
      class="container mb-20 grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-5"
    >
      <li
        class="group items-center 3xl:mx-auto mx-10 h-auto pt-10 bg-white hover:bg-gray-700 hover:text-white transition-colors duration-500 ease-in-out"
        v-for="news in newsList"
      >
        <div class="text-xl h-1/2 font-semibold p-10">
          <p class="line-clamp-5 sm:line-clamp-3">
            {{ news.title }}
          </p>
        </div>
        <div class="w-full h-1/2 overflow-hidden">
          <img
            class="w-full h-full group-hover:transform group-hover:scale-110 transition-all duration-500 ease-in-out"
            src="/img/hunters-race-MYbhN8KaaEc-unsplash.jpg"
            alt=""
          />
        </div>
      </li>
    </ul>
  </div>
</template>
