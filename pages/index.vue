<script setup lang="ts">
import { useUiStore } from '@/stores/ui'

import Infomation from '@/components/landing/infomation.vue'
import Featured from '@/components/landing/featured.vue'
import Capabilities from '@/components/landing/capabilities.vue'
import Commitments from '@/components/landing/commitments.vue'
import Careers from '@/components/landing/careers.vue'

const components = { // 사용될 컴포넌틑 리스트 v-for로 배치한다
  infomation: Infomation,
  featured: Featured,
  capabilities: Capabilities,
  commitments: Commitments,
  careers: Careers
}

const store = useUiStore() // ui store
const offset = Object.values(components) // 컴포넌트 갯수

const trigger = ref(false) // 스크롤 이벤트여부
const screen = ref(0) // 스크린 크기
const position = ref(0) // 현재위치
const startY = ref(0) // 터치 시작위치

let timer:null|number = null // 트리거 강제종료 타이머

function wheelEvent (e: WheelEvent) {
  // 휠 이벤트 감지
  handler(e.deltaY)
}

function touchstartEvent (e: TouchEvent) {
  // 터치 이벤트 시작여부 감지
  startY.value = e.touches[0].clientY
}

function touchendEvent (e: TouchEvent) {
  // 터치 이벤트 종료여부 감지
  const deltaY = e.changedTouches[0].clientY - startY.value;
  // 터치 종료시 시작위치와 종료위치의 차이를 계산하여 스크롤 이벤트 핸들링
  handler(deltaY)
}

function handler (y: number) {
  // 스크롤 이벤트 핸들링
  if (!trigger.value) {
    // 트리거가 동작중이 아닐때만 실행
    trigger.value = true // 트리거 동작중으로 설정

    if (y > 0) {
      // 아래로 스크롤
      store.updateLandingScrolling(store.landing.scrollIndex + 1)
    } else {
      // 위로 스크롤
      if (store.landing.scrollIndex == 0) {
        // 이미 맨 위에 있으면 아무것도 하지 않음
        trigger.value = false
      } else {
        store.updateLandingScrolling(store.landing.scrollIndex - 1)
      }
    }

    if (store.landing.scrollIndex < 0) {
      // index가 0보다 작거나 offset.length보다 크면 0
      store.updateLandingScrolling(0)
    }

    window.scrollTo({ // 스크롤 이동
      top: store.landing.scrollIndex * screen.value,
      behavior: 'smooth'
    })
  }

  if (store.landing.scrollIndex >= offset.length) {
    // 만약 최대를 넘어간다면
    if (!timer) {
      // 타이머가 없을때만 동작
      timer = window.setTimeout(() => {
        // 지연시간 후 초기화
        store.updateLandingScrolling(offset.length)
        trigger.value = false
        timer = null
      }, 500)
    }
  }
}

function scrollCheck () {
  // 스크롤 감지
  position.value = window.scrollY // 현재 스크롤 높이 저장
  if (Math.abs(position.value - store.landing.scrollIndex * screen.value) < 1) {
    // 현재높이와 목표높이가 같아지면 트리거를 종료해준다
    trigger.value = false
  }
  
  if (screen.value && position.value > screen.value * 3) {
    // 높이설정이 된 이후 3번째 컴포넌트보다 높아진경우
    store.careers = true
  }
}

function resizer () {
  // 리사이즈시 높이값 변경
  screen.value = window.innerHeight
  window.scrollTo({ // 스크롤 이동
    top: store.landing.scrollIndex * screen.value,
  })
}

const wheelOption: AddEventListenerOptions = { passive: false } // wheel 이벤트 옵션
onMounted(() => {
  window.addEventListener('wheel', (e: WheelEvent) => {
    // 휠 이벤트 정지후 핸들러 실행
    e.preventDefault()
    wheelEvent(e)
  }, wheelOption)

  window.addEventListener('touchstart', (e: TouchEvent) => {
    e.preventDefault()
    touchstartEvent(e)
  }, wheelOption)
  window.addEventListener('touchend', (e: TouchEvent) => {
    // 휠 이벤트 정지후 핸들러 실행
    e.preventDefault()
    touchendEvent(e)
  }, wheelOption)


  window.addEventListener('scroll', scrollCheck)
  // 리사이즈시 높이값 변경
  window.addEventListener('resize', resizer)

  setTimeout(() => {
    screen.value = window.innerHeight // 마운트시 높이값을 저장
    store.updateLandingScrolling(Math.round(window.scrollY / screen.value)) // index 재설정
  }, 1)
})

onUnmounted(() => {
  window.removeEventListener('wheel', (e: WheelEvent) => {
    e.preventDefault()
    wheelEvent(e)
  }, wheelOption)
  window.removeEventListener('touchstart', (e: TouchEvent) => {
    e.preventDefault()
    touchstartEvent(e)
  }, wheelOption)
  window.removeEventListener('touchend', (e: TouchEvent) => {
    // 휠 이벤트 정지후 핸들러 실행
    e.preventDefault()
    touchendEvent(e)
  }, wheelOption)
  window.removeEventListener('scroll', scrollCheck)
  window.removeEventListener('resize', resizer)
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

  </div>
</template>
