<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
});
const image1 = ref(); // 이미지 영역
const image2 = ref();
const image3 = ref();
const infomation = ref(); // 소개영역
</script>

<template>
  <div>
    <div
      class="flex flex-col container items-center mx-auto py-20 gap-20 justify-center overflow-hidden"
    >
      <div class="flex gap-20">
        <!-- mobile 일 경우, 이미지가 밑으로. -->

        <section
          class="pages-fade flex flex-col w-1/2"
          :class="
            image1?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
          ref="image1"
        >
          <h3 class="mt-10 text-6xl font-black space-y-2">Quality</h3>
          <p class="mt-16 text-xl">
            Dear Colleagues and Community Partners, <br /><br />Hyoungwon Eng
            Inc. has a strong history of commitment to excellence and
            performance in <br /><br />

            Starting with the LG Display M5 Project, we have laid the strong
            foundation for the Utility System (Ultra High Purity
            Gas/Chemical/N2/CDA/PCW/P-VAC/H-VAC), P-Drain, and Exhaust Duct. By
            successfully carrying out projects in semiconductor, display,
            utility,
            <br />
          </p>
        </section>
        <figure
          class="pages-fade flex w-1/2"
          :class="
            image1?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-right'
          "
          ref="image1"
        >
          <img class="w-full object-cover" src="/img/Qhse1.jpg" />
        </figure>
      </div>
      <div class="flex gap-20">
        <!-- mobile 일 경우, 이미지가 밑으로. -->
        <figure
          class="pages-fade flex w-1/2"
          :class="
            image2?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-right'
          "
          ref="image2"
        >
          <img class="w-full object-cover" src="/img/Qhse2.jpg" />
        </figure>
        <section
          class="pages-fade flex flex-col w-1/2"
          :class="
            image2?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
          ref="image3"
        >
          <h3 class="mt-10 text-6xl font-black space-y-2">Health & Safety</h3>
          <p class="mt-16 text-xl">
            Dear Colleagues and Community Partners, <br /><br />Hyoungwon Eng
            Inc. has a strong history of commitment to excellence and
            performance in <br /><br />

            Starting with the LG Display M5 Project, we have laid the strong
            foundation for the Utility System (Ultra High Purity
            Gas/Chemical/N2/CDA/PCW/P-VAC/H-VAC), P-Drain, and Exhaust Duct. By
            successfully carrying out projects in semiconductor, display,
            utility,
            <br />
          </p>
        </section>
      </div>
      <div class="flex gap-20">
        <!-- mobile 일 경우, 이미지가 밑으로. -->

        <section
          class="pages-fade flex flex-col w-1/2"
          :class="
            image3?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
          ref="image3"
        >
          <h3 class="mt-10 text-6xl font-black space-y-2">Environmental</h3>
          <p class="mt-16 text-xl">
            Dear Colleagues and Community Partners, <br /><br />Hyoungwon Eng
            Inc. has a strong history of commitment to excellence and
            performance in <br /><br />

            Starting with the LG Display M5 Project, we have laid the strong
            foundation for the Utility System (Ultra High Purity
            Gas/Chemical/N2/CDA/PCW/P-VAC/H-VAC), P-Drain, and Exhaust Duct. By
            successfully carrying out projects in semiconductor, display,
            utility,
            <br />
          </p>
        </section>
        <figure
          class="pages-fade flex w-1/2"
          :class="
            image3?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-right'
          "
          ref="image3"
        >
          <img class="w-full object-cover" src="/img/Qhse3.jpg" />
        </figure>
      </div>
    </div>
  </div>
</template>
