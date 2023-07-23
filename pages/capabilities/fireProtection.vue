<script setup lang="ts">
import { Scrollbar } from "swiper"

const slideList = [
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_1.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_2.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_3.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/fireProtection/feature_4.jpg",
    content:
      "test",
  },
]
</script>

<template>
  <div>
    <h2 class="my-20 text-6xl text-center">Fire Protection</h2>
    <div
      class="py-56 bg-fixed bg-center bg-cover capabilities-fireProtection"
    ></div>
    <section class="container mx-auto pt-[20vh]">
      <h2
        class="text-4xl font-black leading-snug text-black 2xl:px-0 2xl:text-6xl"
      >
        Fire Protection
      </h2>
      <p
        class="px-5 mt-12 text-lg leading-tight text-black 2xl:px-0 2xl:text-2xl"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores officiis quidem atque ipsam iusto porro eveniet esse laudantium dicta rerum, a consequatur quaerat veritatis, quisquam, maiores deserunt necessitatibus veniam.
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
        <SwiperSlide v-for="slide in slideList" class="h-auto mb-10">
          <a
            class="block h-full transition-all duration-500 ease-in-out group"
            href="#"
          >
            <figure class="flex flex-col h-full overflow-hidden">
              <img
                class="object-fill h-full transition-all duration-500 ease-in-out group-hover:transform group-hover:scale-105"
                :src="slide.src"
              />
              <figcaption
                class="flex items-end flex-auto py-8 pl-4 transition-all duration-500 ease-in-out border-gray-700 group-hover:bg-gray-700 group-hover:text-white"
              >
                <div class="flex flex-col items-start space-y-8">
                  <div class="text-xl">{{ slide.title }}</div>
                  <div class="project_content" v-html="slide.content"></div>
                </div>
              </figcaption>
            </figure>
          </a>
        </SwiperSlide>
        <div class="swiper-scrollbar" />
      </Swiper>
    </div>
  </div>
</template>
