<script setup lang="ts">
import { Scrollbar } from "swiper"
import { useUiStore } from "~/stores/ui"

const store = useUiStore()

const slideList = [
  // 슬라이드 아이템
  { title: "Quality", src: "/img/Qhse1.jpg" },
  { title: "Health & Safety", src: "/img/Qhse2.jpg" },
  { title: "Environmental", src: "/img/Qhse3.jpg" },
]
</script>

<template>
  <div
    class="pages-fade delay-75"
    :class="
      store.landing.scrollIndex == 3 ? 'pages-fade-done' : 'pages-fade-top'
    "
  >
    <section class="container mx-auto pt-[20vh]">
      <h2
        class="2xl:px-0 px-5 2xl:text-6xl text-4xl text-black font-black leading-snug"
      >
        Commitments
      </h2>
    </section>
    <div class="container 2xl:px-0 px-5 mt-48 mx-auto relative">
      <Swiper
        class="commitments-swiper"
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }"
        :navigation="{
          nextEl: '.commitments-swiper-next',
          prevEl: '.commitments-swiper-prev',
        }"
        :modules="[SwiperAutoplay, SwiperNavigation, Scrollbar]"
      >
        <SwiperSlide v-for="slide in slideList" class="h-auto mb-10">
          <a
            class="block h-full group transition-all duration-500 ease-in-out"
            href="/commitments/qhse"
          >
            <figure class="flex flex-col h-full overflow-hidden">
              <img
                class="h-full group-hover:transform group-hover:scale-105 transition-all duration-500 ease-in-out"
                :src="slide.src"
              />
              <figcaption
                class="flex flex-auto p-5 text-2xl items-end justify-center border-gray-700 group-hover:bg-gray-700 group-hover:text-white transition-all duration-500 ease-in-out"
              >
                {{ slide.title }}
              </figcaption>
            </figure>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
