<script setup lang="ts">
import { Scrollbar } from "swiper"

const slideList = [
  {
    title: "LG Display – H1,2 Project",
    src: "/img/featured_1.jpg",
    content:
      "<span>Classification: EPC</span> <span>Location: Haiphong, Vietnam</span>  <span>Construction Period: 2018~2019</span>",
  },
  {
    title: "LG Electronics",
    src: "/img/featured_4.jpg",
    content:
      "<span>Classification: EPC</span> <span>Location: Incheon, South Korea</span> <span>Construction Period: 2017~2023</span>",
  },
  {
    title: "LG Display - P8 & 9 Project",
    src: "/img/featured_9.jpg",
    content:
      "<span>Classification: EPC</span> <span>Location: Paju, South Korea</span> <span>Construction Period: 2016~2022</span>",
  },
  {
    title: "LG Display - P10 Project",
    src: "/img/featured_10.jpg",
    content:
      "<span>Classification: EPC</span> <span>Location: Paju, South Korea</span> <span>Construction Period: 2017~2021</span>",
  },
  {
    title: "LG Display - P8 & 9 Project",
    src: "/img/featured_9.jpg",
    content:
      "<span>Classification: EPC</span> <span>Location: Paju, South Korea</span> <span>Construction Period: 2016~2022</span>",
  },
  {
    title: "LG Display - P10 Project",
    src: "/img/featured_10.jpg",
    content:
      "<span>Classification: EPC</span> <span>Location: Paju, South Korea</span> <span>Construction Period: 2017~2021</span>",
  },
]
</script>

<template>
  <div>
    <h2 class="text-6xl my-20 text-center">Mechanical</h2>
    <div
      class="capabilities-mechanical py-56 bg-fixed bg-center bg-cover"
    ></div>
    <section class="container mx-auto pt-[20vh]">
      <h2
        class="2xl:px-0 2xl:text-6xl text-4xl text-black font-black leading-snug"
      >
        Featured Projects
      </h2>
      <p
        class="2xl:px-0 px-5 mt-12 2xl:text-2xl text-lg text-black leading-tight"
      >
        We have a strong connection with clients to this day, and we are
        maintaining a relationship with clients based on our honest and precise
        work.
      </p>
    </section>
    <div class="container mb-16 2xl:px-0 px-5 mt-2 mx-auto relative">
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
            class="block h-full group transition-all duration-500 ease-in-out"
            href="#"
          >
            <figure class="flex flex-col h-full overflow-hidden">
              <img
                class="object-fill group-hover:transform group-hover:scale-105 transition-all duration-500 ease-in-out"
                :src="slide.src"
              />
              <figcaption
                class="flex flex-auto py-8 items-end pl-4 border-gray-700 group-hover:bg-gray-700 group-hover:text-white transition-all duration-500 ease-in-out"
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
