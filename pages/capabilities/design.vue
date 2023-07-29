<script setup lang="ts">
import { Scrollbar } from "swiper"

const slideList = [
  {
    title: "test",
    src: "/capabilities/design/feature_1.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/design/feature_2.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/design/feature_3.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/design/feature_4.jpg",
    content:
      "test",
  }
]
</script>

<template>
  <div>
    <h2 class="my-20 text-6xl text-center">Design</h2>
    <div
      class="py-56 bg-fixed bg-center bg-cover capabilities-design"
    ></div>
    <section class="container mx-auto pt-[20vh]">
      <h2
        class="text-4xl font-black leading-snug text-black 2xl:px-0 2xl:text-6xl"
      >
        Design
      </h2>
      <p
        class="px-5 mt-12 text-lg leading-tight text-black 2xl:px-0 2xl:text-2xl"
      >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus voluptatem voluptas laboriosam ut incidunt voluptate velit vel vitae suscipit aut cum iure, ullam libero tenetur fugit fugiat quos quibusdam.
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
          <NuxtLink
            class="block h-full transition-all duration-500 ease-in-out group"
            href="#"
          >
            <figure class="flex flex-col h-full overflow-hidden">
              <img
                class="object-fill h-full transition-all duration-500 ease-in-out group-hover:transform group-hover:scale-105"
                :src="slide.src"
              />
              <figcaption
                class="flex items-end flex-auto py-16 pl-4 transition-all duration-500 ease-in-out border-gray-700 group-hover:bg-gray-700 group-hover:text-white"
              >
                <div class="flex flex-col items-start space-y-10">
                  <div class="text-xl">{{ slide.title }}</div>
                  <div class="project_content" v-html="slide.content"></div>
                </div>
              </figcaption>
            </figure>
          </NuxtLink>
        </SwiperSlide>
        <div class="swiper-scrollbar" />
      </Swiper>

      <iframe class="w-full h-[50rem]" src="https://www.youtube.com/embed/YK_r9hCSjh0?controls=0" title="hyoungwon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</template>
