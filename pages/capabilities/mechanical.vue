<script setup lang="ts">
import { Scrollbar } from "swiper"

const slideList = [
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/feature_1.jpg",
    content:
      "test",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/feature_2.jpg",
    content:
      "test",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/feature_3.jpg",
    content:
      "test",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/feature_4.jpg",
    content:
      "test",
  },
]
</script>

<template>
  <div>
    <h2 class="my-20 font-black text-6xl text-center">Mechanical Engineering</h2>
    <div
      class="py-40 bg-fixed bg-center bg-cover capabilities-mechanical"
    ></div>
    <section class="container mx-auto pt-[10vh]">
      <p
        class="px-5 mt-12 text-lg leading-tight text-black 2xl:px-0 2xl:text-2xl"
      >
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus fugit, ea modi natus assumenda totam vero distinctio sed quia cumque nesciunt! Recusandae saepe molestiae possimus praesentium facere minima tempora dolorum
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
        <div class="swiper-scrollbar" ></div>
      </Swiper>
    </div>
  </div>
</template>
