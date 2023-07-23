<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})

const image1 = ref() // 이미지 영역
const image2 = ref()
const infomation = ref() // 소개영역
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
        >
          <h3 class="mt-10 text-6xl font-black space-y-2">Mission</h3>
          <p class="mt-16 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, deleniti veritatis alias excepturi, 
            rerum sit dicta, quod ducimus in ullam necessitatibus architecto maiores reiciendis quas accusamus 
            distinctio nisi temporibus voluptatum?
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
        >
          <h3 class="mt-10 text-6xl font-black space-y-2">Vision</h3>
          <p class="mt-16 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, deleniti veritatis alias excepturi, 
            rerum sit dicta, quod ducimus in ullam necessitatibus architecto maiores reiciendis quas accusamus 
            distinctio nisi temporibus voluptatum?
            <br />
          </p>
        </section>
      </div>
      <div class="flex gap-20">
        <!-- mobile 일 경우, 이미지가 밑으로. -->
      </div>
    </div>
  </div>
</template>
