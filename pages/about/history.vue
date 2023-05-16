<script setup lang="ts">
defineProps({
  scrollTrigger: { // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true
  },
})
const infomation = ref() // 소개영역
</script>

<template>
  <div class="container mx-auto py-20 justify-center overflow-hidden">
    <section
      ref="infomation"
      class="pages-fade mt-20"
      :class="infomation?.offsetTop < scrollTrigger ? 'pages-fade-done' : 'pages-fade-right'"
    >
      <h2
        class="text-6xl mb-40 text-center"
      >
        History
      </h2>
      <figure class="flex gap-20">
        <figcaption>
          <h3 class="text-4xl text-right">test</h3>
          <p class="mt-20 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.</p>
        </figcaption>
        <img
          class="w-full object-cover"
          src="https://placehold.co/512x765"
        />
      </figure>
    </section>
  </div>
</template>