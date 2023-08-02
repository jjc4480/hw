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

const isOpenVisionModal = ref(false) // 모달창 여부
const visionModal = ref();
const wrapper = ref();

const openVisionModal = () => {
  isOpenVisionModal.value = true
  // scroll 도 모달로 이동
  moveToScroll()
}

const moveToScroll = () => {
  setTimeout(()=> {
    window.scrollTo({
        top: wrapper.value?.offsetTop,
        behavior: "smooth",
    })
  }, 50)
}

const closeVisionModal = () => {
  isOpenVisionModal.value = false
}

const handleWheel = (event : MouseEvent) => {
  event.preventDefault();
}

// resize
onMounted(() => {
  window.addEventListener("resize", () => {
    if(isOpenVisionModal.value) {
      moveToScroll()
    }
  })

  
  window.addEventListener("keydown" , (e) => {
    e.preventDefault();
    // esc 경우 모달 닫아줌
    if(e.key === "Escape") {
      closeVisionModal()
    }
  })

})


</script>

<template>
  <div class="relative" ref="wrapper">
    <div
      class="container flex flex-col items-center justify-center gap-x-20 gap-y-10 py-20 mx-auto overflow-hidden"
    >
      <div class="flex flex-col-reverse md:flex-row items-center md:items-start  gap-x-20 gap-y-10">
        <!-- mobile 일 경우, 이미지가 밑으로. -->

        <section
          class="flex flex-col w-full md:w-1/2 pages-fade break-keep"
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
          class="flex w-full  md:w-1/2 pages-fade"
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
      <div class="flex flex-col mt-20 md:flex-row items-center md:items-start  gap-x-20 gap-y-10">
        <!-- mobile 일 경우, 이미지가 밑으로. -->
        <figure
          class="flex w-full md:w-1/2 pages-fade"
          :class="
            image2?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-right'
          "
          ref="image2"
        >
          <img class="object-cover w-full" src="/img/vision.jpg" />
        </figure>
        <section
          class="flex flex-col w-full md:w-1/2 pages-fade"
          :class="
            image2?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
        >
          <h3 class="mt-10 space-y-2 text-6xl font-black">Vision</h3>
          <p class="mt-16 text-xl">
            HYOUNGWON's vision is very intuitive. We are preparing for a quantum jump with a long-term goal.<br />
            <button @click="openVisionModal" 
              class="mt-5 bg-hw px-5 py-3 border rounded-full text-white shadow-lg animate-bounce hover:bg-cyan-600 transition-colors duration-500 ease-in-out">
              Check our Vision
            </button>
          </p>
        </section>
      </div>
      <div class="flex gap-x-20 gap-y-10">
        <!-- mobile 일 경우, 이미지가 밑으로. -->
      </div>
    </div>
    <div ref="visionModal" @wheel="handleWheel" class="top-0 left-0 absolute select-none w-screen h-screen flex flex-col lg:flex-row transition-all duration-700 ease-in-out" :class="isOpenVisionModal ? 'opacity-100 z-10' : 'opacity-0 -z-10'">
      <button
          class="absolute top-10 right-10 z-20 flex w-10 h-10 items-center justify-center bg-white rounded-full group"
          type="button"
          @click="closeVisionModal"
        >
          <svg
            class="w-4 h-4 group-hover:rotate-180 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
            />
          </svg>
      </button>
      <div class="w-full lg:w-1/4 h-1/4 lg:h-full relative overflow-hidden group">
        <div class="bg-center bg-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-110 bg-[url('/img/vision_1.jpg')]"></div>
        <div class="absolute bottom-0 w-full h-full backdrop-brightness-50 flex justify-center items-end">
          <div class="relative px-8 flex flex-col w-full">
            <h3 class="absolute top-[-2rem] text-6xl font-extrabold text-white">SYSTEM</h3>
            <div class="mt-5 text-3xl w-full px-2 text-center font-semibold h-32 lg:h-48 flex items-center justify-center flex-col bg-white text-cyan-950 py-10">
              <p>Establish System</p>
              <p>Procedure</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/4 h-1/4 lg:h-full relative overflow-hidden group">
        <div class="bg-center bg-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-110 bg-[url('/img/vision_2.jpg')]"></div>
        <div class="absolute bottom-0 w-full h-full backdrop-brightness-50 flex justify-center items-end">
          <div class="relative px-8 flex flex-col w-full">
            <h3 class="absolute top-[-2rem] text-6xl font-extrabold text-white">EXPANSION</h3>
            <div class="mt-5 text-3xl w-full px-2 text-center font-semibold h-32 lg:h-48 flex items-center justify-center flex-col bg-white text-cyan-950 py-10">
              <p>Expand Business</p>
              <p>Area</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/4 h-1/4 lg:h-full relative overflow-hidden group">
        <div class="bg-center bg-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-110 bg-[url('/img/vision_3.jpg')]"></div>
        <div class="absolute bottom-0 w-full h-full backdrop-brightness-50 flex justify-center items-end">
          <div class="relative px-8 flex flex-col w-full">
            <h3 class="absolute top-[-2rem] text-6xl font-extrabold text-white">ACTIVE</h3>
            <div class="mt-5 text-3xl w-full px-2 text-center font-semibold h-32 lg:h-48 flex items-center justify-center flex-col bg-white text-cyan-950 py-10">
              <p>Create Active</p>
              <p>Working Environment</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/4 h-1/4 lg:h-full relative overflow-hidden group">
        <div class="bg-center bg-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-110 bg-[url('/img/vision_4.jpg')]"></div>
        <div class="absolute bottom-0 w-full h-full backdrop-brightness-50 flex justify-center items-end">
          <div class="relative px-8 flex flex-col w-full">
            <h3 class="absolute top-[-2rem] text-6xl font-extrabold text-white">2025</h3>
            <div class="mt-5 text-3xl w-full px-2 text-center font-semibold h-32 lg:h-48 flex items-center justify-center flex-col bg-white text-cyan-950 py-10">
              <p>Reach Sales</p>
              <p>202.5B by 2025</p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>
