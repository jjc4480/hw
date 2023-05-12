<script setup lang="ts">
const slideList = [ // 슬라이드 아이템
  { title: 'ISO 14001', src: 'https://placehold.co/1920x1080' },
  { title: 'ISO 9001', src: 'https://placehold.co/1440x900' },
  { title: 'ISO 45001', src: 'https://placehold.co/1280x1024' },
  { title: 'ISO 14001', src: 'https://placehold.co/1920x1080' },
  { title: 'ISO 9001', src: 'https://placehold.co/1440x900' },
  { title: 'ISO 45001', src: 'https://placehold.co/1280x1024' },
]

</script>

<template>
  <div>
    <section
      class="container mx-auto pt-[20vh]"
    >
      <h2
        class="2xl:px-0 px-5 2xl:text-6xl text-4xl text-black font-black leading-snug"
      >Commitments</h2>
      <p
        class="2xl:px-0 px-5 mt-12 2xl:text-2xl text-lg text-black leading-tight"
      >Environmental, Quality, Safety 어쩌구 저쩌구~~~ 2줄 정도로 설명~~~
      대신, 국내 ISO 인증이기에 이 부분이 우려가 된다면, 그냥 Safety, Quality, Environmental 에 대해서 작성. IMPESS 참고. </p>
    </section>
    <div
      class="container 2xl:px-0 px-5 mt-48 mx-auto relative"
    >
      <fieldset class="flex gap-10 absolute -top-36 right-0">
        <button
          class="commitments-swiper-prev group"
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
          class="commitments-swiper-next group"
          type="button"
        >
          <svg
            class="w-8 h-8 fill-black group-disabled:fill-gray-400"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
          >
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </button>
      </fieldset>
      <Swiper
        class="commitments-swiper"
        :setWrapperSize="true"
        :slidesPerView="4"
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
          nextEl: '.commitments-swiper-next',
          prevEl: '.commitments-swiper-prev',
        }"
        :modules="[SwiperAutoplay, SwiperNavigation]"
      >
        <SwiperSlide
          v-for="slide in slideList"
          class="h-auto"
        >
          <NuxtLink
            class="block h-full group transition-all duration-500 ease-in-out"
            href="/"
          >
            <figure
              class="flex flex-col h-full overflow-hidden"
            >
              <img
                class="object-cover group-hover:transform group-hover:scale-105 transition-all duration-500 ease-in-out"
                :src="slide.src"
              />
              <figcaption
                class="flex flex-auto p-3 text-2xl items-end justify-center border-b-2 border-gray-700 group-hover:bg-gray-700 group-hover:text-white transition-all duration-500 ease-in-out"
              >{{ slide.title }}</figcaption>
            </figure>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>