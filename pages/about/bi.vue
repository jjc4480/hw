<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})
const infomation = ref() // 소개영역
</script>

<template>
  <div class="container mx-auto py-20 justify-center overflow-hidden">
    <section
      ref="infomation"
      class="pages-fade mt-20"
      :class="
        infomation?.offsetTop < scrollTrigger
          ? 'pages-fade-done'
          : 'pages-fade-bottom'
      "
    >
      <h2 class="text-6xl mb-20 text-left text-hw font-extrabold">
        Brand Identity
      </h2>
      <figure class="flex flex-col xl:flex-row gap-20 pb-16">
        <div class="flex w-full flex-col h-fit my-auto space-y-20 items-center">
          <img class="w-3/5 flex" src="/img/logo_header_large_b.png" />
          <img class="w-3/5 flex" src="/img/logo_header_b.png" />
        </div>
        <figcaption class="xl:border-l-2 xl:pl-20 xl:border-black">
          <h3 class="text-4xl font-bold">
            확고한 철학과 모던한 감성의 형원 BI 입니다.
          </h3>
          <p class="mt-12 text-2xl">
            체인 모양을 표현한 H는 기술적인 단단함과 완성도를 표현합니다. 동시에 안전함, 고객과의 신뢰 그리고 강인하며 지속적인 관계를 이어가겠다는 의미를 담고 있습니다.<br />
            <br />
            Light Sea Green과 Midnight Blue의 색상 조합은 고객들에게 신뢰, 확신, 안정감 그리고 진실성을 보여줄 수 있는 브랜드 이미지입니다.
          </p>
        </figcaption>
      </figure>

      <div class="grid grid-cols-2 xl:grid-cols-5 pt-16 border-t-2 border-black gap-5 ">
        <div class="flex items-center xl:justify-center justify-stretch w-full lg:w-1/2 xl:w-full mx-auto  ">
          <div
            class="rounded-[50%] border-[#009CA6] w-20 border-[10px] h-20"
          ></div>
          <div class="flex flex-col ml-4 text-left">
            <span class="flex">HW Light Sea Green</span>
            <span class="flex">pantone 320C</span>
          </div>
        </div>
        <div class="flex items-center xl:justify-center justify-stretch w-full lg:w-1/2 xl:w-full mx-auto  ">
          <div
            class="rounded-[50%] border-[#008C95] w-20 border-[10px] h-20"
          ></div>
          <div class="flex flex-col ml-4 text-left">
            <span class="flex">HW Teal</span>
            <span class="flex">pantone 321C</span>
          </div>
        </div>
        <div class="flex items-center xl:justify-center justify-stretch w-full lg:w-1/2 xl:w-full mx-auto  ">
          <div
            class="rounded-[50%] border-[#10446D] w-20 border-[10px] h-20"
          ></div>
          <div class="flex flex-col ml-4 text-left">
            <span class="flex">HW Midnight Blue</span>
            <span class="flex">pantone 7694C</span>
          </div>
        </div>
        <div class="flex items-center xl:justify-center justify-stretch w-full lg:w-1/2 xl:w-full mx-auto  ">
          <div
            class="rounded-[50%] border-[#2D2926] w-20 border-[10px] h-20"
          ></div>
          <div class="flex flex-col ml-4 text-left">
            <span class="flex">HW Black</span>
            <span class="flex">pantone Black C</span>
          </div>
        </div>
        <div class="flex items-center xl:justify-center justify-stretch w-full lg:w-1/2 xl:w-full mx-auto  ">
          <div
            class="rounded-[50%] border-[#3F4444] w-20 border-[10px] h-20"
          ></div>
          <div class="flex flex-col ml-4 text-left">
            <span class="flex">HW Dark Gray</span>
            <span class="flex">pantone 446C</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
