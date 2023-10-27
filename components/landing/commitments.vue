<script setup lang="ts">
import { Scrollbar } from "swiper"
import { useUiStore } from "~/stores/ui"

const store = useUiStore()

const slideList = useNews();
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
    <div class="container 2xl:px-0 px-5 mt-40 mx-auto relative">
      <Swiper
        class="commitments-swiper"
        :setWrapperSize="true"
        :slidesPerView="1"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '320': {
            slidesPerView: 1,
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
          nextEl: '.commitments-swiper-next',
          prevEl: '.commitments-swiper-prev',
        }"
        :modules="[SwiperAutoplay, SwiperNavigation, Scrollbar]"
      >
        <SwiperSlide v-for="news in slideList" class="items-center group w-full bg-transparent hover:bg-gray-700 hover:text-white transition-colors duration-500 ease-in-out" >
          <a
            :href="news.src"
            class="relative px-10 pt-10 pb-0 h-[30rem] flex overflow-hidden"
          >
          <figure>
            <div class="absolute bottom-0 right-0 left-0 w-full h-3/5">
              <img
              class="absolute w-full h-full bottom-0 left-0 object-cover group-hover:transform group-hover:scale-110 transition-all duration-500 ease-in-out"
              :src="news.imageSrc"
              alt="hyoungwon news"
              />
            </div>
            <figcaption class="text-lg h-1/2 font-semibold">
              <p class="line-clamp-5 min-h-full sm:line-clamp-2">
                {{ news.title }}
              </p>
            </figcaption>
          </figure>
        </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
