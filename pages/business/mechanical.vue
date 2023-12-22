<script setup lang="ts">
import { Scrollbar } from "swiper"

const hitechList = [
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/1.png",
    content:
      "test",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/2.png",
    content:
      "test",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/3.png",
    content:
      "test",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/4.png",
    content:
      "test",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/5.png",
    content:
      "test",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/6.png",
    content:
      "test",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/7.png",
    content:
      "test",
  },
  {
    title: "Mechanical test",
    src: "/capabilities/mechanical/8.png",
    content:
      "test",
  },
]


const designList = [
  {
    title: "test",
    src: "/capabilities/design/1.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/design/2.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/design/3.jpg",
    content:
      "test",
  },
  {
    title: "test",
    src: "/capabilities/design/4.jpg",
    content:
      "test",
  },
]

</script>

<template>
  <div class="container mx-auto">
    <h2 class="my-20 font-black text-6xl text-center">하이테크 사업부​</h2>
    <section>
      <p
        class="px-5 mt-12 text-lg leading-tight text-black 2xl:px-0 2xl:text-2xl text-center"
      >
        반도체, 디스플레이 및 바이오산업 분야에 있어서 고순도, Toxic, Chemical 배관 및 Utility System 의 설계 및 시공분야를 수행하고 있으며 Clean Room 공사에 있어 가장 경제적인 토탈 솔루션을 제공합니다.​
      </p>
      <div class="relative px-5 mt-2 mb-16 2xl:px-0">
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
          <SwiperSlide v-for="slide in hitechList" class="h-auto my-10">
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
    </section>

    <hr class="border-t-2 border-gray-300 my-24" />

    <section class="container mx-auto mb-24">
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
        <SwiperSlide v-for="slide in designList" class="h-auto my-10">
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
      <div class="swiper-scrollbar"></div>
    </Swiper>
  
    <iframe class="w-full h-[50rem]" src="https://www.youtube.com/embed/YK_r9hCSjh0?controls=0" title="hyoungwon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </section>
</div>
</template>
