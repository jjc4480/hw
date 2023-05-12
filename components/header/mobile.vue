<script setup lang="ts">
const pathList = useNavPath() // nav의 path 리스트
const menuOpen = ref(false) // 메뉴 오픈여부

const accordionTarget = ref('') // 아코디언 대상

function toggleAccordion (t: string) {
  // 아코디언을 토글하는 기능
  if (t == accordionTarget.value) {
    // 같은거면 닫기
    accordionTarget.value = ''
  } else {
    // 다르면 열기
    accordionTarget.value = t
  }
}

</script>

<template>
  <div
    class="relative"
  > 
    <button
      class="nav-icon w-14 h-11 rotate-0 duration-500 cursor-pointer absolute -top-3 right-5 z-10"
      :class="{'open': menuOpen}"
      @click="menuOpen = !menuOpen"
    >
      <div
        class="w-full top-0"
        :class="[!menuOpen ? 'bg-white' : 'bg-black']"
      ></div>
      <div
        class="w-4/6 top-5"
        :class="[!menuOpen ? 'bg-white' : 'bg-black']"
      ></div>
      <div
        class="w-full top-10"
        :class="[!menuOpen ? 'bg-white' : 'bg-black']"
      ></div>
    </button>
    <div
      class="w-full h-screen bg-white fixed left-0 duration-300"
      :class="[menuOpen ? 'top-0' : '-top-full']"
    >
      <div class="flex gap-5 p-10 border-b border-black">
        <NuxtLink
          class="fill-gray-400"
          href="/test"
        >
          <svg
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
        </NuxtLink>
        <NuxtLink
          class="fill-gray-400"
          href="/test"
        >
          <svg
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        </NuxtLink>
      </div>
      <section>
        <div
          class="duration-500"
          :class="[menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0']"
          :style="`transition-delay: ${0.25 + (index * 0.05)}s`"
          v-for="(list, index) in pathList"
        >
          <button
            class="flex w-full py-5 px-8 items-center justify-between text-xl font-bold border-b border-gray-300"
            :class="accordionTarget == list.title ? 'text-hw' : 'text-gray-500'"
            type="button"
            @click="toggleAccordion(list.title)"
          >
            <span>{{ list.title }}</span>
            <svg
              class="w-4 h-4"
              v-show="accordionTarget == list.title"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            <svg
              class="w-4 h-4"
              v-show="accordionTarget != list.title"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
          </button>
          <ul
            class="grid overflow-hidden px-5 gap-3 bg-gray-300/50 border-b border-gray-300 transition-all duration-300"
            :style="
              accordionTarget != list.title ?
              'height: 0' :
              `height: ${list.items.length > 0 ? 2  + (2.5 * list.items.length - 1) : ''}rem`
            "
          >
            <li
              class="first:pt-5 last:pb-5 pl-8 text-gray-600"
              v-for="path in list.items"
            >
              <NuxtLink
                href="/test"
              >
              <!-- TODO: 상세페이지 href -->
              {{ path }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>