<script setup lang="ts">
import { useUiStore } from '@/stores/ui'
import { useRoute } from 'nuxt/app'

import Pc from '@/components/header/pc.vue'
const route = useRoute()

const whiteList = ['/'] // header의 로고 이미지가 흰색인 페이지들

const color = computed(() => { // header의 로고 이미지 색상
  nextTick()
  if (route.name) { // route.name이 존재하면
    return whiteList.includes(route.path) ? 'white' : 'black' // route.path가 whiteList에 존재하면 흰색, 아니면 검정색
  }
  return 'white'
})

const store = useUiStore() // ui store

</script>

<template>
  <header
    class="gnb w-full fixed top-0 left-0 z-50 duration-300"
    :class="{'open': store.nav}"
  >
    <div class="container flex mx-auto gap-20 justify-between relative">
      <NuxtLink
        class="flex w-96"
        href="/"
      >
        <Transition
          name="header-small"
        >
          <figure
            v-show="!store.nav"
            class="py-6 px-8 cursor-pointer"
          >
              <ClientOnly>
                <img
                  v-show="color == 'white'"
                  class="w-72"
                  src="/img/KakaoTalk_20230509_103704206_01.png"
                />
                <img
                  v-show="color == 'black'"
                  class="w-72"
                  src="/img/KakaoTalk_20230509_103704206_01_b.png"
                />
              </ClientOnly>
          </figure>
        </Transition>
        <Transition
          name="header-large"
        >
          <figure
            v-show="store.nav"
            class="flex py-12 px-8 items-center"
          >
            <ClientOnly>
              <img
                class="w-72"
                src="/img/KakaoTalk_20230509_103704206_b.png"
              />
            </ClientOnly>
          </figure>
        </Transition>
      </NuxtLink>

      <Pc
        class="2xl:flex hidden"
      ></Pc>
    
      <button
        class="nav-icon"
        :class="{'open': store.siteMap}"
        @click="store.siteMap = true"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>