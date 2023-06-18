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
      <figure class="flex gap-20 pb-10">
        <div class="flex w-full flex-col h-fit my-auto space-y-20 items-center">
          <img class="w-4/5 flex" src="/img/logo_header_large_b.png" />
          <img class="w-4/5 flex" src="/img/logo_header_b.png" />
        </div>
        <figcaption>
          <h3 class="text-4xl font-bold">
            This is HYUNGWON BI with a firm philosophy and modern sensibility.
          </h3>
          <p class="mt-20 text-2xl">
            H, which expresses the shape of the chain, expresses technical
            firmness and completeness. At the same time, it's about being safe,
            trusting with customers, and continuing strong and lasting
            relationships. <br />
            <br />The color combination of Light Sea Green and Midnight Blue is
            a brand image that can show customers trust, confidence, stability
            and integrity.
          </p>
        </figcaption>
      </figure>

      <div class="grid grid-cols-5 pt-10 border-t-4 border-black">
        <div class="flex items-center justify-center space-x-4">
          <div
            class="rounded-[50%] border-cyan-600 w-20 border-[6px] h-20"
          ></div>
          <div class="flex flex-col">
            <span class="flex">HW Light Sea Green</span>
            <span class="flex">pantone 320C</span>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-4">
          <div class="rounded-[50%] border-hw w-20 border-[6px] h-20"></div>
          <div class="flex flex-col">
            <span class="flex">HW Teal</span>
            <span class="flex">pantone 321C</span>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-4">
          <div
            class="rounded-[50%] border-blue-900 w-20 border-[6px] h-20"
          ></div>
          <div class="flex flex-col">
            <span class="flex">HW Midnight Blue</span>
            <span class="flex">pantone 7694C</span>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-4">
          <div class="rounded-[50%] border-black w-20 border-[6px] h-20"></div>
          <div class="flex flex-col">
            <span class="flex">HW Black</span>
            <span class="flex">pantone Black C</span>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-4">
          <div
            class="rounded-[50%] border-gray-900 w-20 border-[6px] h-20"
          ></div>
          <div class="flex flex-col">
            <span class="flex">HW Dark Gray</span>
            <span class="flex">pantone 446C</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
