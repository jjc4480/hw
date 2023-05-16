<script setup lang="ts">
const props = defineProps({
  rate: { // 브라우저 창 높이의 몇 %에서 트리거할지 max = 1
    type: Number,
    default: 0.8
  },
})

// 스크롤 높이값 업데이트용
const emit = defineEmits<{(e: 'update-scroll', h: number): void}>()

// 스크롤 업데이트 리스너
function scrollCheck () {
  emit('update-scroll', (window.innerHeight * props.rate) + window.scrollY)
}

// 리사이즈시 스크롤 높이값 업데이트
function reSizeCheck () {
  emit('update-scroll', (window.innerHeight * props.rate) + window.scrollY)
}

onMounted(() => {
  // 리스너 추가
  window.addEventListener('scroll', scrollCheck)
  window.addEventListener('resize', reSizeCheck)

  setTimeout(() => {
    scrollCheck()
  }, 1)
})
onUnmounted(() => {
  // 언마운트시
  window.removeEventListener('scroll', scrollCheck)
  window.removeEventListener('resize', reSizeCheck)
})

</script>
<template>
  <div>
    <slot></slot>
  </div>
</template>