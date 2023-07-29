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
      class="container flex flex-col items-center justify-center gap-20 py-20 mx-auto overflow-hidden"
    >
      <div class="flex gap-20">
        <!-- mobile 일 경우, 이미지가 밑으로. -->

        <section
          class="flex flex-col w-1/2 pages-fade break-keep"
          :class="
            image1?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
        >
          <h3 class="mt-10 space-y-2 text-6xl font-black">Mission</h3>
          <p class="mt-16 text-xl">
            Our Core Value is benefiting oneself and others. We the “HYOUNGWON” cares employees, clients, and society. 
            By benefiting oneself and others, we do believe that we can create and change the working atmosphere and environment around us.
            Therefore, our mission is crystal clear. We grow together and build bright future together. 
            <br />
          </p>
        </section>
        <figure
          class="flex w-1/2 pages-fade"
          :class="
            image1?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-right'
          "
          ref="image1"
        >
          <img class="object-cover w-full" src="/img/mission.jpg" />
        </figure>
      </div>
      <div class="flex gap-20">
        <!-- mobile 일 경우, 이미지가 밑으로. -->
        <figure
          class="flex w-1/2 pages-fade"
          :class="
            image2?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-right'
          "
          ref="image2"
        >
          <img class="object-cover w-full" src="/img/Qhse2.jpg" />
        </figure>
        <section
          class="flex flex-col w-1/2 pages-fade"
          :class="
            image2?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
        >
          <h3 class="mt-10 space-y-2 text-6xl font-black">Vision</h3>
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
