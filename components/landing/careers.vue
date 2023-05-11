<script setup lang="ts">
import { useUiStore } from '@/stores/ui'
const store = useUiStore() // ui store
</script>

<template>
  <div class="careers-container flex flex-col"
    :class="{'open': store.careers}"
  >
    <div
      class="pt-[20vh]"
    >
      <NuxtLink
        class="flex container mx-auto group duration-300"
        href="/test"
      >
        <section
          class="w-4/6 pl-16 py-16 bg-hw"
        >
          <h2
            class="text-6xl text-white font-black leading-snug"
          >Careers</h2>
          <p
            class="mt-10 text-2xl text-white leading-tight"
          >We embrace people of all backgrounds, experiences,<br>
            culture, styles and talents. Join us!</p>
          <div class="flex mt-8">
            <span class="text-white text-2xl">View More</span>
            <svg
              class="w-8 h-8 ml-10 group-hover:ml-16 fill-white duration-150"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
            >
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </div>
        </section>
        <figure
          class="w-2/6 overflow-hidden"
        >
          <img
            class="group-hover:scale-110 duration-500 object-cover object-center"
            src="/img/helena-hertz-wWZzXlDpMog-unsplash.jpg"
          >
        </figure>
      </NuxtLink>
    </div>
    <div
      class="careers-contact flex flex-auto items-center justify-center mt-20 overflow-hidden relative group"
    >
      <div class="careers-contact-image absolute inset-0 group-hover:scale-105 duration-500 -z-10"></div>
      <section
        class="careers-contact-us text-center text-white duration-300"
      >
        <h2
          class="text-6xl font-black leading-snug"
        >Contact Us</h2>
        <p
          class="mt-4 text-xl leading-tight"
        >Address</p>
        <ul class="flex gap-10 mt-10 text-xl">
          <li>Tel : 888-888-8888</li>
          <li>Fax : 888-888-8888</li>
          <li>Email : sadfa@asdfasdf.com</li>
        </ul>
      </section>
    </div>
    <button
      class="p-5 fixed left-0 bottom-16 border z-50"
      @click="store.careers = !store.careers"
    >OPEN!</button>
  </div>

</template>