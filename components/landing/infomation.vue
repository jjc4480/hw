<script setup lang="ts">

const heading = [
  'Your Trusted Partner For',
  'Manufacturing and Process',
  'Piping Solutions~~~~~'
]

const contents = [
  'Built on a foundation of trust, we provide our clients with unmatched value,',
  'our employees with a safe work environment and entrepreneurial culture,',
  'and the communities we serve with innovation and excellence.~~~~~~~'
]
</script>

<template>
  <div class="relative overflow-hidden">
    <div
      class="absolute top-[30vh] left-[10vw] z-10"
    >
      <section
        class="grid text-6xl text-white font-black leading-snug"
      >
        <h2
          class="char-animation flex overflow-hidden"
          v-for="text in heading"
        >
          <span
            class="block"
            v-for="(word, index) in text.split('')"
            :style="`animation-delay: ${index * 0.05}s`"
          >{{ word }}</span>
        </h2>
      </section>

      <article
        class="mt-16 text-3xl text-white leading-tight"
      >
        <p
          class="char-animation flex overflow-hidden"
          v-for="text in contents"
        >
          <span
            class="block"
            v-for="(word, index) in text.split('')"
            :style="`animation-delay: ${1 + (index * 0.05)}s`"
          >{{ word }}</span>
        </p>
      </article>
    </div>
  </div>
</template>