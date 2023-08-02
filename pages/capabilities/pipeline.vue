<script setup lang="ts">
import { Scrollbar } from "swiper"

const slideList = [
  {
    title: "1",
    src: "/capabilities/pipeline/feature_1.jpg",
    content:
      "test",
  },
  {
    title: "2",
    src: "/capabilities/pipeline/feature_2.jpg",
    content:
      "test",
  },
  {
    title: "3",
    src: "/capabilities/pipeline/feature_3.jpg",
    content:
      "test",
  },
  {
    title: "4",
    src: "/capabilities/pipeline/feature_4.jpg",
    content:
      "test",
  },
  
]
</script>

<template>
  <div>
    <h2 class="my-20 text-6xl font-black text-center">Pipeline</h2>
    <div
      class="py-56 bg-fixed bg-center bg-cover capabilities-pipeline"
    ></div>
    <section class="container mx-auto pt-[10vh]">
      <h2
        class="text-4xl font-black leading-snug text-black 2xl:px-0 2xl:text-6xl"
      >
        Pipeline
      </h2>
      <p
        class="px-5 mt-12 text-lg leading-tight text-black 2xl:px-0 2xl:text-2xl"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis porro, nulla illo mollitia nostrum vero, rerum sed, provident quas nobis deleniti illum corrupti reprehenderit neque id explicabo laborum a
      </p>
    </section>
    <div class="container relative px-5 mx-auto mt-2 mb-16 2xl:px-0">
      <Swiper
        class="featured-swiper"
        :setWrapperSize="true"
        :slidesPerView="3"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '320': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }"
        :navigation="{
          nextEl: '.featured-swiper-next',
          prevEl: '.featured-swiper-prev',
        }"
        :modules="[SwiperAutoplay, SwiperNavigation, Scrollbar]"
        :scrollbar="{
          draggable: true,
          el: '.swiper-scrollbar',
        }"
      >
        <SwiperSlide v-for="slide in slideList" class="h-auto my-10">
          <a
            class="block h-full transition-all duration-500 ease-in-out group"
            href="#"
          >
            <figure class="flex flex-col h-full overflow-hidden">
              <img
                class="object-fill h-full transition-all duration-500 ease-in-out group-hover:transform group-hover:scale-105"
                :src="slide.src"
              />
            </figure>
          </a>
        </SwiperSlide>
        <div class="swiper-scrollbar" />
      </Swiper>
    </div>
  </div>
</template>
