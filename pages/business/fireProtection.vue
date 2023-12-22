<script setup lang="ts">
import { Scrollbar } from "swiper"

const slideList = [
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_1.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_2.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_3.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_4.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_5.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_6.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_7.png",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_8.png",
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
