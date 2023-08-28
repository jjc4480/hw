<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})
const greetings = ref() // 이미지 영역
</script>

<template>
  <div class="font-pre">
    <div
      class="container pages-fade flex items-center flex-col-reverse lg:flex-row mx-auto py-20 gap-20 justify-center overflow-hidden"
      :class="
        greetings?.offsetTop < scrollTrigger
          ? 'pages-fade-done'
          : 'pages-fade-bottom'
      "
      ref="greetings"
    >
      <!-- mobile 일 경우, 이미지가 밑으로. -->
      <section
        class="flex flex-col w-full lg:w-1/2 lg:border-r lg:border-hw lg:pr-10"
      >
        <h2 class="text-2xl text-hw font-bold">CEO Message</h2>
        <h3 class="mt-10 text-6xl font-black space-y-2">
          <div>Build Bright</div>
          <div>Future With Us</div>
        </h3>
        <p class="mt-16 text-xl">
          Dear Colleagues and Community Partners, <br /><br />Hyoungwon ENG Co.,
          Ltd has a strong history of commitment to excellence and performance
          in meeting our employee, customer, and investor expectations. We are
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
          honesty. Build a bright future with us. <br /><br />Sincerely,<br />
          <br />

          <span class="text-4xl font-bold">Jeong Hwan Kim</span>
          <img class="mt-5 w-80" src="/img/sign.jpg" /> <br /><br />Chief
          Executive Officer <br />Hyoungwon ENG Co., Ltd
        </p>
      </section>

      <figure class="flex px-4 w-full lg:w-1/2">
        <img class="w-full object-cover" src="/img/ceo.jpg" />
      </figure>
    </div>
  </div>
</template>
