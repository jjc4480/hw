<script setup lang="ts">
defineProps({
  scrollTrigger: { // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true
  },
})
const image = ref() // 이미지 영역
const infomation = ref() // 소개영역
</script>

<template>
  <div>
    <div class="container flex mx-auto py-20 gap-20 justify-center overflow-hidden">
      <figure
        class="pages-fade"
        :class="image?.offsetTop < scrollTrigger ? 'pages-fade-done' : 'pages-fade-left'"
        ref="image"
      >
        <img
          class="w-full object-cover"
          src="https://placehold.co/512x765"
        />
      </figure>
      <section
        class="pages-fade"
        :class="image?.offsetTop < scrollTrigger ? 'pages-fade-done' : 'pages-fade-right'"
        ref="infomation"
      >
        <h2 class="text-xl text-hw">CEO MESSAGE</h2>
        <h3 class="mt-10 text-6xl font-black">Hello Yo</h3>
        <p class="mt-16 text-xl">We like to party yayayayaay~~~~~~</p>
      </section>
    </div>
  </div>
</template>