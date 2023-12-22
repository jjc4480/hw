<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})

const phil1 = ref() 
const phil2 = ref() 



</script>

<template>
    <div
      class="container flex flex-col items-center justify-center gap-x-20 py-20 mx-auto overflow-hidden"
    >
      <section 
        ref="phil1"
        class="flex flex-col justify-center items-center space-y-6 pages-fade" 
        :class="
          phil1?.offsetTop < scrollTrigger
            ? 'pages-fade-done'
            : 'pages-fade-bottom'
        "
      >
        <h1 class="text-5xl font-bold">
          경영이념
        </h1>
        
        <h2 class="text-3xl font-bold">
          自利利他 (자리이타)
        </h2>
        
        <p class="text-xl"> 
          형원이엔지는 남을 이롭게 함으로써 내가 이롭게 된다는 자리이타의 정신을 기반으로 
          이해관계자들 및 지역사회와 동반 성장하기를 소망합니다. 
        </p>
      </section>

      <section 
        ref="phil2"
        class="flex flex-col items-center justify-center mt-16 space-y-6 pages-fade"
        :class="
          phil2?.offsetTop < scrollTrigger
            ? 'pages-fade-done'
            : 'pages-fade-bottom'"
      >

        <h1 class="text-5xl font-bold">
          비전
        </h1>
        
        <h2 class="text-3xl font-bold">
          SEA 2025
        </h2>
        
        <ul class="grid grid-cols-4 space-x-10 text-4xl w-full items-center justify-around" >
          <li class="flex flex-col space-y-4 col-span-1 min-h-full">
            <div class="flex flex-col justify-center items-center relative">
              <div class="bg-gray-200 w-32 h-32 rounded-full"></div>
              <div class="absolute">S</div>
            </div>
            <div class="flex flex-col items-center justify-center text-xl space-y-2 text-center">
              <p class="font-bold">System</p>
              <p>체계적 업무절차를 확립하고 </p>
            </div>
          </li>
          
          <li class="flex flex-col space-y-4 col-span-1 min-h-full">
            <div class="flex flex-col justify-center items-center relative">
              <div class="bg-gray-200 w-32 h-32 rounded-full"></div>
              <div class="absolute">E</div>
            </div>
            <div class="flex flex-col items-center justify-center text-xl space-y-2 text-center">
              <p class="font-bold">Expansion</p>
              <p>사업영역 및 개인 업무역량을 확장하며</p>
            </div>
          </li>
          
          <li class="flex flex-col space-y-4 col-span-1 min-h-full">
            <div class="flex flex-col justify-center items-center relative">
              <div class="bg-gray-200 w-32 h-32 rounded-full"></div>
              <div class="absolute">A</div>
            </div>
            <div class="flex flex-col items-center justify-center text-xl space-y-2 text-center">
              <p class="font-bold">Active</p>
              <p>자기주도적인 업무 문화를 구축하여</p>
            </div>
          </li>
          
          <li class="flex flex-col space-y-4 col-span-1 min-h-full">
            <div class="flex flex-col justify-center items-center relative">
              <div class="bg-gray-200 w-32 h-32 rounded-full"></div>
              <div class="absolute">2025</div>
            </div>
            <div class="flex flex-col items-center justify-center text-xl space-y-2 text-center">
              <p class="font-bold">System</p>
              <p>2025년 매출액 2025억을 달성하겠습니다.</p>
            </div>
          </li>
        </ul>
      </section>
        
    </div>
</template>
