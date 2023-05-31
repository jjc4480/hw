<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
});
const image = ref(); // 이미지 영역
const infomation = ref(); // 소개영역
</script>

<template>
  <div>
    <div
      class="container flex items-center flex-col-reverse lg:flex-row mx-auto py-20 gap-20 justify-center overflow-hidden"
    >
     <!-- mobile 일 경우, 이미지가 밑으로. -->
      <figure
        class="pages-fade flex px-4 w-full lg:w-1/2"
        :class="
          image?.offsetTop < scrollTrigger
            ? 'pages-fade-done'
            : 'pages-fade-left'
        "
        ref="image"
      >
        <img class="w-full object-cover" src="https://placehold.co/512x765" />
      </figure>
      <section
        class="pages-fade flex flex-col w-full  lg:w-1/2 lg:border-l lg:border-hw lg:pl-10"
        :class="
          infomation?.offsetTop < scrollTrigger
            ? 'pages-fade-done'
            : 'pages-fade-right'
        "
        ref="infomation"
      >
        <h2 class="text-2xl text-hw font-bold">CEO Message</h2>
        <h3 class="mt-10 text-6xl font-black space-y-2">
          <div>Build Bright</div>
          <div>Future With Us</div>
        </h3>
        <p class="mt-16 text-xl">
          Dear Colleagues and Community Partners, <br /><br />Hyoungwon Eng Inc.
          has a strong history of commitment to excellence and performance in
          meeting our employee, customer, and investor expectations. We are
          committed to the highest ethical standards for safety, integrity,
          excellence, accountability, and respect in all our business dealings.
          <br /><br />

          Starting with the LG Display M5 Project, we have laid the strong
          foundation for the Utility System (Ultra High Purity
          Gas/Chemical/N2/CDA/PCW/P-VAC/H-VAC), P-Drain, and Exhaust Duct. By
          successfully carrying out projects in semiconductor, display, utility,
          and fire protection in LG Display, LG Innotek, LG Electronics, and SK
          Hynix, we are becoming a professional construction company recognized
          for our technology and business management capabilities. <br /><br />
          We pursue excellence for ourselves, for our company and for the
          community each day. We build with honesty because we are built on
          honesty. Build a bright future with us. <br /><br />Sincerely,<br /> <br />
          
          <div class="text-4xl font-bold">Jeong Hwan Kim</div>
          <br /><br />Chief Executive Officer <br />Hyoungwon Eng Inc.
        </p>
      </section>
    </div>
  </div>
</template>
