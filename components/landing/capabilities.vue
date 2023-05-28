<script setup lang="ts">
import { useUiStore } from "~/stores/ui";

const store = useUiStore();

const items = [
  // 박스 리스트
  {
    title: "Mechanical",
    image: "/img/Mechanical.jpg",
    icon: "img/icon-Mechanical.png",
  },
  {
    title: "Fire Protection",
    image: "/img/FireProtection.jpg",
    icon: "img/icon-FireProtection.png",
  },
  {
    title: "Technology Design",
    image: "/img/TechnologyDesign.jpg",
    icon: "img/icon-TechnologyDesign.png",
  },
  {
    title: "Plumbing",
    image: "/img/Plumbing.jpg",
    icon: "img/icon-Plumbing.png",
  },
  {
    title: "Comming soon",
    image: "/img/sven-mieke-fteR0e2BzKo-unsplash.jpg",
    icon: "",
  },
  {
    title: "LOGO",
    image: "/img/sven-mieke-fteR0e2BzKo-unsplash.jpg",
    icon: "img/white-logo.png",
  },
];

const timer = ref<null | number>(null); // auto change active
const active = ref("Mechanical"); // 선택될 박스

function changeActive(title: string) {
  // hover시 활성화된 박스를 바꾼다
  if (title == "LOGO") return;
  if (timer.value) {
    // 기존 타이머 삭제
    window.clearInterval(timer.value);
  }
  active.value = title; // 교체
  activeStep(); // 3초마다 박스를 변경한다
}

function activeStep() {
  // items의 마지막 아이템은 삭제
  const targetItems = items.slice(0, items.length - 1);

  timer.value = window.setInterval(() => {
    // 3초마다 박스를 변경한다
    const index = targetItems.findIndex((item) => item.title === active.value);
    if (index === targetItems.length - 1) {
      // 마지막 박스일 경우 첫번째 박스로 이동
      active.value = targetItems[0].title;
    } else {
      // 그외는 다음 박스로 이동
      active.value = targetItems[index + 1].title;
    }
  }, 3000);
}

onMounted(() => {
  // activeStep() // 마운트시 박스교체 준비
});
</script>

<template>
  <div class="relative">
    <div
      class="flex 2xl:w-[50vw] w-full h-screen ml-auto items-center 2xl:justify-start justify-center bg-black bg-opacity-50 absolute top-0 right-0 xl:pl-56 z-20"
    >
      <section class="2xl:ml-40">
        <h2 class="text-6xl text-white font-black leading-snug 2xl:text-right">
          Capabilities
        </h2>
        <ul
          :class="
            store.landing.scrollIndex == 2
              ? 'pages-fade-done'
              : 'pages-fade-top'
          "
          class="pages-fade grid grid-cols-3 2xl:w-[30rem] w-full mt-16 gap-[2px] delay-500"
        >
          <li
            class="flex space-y-6 flex-col items-center justify-center lg:h-44 md:h-40 h-36 bg-gray-600 duration-500"
            :class="{ 'capabilities-active': active == list.title }"
            v-for="list in items"
            @mouseover="changeActive(list.title)"
          >
            <!-- TODO : svg 들어가야함  -->
            <div
              v-if="list.icon != ''"
              class="flex w-full items-center justify-center"
            >
              <img :src="list.icon" class="w-16 h-16" />
            </div>
            <a
              class="flex w-full text-xl text-center text-white/60 items-center justify-center"
              :class="
                list.title == 'LOGO'
                  ? 'cursor-default hidden'
                  : 'cursor-pointer'
              "
              href="/"
            >
              {{ list.title }}
            </a>
          </li>
        </ul>
      </section>
    </div>
    <div class="w-full h-screen absolute z-10 top-0 left-0 overflow-hidden">
      <Transition v-for="list in items" name="capabilities">
        <div
          v-show="active === list.title"
          class="w-full h-screen absolute top-0 left-0"
          :style="`background: url(${
            list.image
          }) no-repeat center center / cover;
            ${active === list.title ? 'z-index: 0;' : 'z-index: 1;'}`"
        ></div>
      </Transition>
    </div>
  </div>
</template>
