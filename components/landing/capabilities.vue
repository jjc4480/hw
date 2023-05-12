<script setup lang="ts">

const items = [ // 박스 리스트
  { title: 'Pipe', image: '/img/tolu-olubode-PlBsJ5MybGc-unsplash.jpg' },
  { title: 'Fire', image: '/img/max-larochelle-tD-SDlQxfsY-unsplash.jpg' },
  { title: 'Design', image: '/img/luca-bravo-9l_326FISzk-unsplash.jpg' },
  { title: 'Test', image: '/img/sven-mieke-fteR0e2BzKo-unsplash.jpg' },
  { title: 'Foo', image: '/img/sven-mieke-fteR0e2BzKo-unsplash.jpg' },
  { title: 'Bar', image: '/img/sven-mieke-fteR0e2BzKo-unsplash.jpg' },
]

const timer = ref<null|number>(null) // auto change active
const active = ref('Pipe') // 선택될 박스

function changeActive (title: string) {
  // hover시 활성화된 박스를 바꾼다
  if (timer.value) {
    // 기존 타이머 삭제
    window.clearInterval(timer.value)
  }
  active.value = title // 교체
  activeStep() // 3초마다 박스를 변경한다
}

function activeStep () {
  timer.value = window.setInterval(() => {
    // 3초마다 박스를 변경한다
    const index = items.findIndex((item) => item.title === active.value)
    if (index === items.length - 1) {
      // 마지막 박스일 경우 첫번째 박스로 이동
      active.value = items[0].title
    } else {
      // 그외는 다음 박스로 이동
      active.value = items[index + 1].title
    }
  }, 3000)
}

onMounted(() => {
  activeStep() // 마운트시 박스교체 준비
})

</script>

<template>
  <div class="relative">
    <div class="flex 2xl:w-[50vw] w-full h-screen ml-auto items-center justify-center bg-black bg-opacity-50 absolute top-0 right-0 z-20">
      <section class="w-4/5">
        <h2 class="text-6xl text-white font-black leading-snug 2xl:text-right">Capabilities</h2>
        <ul class="grid grid-cols-3 2xl:w-[55.8rem] w-full mt-16 ml-auto gap-[1px]">
          <li
            class="lg:h-80 md:h-52 h-36 bg-gray-600 duration-500"
            :class="{'capabilities-active': active == list.title}"
            v-for="list in items"
            @mouseover="changeActive(list.title)"
          >
            <NuxtLink
              class="flex w-full h-full text-3xl text-white/60 items-center justify-center"
              href="/"
            >
              {{ list.title }}
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>
    <div class="w-full h-screen absolute z-10 top-0 left-0 overflow-hidden">
      <Transition
        v-for="list in items"
        name="capabilities"
      >
        <div
          v-show="active === list.title"
          class="w-full h-screen absolute top-0 left-0"
          :style="
            `background: url(${list.image}) no-repeat center center / cover;
            ${active === list.title ? 'z-index: 0;' : 'z-index: 1;'}`
          "
        >
        </div>
      </Transition>
    </div>
  </div>
</template>