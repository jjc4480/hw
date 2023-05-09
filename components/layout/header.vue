<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'nuxt/app'
import { VNode } from 'nuxt/dist/app/compat/capi'

const route = useRoute()

const whiteList = ['/'] // header의 로고 이미지가 흰색인 페이지들

const color = computed(() => { // header의 로고 이미지 색상
  nextTick()
  if (route.name) { // route.name이 존재하면
    return whiteList.includes(route.path) ? 'white' : 'black' // route.path가 whiteList에 존재하면 흰색, 아니면 검정색
  }
  return 'white'
})

const pathList = { // header의 메뉴 리스트
  About: ['Greetings', 'Profile', 'History', 'Structure'],
  Projects: ['Portfolio'],
  Capabilities: ['Pipe', 'Fire System', 'Blueprint', 'HVAC'],
  Commitments: [],
  Media: ['News'],
  Careers : ['Recruit'],
}

const open = ref(true) // header의 메뉴가 열려있는지 여부

</script>

<template>
  <header
    class="gnb w-full fixed top-0 left-0 z-10 duration-300"
    :class="{'open': open}"
  >
    <div class="flex gap-20 relative">
      <NuxtLink
        class="flex"
        href="/"
      >
        <figure
          v-show="!open"
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
        <Transition
          name="header"
        >
          <figure
            v-if="open"
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
      <section
        class="flex px-10 py-8"
      >
        <div
          v-for="(list, title) in pathList"
          @mouseover="open = true"
          @mouseleave="open = false"
        >
          <NuxtLink
            class="block pb-12 px-8 text-2xl font-bold duration-300 text-white hover:text-black"
            href="/test"
          >
            {{ title }}
          </NuxtLink>
          <ul
            class="gnb-list grid text-center"
            :class="open ? 'opacity-100' : 'opacity-0'"
          >
            <li
              v-for="path in list"
            >
              <NuxtLink
                class="block py-1 text-white hover:text-black hover:font-block"
                href="/test"
              >
                {{ path }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>
      <svg
        class="ml-auto cursor-pointer"
        width="27" height="20" viewBox="0 0 27 20">
        <path d="M0.611328 1.53436H26.1846M10.2113 9.85437H26.4646M0.611328 18.4943H26.1846" stroke="white" stroke-width="1.28" stroke-miterlimit="0"/>
      </svg>
    </div>
  </header>
</template>