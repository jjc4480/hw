<script setup lang="ts">
defineProps({
  scrollTrigger: { // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true
  },
})

const title = ref() // 임시용
const text1 = ref() // 임시용
const text2 = ref() // 임시용
const text3 = ref() // 임시용
</script>

<template>
  <div class="container mx-auto py-20 justify-center overflow-hidden">
    <section
      ref="title"
      class="pages-fade mt-20"
      :class="title?.offsetTop < scrollTrigger ? 'pages-fade-done' : 'pages-fade-top'"
    >
      <h2
        class="text-6xl mb-20 text-center"
      >
        portfolio
      </h2>
    </section>
  </div>
  <div class="project-portfolio-image py-56 bg-fixed bg-center bg-cover">
  </div>
  <div class="container grid gap-20 mx-auto py-20 justify-center overflow-hidden">
    <p
      ref="text1"
      class="pages-fade mt-20 text-2xl"
      :class="text1?.offsetTop < scrollTrigger ? 'pages-fade-done' : 'pages-fade-left'"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.</p>
    <p
      ref="text2"
      class="pages-fade mt-20 text-2xl"
      :class="text2?.offsetTop < scrollTrigger ? 'pages-fade-done' : 'pages-fade-right'"
    >Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Et malesuada fames ac turpis egestas sed. Sit amet nisl suscipit adipiscing bibendum est ultricies. Arcu ac tortor dignissim convallis aenean et tortor at. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eros donec ac odio tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur. Est placerat in egestas erat imperdiet. Consequat interdum varius sit amet mattis vulputate enim.</p>
    <p
      ref="text3"
      class="pages-fade mt-20 text-2xl"
      :class="text3?.offsetTop < scrollTrigger ? 'pages-fade-done' : 'pages-fade-bottom'"
    >Sit amet nulla facilisi morbi tempus. Nulla facilisi cras fermentum odio eu. Etiam erat velit scelerisque in dictum non consectetur a erat. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Ut sem nulla pharetra diam. Fames ac turpis egestas maecenas. Bibendum neque egestas congue quisque egestas diam. Laoreet id donec ultrices tincidunt arcu non sodales neque. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Faucibus interdum posuere lorem ipsum dolor sit.</p>
  </div>
</template>