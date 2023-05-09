<script setup lang="ts">
import Infomation from '@/components/landing/infomation.vue'
import Featured from '@/components/landing/featured.vue'
import Capabilities from '@/components/landing/capabilities.vue'
import Commitments from '@/components/landing/commitments.vue'
import Careers from '@/components/landing/careers.vue'

definePageMeta({
  auth: false
})

const components = {
  infomation: Infomation,
  featured: Featured,
  capabilities: Capabilities,
  commitments: Commitments,
  careers: Careers
}
const offset = Object.values(components) // 컴포넌트 갯수

const trigger = ref(false) // 스크롤 이벤트여부
const screen = ref(0) // 스크린 크기
const scrollIndex = ref(0) // 현재위치

function handler (e: WheelEvent) {
  // 스크롤 이벤트 핸들링
  const max = screen.value * (offset.length - 1) // 최대 스크롤 높이
  if (!trigger.value && window.scrollY < max) {
    // 트리거가 동작중이 아니면서 최대높이를 넘지 않은경우만
    trigger.value = true // 트리거 동작중으로 설정

    if (e.deltaY > 0) {
      // 아래로 스크롤
      scrollIndex.value = scrollIndex.value + 1
    } else {
      // 위로 스크롤
      if (scrollIndex.value == 0) {
        // 이미 맨 아래에 있으면 아무것도 하지 않음
        trigger.value = false
      } else {
        scrollIndex.value = scrollIndex.value - 1
      }
    }

    // index가 0보다 작거나 offset.length보다 크면 0 또는 offset.length - 1로 고정
    scrollIndex.value < 0 ? scrollIndex.value = 0 : scrollIndex.value > offset.length ? offset.length - 1 : scrollIndex.value

    window.scrollTo({ // 스크롤 이동
      top: scrollIndex.value * screen.value,
      behavior: 'smooth'
    })
  }
}

function scrollCheck () {
  // 스크롤 감지
  if (window.scrollY == scrollIndex.value * screen.value) {
    // 현재높이와 목표높이가 같아지면 트리거를 종료해준다
    trigger.value = false
  }
}

function resizer () {
  // 리사이즈시 높이값 변경
  screen.value = window.innerHeight
}

onMounted(() => {
  // window.addEventListener('wheel', (e: WheelEvent) => {
  //   // 휠 이벤트 정지후 핸들러 실행
  //   console.log(window.scrollY)
  //   e.preventDefault()
  //   handler(e)
  // }, {passive: false})
  // window.addEventListener('scroll', scrollCheck)
  // // 리사이즈시 높이값 변경
  // window.addEventListener('resize', resizer)

  // setTimeout(() => {
  //   screen.value = window.innerHeight // 마운트시 높이값을 저장
  //   scrollIndex.value = Math.floor(window.scrollY / screen.value) // index 재설정
  // }, 1)
})

onUnmounted(() => {
  console.log('foooooo')
})

</script>

<template>
  <div>
    <component
      class="landing"
      :class="key"
      v-for="(component, key) in components"
      :is="component"
      :key="key"
    ></component>
    <NuxtLink
      href="/test"
    >
      인증하기
    </NuxtLink>
    <pre
      class="fixed right-0 bottom-0 bg-white text-hw"
    >
      {{trigger}}
      {{screen}}
      {{scrollIndex}}
    </pre>
  </div>
</template>
