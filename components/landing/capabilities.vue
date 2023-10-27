<script setup lang="ts">
import { useUiStore } from "~/stores/ui"

const store = useUiStore()

const items = [
  // 박스 리스트
  {
    title: "하이테크",
    image: "/img/Mechanical.jpg",
    icon: "img/icon-Mechanical.png",
    href: "/capabilities/mechanical",
  },
  {
    title: "소방설비",
    image: "/img/FireProtection.jpg",
    icon: "img/icon-FireProtection.png",
    href: "/capabilities/fireProtection",
  },
  {
    title: "설계",
    image: "/img/TechnologyDesign.jpg",
    icon: "img/icon-TechnologyDesign.png",
    href: "/capabilities/design",
  },
  {
    title: "Turn-key",
    image: "/img/Plumbing.jpg",
    icon: "img/icon-Plumbing.png",
    href: "/capabilities/pipeline",
  },
  {
<<<<<<< HEAD
    title: "신사업",
=======
    title: "Coming soon",
>>>>>>> f8fecba0bcf79a562008bf64afbcf90a78d6fb05
    image: "/img/sven-mieke-fteR0e2BzKo-unsplash.jpg",
    icon: "",
  },
  {
    title: "LOGO",
    image: "/img/sven-mieke-fteR0e2BzKo-unsplash.jpg",
    icon: "img/white-logo.png",
  },
]

const timer = ref<null | number>(null) // auto change active
const active = ref("Mechanical") // 선택될 박스

function changeActive(title: string) {
  // hover시 활성화된 박스를 바꾼다
  if (title == "LOGO") return
  if (timer.value) {
    // 기존 타이머 삭제
    window.clearInterval(timer.value)
  }
  active.value = title // 교체
  activeStep() // 3초마다 박스를 변경한다
}

function activeStep() {
  // items의 마지막 아이템은 삭제
  const targetItems = items.slice(0, items.length - 1)

  timer.value = window.setInterval(() => {
    // 3초마다 박스를 변경한다
    const index = targetItems.findIndex((item) => item.title === active.value)
    if (index === targetItems.length - 1) {
      // 마지막 박스일 경우 첫번째 박스로 이동
      active.value = targetItems[0].title
    } else {
      // 그외는 다음 박스로 이동
      active.value = targetItems[index + 1].title
    }
  }, 3000)
}

onMounted(() => {
  activeStep() // 마운트시 박스교체 준비
})
</script>

<template>
  <div>
    <div
      class="flex 2xl:w-[50vw] w-full h-screen ml-auto items-center 2xl:justify-start justify-center bg-black bg-opacity-50 absolute top-0 right-0 xl:pl-20 z-20"
    >
      <section
        class="2xl:ml-40 pages-fade delay-75"
        :class="
          store.landing.scrollIndex == 2 ? 'pages-fade-done' : 'pages-fade-top'
        "
      >
        <h2 class="text-6xl text-white font-black leading-snug 2xl:text-right">
          Capabilities
        </h2>
        <ul
          class="capabilities grid grid-cols-3 2xl:w-[30rem] w-full mt-16 gap-[2px]"
        >
          <li
            class="flex space-y-6 flex-col items-center justify-center lg:h-36 md:h-36 h-36 bg-gray-600 duration-75"
            :class="{ 'capabilities-active': active == list.title }"
            v-for="list in items"
            @mouseover="changeActive(list.title)"
          >
            <a
              :href="list.href"
              :class="
                ['LOGO', 'Comming soon'].includes(list.title)
                  ? 'cursor-default'
                  : 'cursor-pointer'
              "
            >
              <div
                v-if="list.icon != ''"
                class="flex w-full items-center justify-center"
              >
                <img
                  :src="list.icon"
                  class="w-auto h-14"
                  :class="list.title == 'LOGO' ? '' : 'invert-[80%]'"
                />
              </div>
              <span
                class="flex w-full text- text-center text-white/60 items-center justify-center"
              >
                {{ list.title == "LOGO" ? "" : list.title }}
              </span>
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
