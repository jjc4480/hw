<script setup lang="ts">

const heading = [ // head 애니메이션 요소들 배열 item마다 newline으로 처리
  'Your Trusted Partner For',
  'Manufacturing and Process',
  'Piping Solutions~~~~~'
]

const contents = [ // content 애니메이션 요소들 배열 item마다 newline으로 처리
  'Built on a foundation of trust, we provide our clients with unmatched value,',
  'our employees with a safe work environment and entrepreneurial culture,',
  'and the communities we serve with innovation and excellence.~~~~~~~'
]
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="container mx-auto relative">
      <div
        class="absolute top-[30vh] left-0 z-10"
      >
        <section
          class="grid 2xl:px-0 px-5 2xl:text-6xl text-4xl text-white font-black leading-snug"
        >
          <h2
            class="infomation-char flex overflow-hidden"
            v-for="text in heading"
          >
            <span
              class="block"
              v-for="(word, index) in text.split('')"
              :style="`animation-delay: ${index * 0.05}s`"
            >{{ word }}</span>
            <!-- 각각 문자열마다 0.05초 지연하여 애니메이션 -->
          </h2>
        </section>

        <article
          class="mt-16 2xl:px-0 px-5 2xl:text-3xl text-xl text-white leading-tight"
        >
          <p
            class="infomation-char flex overflow-hidden"
            v-for="text in contents"
          >
            <span
              class="block"
              v-for="(word, index) in text.split('')"
              :style="`animation-delay: ${1 + (index * 0.05)}s`"
            >{{ word }}</span>
            <!-- 각각 문자열마다 0.05초 지연하여 애니메이션 이는 제목보다 느리게 하기위해 +1을 해준다 -->
          </p>
        </article>
      </div>
    </div>
  </div>
</template>