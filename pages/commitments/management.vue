<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})
const image1 = ref() // 이미지 영역

</script>

<template>
  <div>
    <div
      class="flex flex-col container items-center mx-auto py-20 gap-20 justify-center overflow-hidden"
    >
      <div class="flex h-screen w-full gap-20 ">
        <section
          ref="image1"
          class="pages-fade flex flex-col items-center"
          :class="
            image1?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
        >
          <h3 class="mt-10 text-6xl font-black space-y-2">Management</h3>
          <p class="mt-16 text-2xl">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi soluta autem quae, culpa pariatur quis aut? Consequatur laboriosam nisi quae alias cupiditate, eius, architecto nobis dignissimos ratione, tempora ipsam consequuntur.
          </p>

          <figure class="mt-20">
            <img src="/img/pdca.png" alt="" />
          </figure>
          <p class="mt-16 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus doloremque obcaecati iure asperiores temporibus iusto dolore, in excepturi ducimus perferendis eligendi delectus sequi explicabo. Asperiores exercitationem harum magni dolorum?
          </p>
        </section>
    </div>
    </div>
  </div>
</template>
