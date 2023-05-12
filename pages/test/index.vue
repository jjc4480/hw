<script setup lang="ts">
const { data, signOut, getCsrfToken } = useAuth()

const test = getCsrfToken()

</script>

<template>
  <div>
    로그인전용
    <div>I'm protected! Session data: {{ data }}</div>
    <button @click="signOut()">
      sign out
    </button>
    <div>{{ test }}</div>
    <BaseTitles />
    <div class="w-1/12">
      <BaseDiffbar
        :values="{from: 15, to: 25}"
        :bg-colors="{empty: 'bg-slate-100', fill: 'bg-blue-500'}" 
      />
    </div>
  </div>
</template>
