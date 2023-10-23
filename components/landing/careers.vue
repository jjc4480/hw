<script setup lang="ts">
import { useUiStore } from "@/stores/ui"
const store = useUiStore() // ui store
</script>

<template>
  <div
    class="careers-container flex flex-col flex-auto"
    :class="{ open: store.careers }"
  >
    <div class="pt-[20vh]">
      <a
        class="flex container justify-center lg:max-w-[100%] lg:h-auto h-48 mx-auto group duration-700 translate-y-10 opacity-0 delay-75 relative"
        href="/careers/recruit"
      >
        <section
          class="lg:w-[55%] flex flex-col justify-center w-full lg:h-auto h-full lg:pl-16 pl-0 top-0 left-0 lg:static absolute lg:bg-hw bg-black/50 z-10 text-center"
        >
          <h2
            class="2xl:text-5xl text-3xl text-white font-black leading-snug lg:text-left text-center"
          >
            Recruitment
          </h2>
          <p
            class="mt-10 2xl:text-xl text-lg text-white leading-tight lg:text-left text-center"
          >
            형원이엔지와 함께 나아갈 긍정적이고 창의적인 인재를 기다립니다.
          </p>
          <div class="lg:flex hidden mt-8">
            <span class="text-white 2xl:text-2xl lg:text-lg">View More</span>
            <svg
              class="w-8 h-8 ml-10 group-hover:ml-16 fill-white duration-150"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </section>
        <figure class="lg:w-[25%] w-full overflow-hidden">
          <img
            class="w-full h-full group-hover:scale-110 duration-500 object-cover object-center"
            src="/img/career.jpg"
          />
        </figure>
      </a>
    </div>
    <div
      class="careers-contact flex flex-auto items-center justify-center mt-20 py-20 overflow-hidden relative group"
    >
      <div
        class="careers-contact-image absolute inset-0 group-hover:scale-105 duration-500 -z-10"
      ></div>
      <section
        class="careers-contact-us text-center text-white duration-700 translate-y-10 opacity-0 delay-500"
      >
        <h2 class="text-6xl font-black leading-snug">Contact Us</h2>
        <p class="mt-4 text-xl leading-tight">경기도 파주시 경의로 1204, 월드타워 10차 10층 1007호 ㈜형원이엔지​</p>
        <ul class="block md:flex gap-10 mt-10 text-xl">
          <li>Tel : 031-934-0455</li>
          <li>Fax : 031-934-0488</li>
          <li>Email : hw@test.com</li>
        </ul>
      </section>
    </div>
  </div>
</template>
