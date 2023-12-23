<script setup lang="ts">
import { Scrollbar } from "swiper"

const slideList = [
  {
    title: "test",
    src: "/capabilities/fireProtection/1.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/2.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/3.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/4.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/5.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/6.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/7.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/8.png",
    content:
      "test",
  },
]
</script>

<template>
  <div class="container mx-auto">
    <h2 class="my-20 text-6xl font-black text-center">소방설비 사업부​</h2>
    <section>
      <p
        class="px-5 mt-12 text-lg leading-tight text-black 2xl:px-0 2xl:text-2xl text-center"
      >
        반도체, 디스플레이 및 전지산업 분야 Clean room 소방 설비 설계 및 시공분야를 수행하고 있으며 Clean room에 최적화된 소방설비 구축을 제공합니다.​
      </p>
    </section>
    <div class="container relative px-5 mx-auto mt-2 mb-16 2xl:px-0">
      <ul
        class="container my-20 grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-52 sm:gap-y-32 "
      >
        <li
          class="items-center group w-full bg-white transition-colors duration-500 ease-in-out"
          v-for="item in slideList"
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
            <span class="text-2xl pr-4 w-full text-center">
              {{ item.content }}
            </span>
          </div>
        </div>
        </li>
      </ul>
    </div>
  </div>
</template>
