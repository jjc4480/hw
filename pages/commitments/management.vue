<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})
const image1 = ref() // 이미지 영역

</script>

<template>
  <div>
    <div
      class="flex flex-col container items-center mx-auto py-20 gap-20 justify-center overflow-hidden"
    >
      <div class="flex h-screen gap-20">
        <section
          ref="image1"
          class="pages-fade flex flex-col w-1/2"
          :class="
            image1?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
        >
          <h3 class="mt-10 text-6xl font-black space-y-2">Management</h3>
          <p class="mt-16 text-xl">
           asfasf
          </p>
        </section>
    </div>
    </div>
  </div>
</template>
