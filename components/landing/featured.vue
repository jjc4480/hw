<script setup lang="ts">
import { Scrollbar } from "swiper"
import { useUiStore } from "~/stores/ui"

const store = useUiStore()

const slideList = [
  // 슬라이드 아이템
  // { title: 'LG Display - South Korea', src: 'https://placehold.co/1920x1080' },
  // { title: 'LG Display - Vietnam', src: 'https://placehold.co/1440x900' },
  // { title: 'LG Innotek - South Korea', src: 'https://placehold.co/1280x1024' },
  // { title: 'SK Hynix - South Korea', src: 'https://placehold.co/1024x768' },
  // { title: 'LG Display - South Korea', src: 'https://placehold.co/1920x1080' },
  // { title: 'LG Display - Vietnam', src: 'https://placehold.co/1440x900' },
  // { title: 'LG Innotek - South Korea', src: 'https://placehold.co/1280x1024' },
  // { title: 'SK Hynix - South Korea', src: 'https://placehold.co/1024x768' },
  // 여기부터 진짜 나와야 하는 Items들. 해외 우선, 이후 최근년도순
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
    title: "LG Household & Health Care",
    src: "/img/featured_2.png",
    content:
      "<span>Classification: EPC</span> <span>Location: Buyeo, South Korea</span> <span>Construction Period: 2018~2020</span>",
  },
  {
    title: "LG Household & Health Care",
    src: "/img/featured_3.png",
    content:
      "<span>Classification: EPC</span> <span>Location: Cheongju, South Korea</span> <span>Construction Period: 2017~2020</span>",
  },
  {
    title: "LG Display - M2 Project",
    src: "/img/featured_8.jpg",
    content:
      "<span>Classification: EPC</span> <span>Location: Paju, South Korea</span> <span>Construction Period: 2013, 2016~2017</span>",
  },
  {
    title: "LG Innotek",
    src: "/img/featured_5.jpg",
    content:
      "<span>Classification: EPC</span> <span>Location: Gumi, South Korea</span> <span>Construction Period: 2012~2014</span>",
  },
  {
    title: "LG Display - CAPA UP Project",
    src: "/img/featured_7.jpg",
    content:
      "<span>Classification: EPC</span> <span>Location: Gumi, South Korea</span> <span>Construction Period: 2012~2013</span>",
  },
  {
    title: "LG Display - M5 Project",
    src: "/img/featured_6.jpg",
    content:
      "<span>Classification: EPC</span> <span>Location: Gumi, South Korea</span> <span>Construction Period: 2011~2012</span>",
  },
]
</script>

<template>
  <div
    class="pages-fade delay-75"
    :class="
      store.landing.scrollIndex == 1 ? 'pages-fade-done' : 'pages-fade-top'
    "
  >
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
    <div class="container 2xl:px-0 px-5 mt-2 mx-auto relative">
      <!-- <fieldset class="flex gap-10 absolute -top-36 2xl:right-0 right-5">
        <button
          class="featured-swiper-prev group"
          type="button"
        >
          <svg
            class="w-8 h-8 fill-black group-disabled:fill-gray-400"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
          >
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
        </button>
        <button
          class="featured-swiper-next group"
          type="button"
        >
          <svg
            class="w-8 h-8 fill-black group-disabled:fill-gray-400"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
          >
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </button>
      </fieldset> -->
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
            class="block h-full group transition-all duration-500 ease-in-out"
            href="/projects/portfolio"
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
          </NuxtLink>
        </SwiperSlide>
        <div class="swiper-scrollbar" />
      </Swiper>
    </div>
  </div>
</template>
