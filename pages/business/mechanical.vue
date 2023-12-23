<script setup lang="ts">
import { Scrollbar } from "swiper"

const hitechList = [
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/1.png",
    content:
      "description",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/2.png",
    content:
      "description",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/3.png",
    content:
      "description",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/4.png",
    content:
      "description",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/5.png",
    content:
      "description",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/6.png",
    content:
      "description",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/7.png",
    content:
      "description",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/8.png",
    content:
      "description",
  },
]


const designList = [
  {
    title: "test",
    src: "/capabilities/design/1.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/design/2.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/design/3.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/design/4.jpg",
    content:
      "test",
  },
]

</script>

<template>
  <div class="container mx-auto">
    <h2 class="my-20 font-black text-6xl text-center">하이테크 사업부​</h2>
    <section>
      <p
        class="px-5 mt-12 text-lg leading-tight text-black 2xl:px-0 2xl:text-2xl text-center"
      >
        반도체, 디스플레이 및 바이오산업 분야에 있어서 고순도, Toxic, Chemical 배관 및 Utility System 의 설계 및 시공분야를 수행하고 있으며 Clean Room 공사에 있어 가장 경제적인 토탈 솔루션을 제공합니다.​
      </p>
      <div class="relative px-5 mt-2 mb-16 2xl:px-0">
        <ul
        class="container my-20 grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-52 sm:gap-y-32 "
      >
        <li
          class="items-center group w-full bg-white transition-colors duration-500 ease-in-out"
          v-for="item in hitechList"
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
    </section>

    <hr class="border-t-2 border-gray-300 my-24" />

    <section class="container mx-auto mb-24">
      <ul
        class="container my-20 grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-52 sm:gap-y-32 "
      >
        <li
          class="items-center group w-full bg-white transition-colors duration-500 ease-in-out"
          v-for="item in designList"
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
      <iframe class="w-full h-[50rem]" src="https://www.youtube.com/embed/YK_r9hCSjh0?controls=0" title="hyoungwon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
</div>
</template>
