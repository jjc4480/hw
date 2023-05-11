<script setup lang="ts">

const items = [
  { title: 'Pipe', image: '/img/tolu-olubode-PlBsJ5MybGc-unsplash.jpg' },
  { title: 'Fire', image: '/img/max-larochelle-tD-SDlQxfsY-unsplash.jpg' },
  { title: 'Design', image: '/img/luca-bravo-9l_326FISzk-unsplash.jpg' },
  { title: 'Test', image: '/img/sven-mieke-fteR0e2BzKo-unsplash.jpg' },
  { title: 'Foo', image: '/img/sven-mieke-fteR0e2BzKo-unsplash.jpg' },
  { title: 'Bar', image: '/img/sven-mieke-fteR0e2BzKo-unsplash.jpg' },
]

const active = ref('Pipe')
</script>

<template>
  <div class="relative">
    <div class="flex w-[50vw] h-screen ml-auto items-center justify-center bg-black bg-opacity-50 absolute top-0 right-0 z-20">
      <section class="w-4/5">
        <h2 class="text-6xl text-white font-black leading-snug text-right">Capabilities</h2>
        <ul class="grid grid-cols-3 w-[55.8rem] mt-16 ml-auto gap-[1px]">
          <li
            class="h-80 bg-gray-600 duration-500"
            :class="{'capabilities-active': active == list.title}"
            v-for="list in items"
            @mouseover="active = list.title"
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