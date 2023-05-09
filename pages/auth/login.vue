<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})

const { signIn } = useAuth()

const username = ref('test') // 유저명 임시
const password = ref('citykim') // 비번 임시
const error = ref('') // 에러메시지

async function login () {
  // 로그인하기
  const loginData = await signIn('credentials', {
    username: username.value,
    password: password.value,
    redirect: false
  })
  if (loginData.error) {
    // 에러처리
    error.value = loginData.error
  } else {
    // 로그인 성공
    return navigateTo('/test')
  }
}
</script>

<template>
  <div>
    <p>임시로그인</p>
    <input
      v-model="username"
      type="textx"
    >
    <input
      v-model="password"
      type="password"
    >
    <button
      @click="login()"
    >
      로그인버튼
    </button>
    <div>{{ error }}</div>
  </div>
</template>