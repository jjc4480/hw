<script setup lang="ts">
import { Scrollbar } from "swiper"

const slideList = [
  {
    title: "1",
    src: "/capabilities/pipeline/1.png",
    content:
      "test",
  },
  {
    title: "2",
    src: "/capabilities/pipeline/2.png",
    content:
      "test",
  },
  {
    title: "3",
    src: "/capabilities/pipeline/3.png",
    content:
      "test",
  },
  {
    title: "4",
    src: "/capabilities/pipeline/4.png",
    content:
      "test",
  },
  {
    title: "5",
    src: "/capabilities/pipeline/5.png",
    content:
      "test",
  },
  {
    title: "6",
    src: "/capabilities/pipeline/6.png",
    content:
      "test",
  },
  {
    title: "7",
    src: "/capabilities/pipeline/7.png",
    content:
      "test",
  },
  {
    title: "8",
    src: "/capabilities/pipeline/8.png",
    content:
      "test",
  },
  
]
</script>

<template>
  <div class="container mx-auto">
    <h2 class="my-20 text-6xl font-black text-center">EPC</h2>
    <section>
      <p
        class="px-5 mt-12 text-lg leading-tight text-black 2xl:px-0 2xl:text-2xl text-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis porro, nulla illo mollitia nostrum vero, rerum sed, provident quas nobis deleniti illum corrupti reprehenderit neque id explicabo laborum a
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
