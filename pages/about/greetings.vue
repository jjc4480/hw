<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})
const greetings = ref() // 이미지 영역
</script>

<template>
  <div class="font-pre">
    <div
      class="container pages-fade flex items-center flex-col-reverse lg:flex-row mx-auto py-20 gap-20 justify-center overflow-hidden"
      :class="
        greetings?.offsetTop < scrollTrigger
          ? 'pages-fade-done'
          : 'pages-fade-bottom'
      "
      ref="greetings"
    >
      <!-- mobile 일 경우, 이미지가 밑으로. -->
      <section
        class="flex flex-col w-full lg:w-1/2 lg:border-r lg:border-hw lg:pr-10"
      >
        <h2 class="text-2xl text-hw font-bold">CEO Message</h2>
        <h3 class="mt-10 text-6xl font-black space-y-2">
          <div>“임직원의 능력과 경험을 바탕으로</div>
          <div>앞으로 끊임없이 변화와 혁신을 이끌어 내는 기업이 되겠습니다.”​</div>
        </h3>
        <p class="mt-16 text-xl ">
형원이엔지는 지난 2009년 고객의 가치를 최우선으로 실현하며 변화와 혁신을 이끌겠다는 목표로 출발하였습니다.​ <br /><br />
LG Display M5 Project 수행을 시작으로 반도체, 디스플레이 등에 필수적인 Utility System (Ultra High Purity Gas/Chemical/N2/CDA/PCW/P-VAC/H-VAC), P-Drain, Exhaust Duct 등의 초석을 다진 강한 기업입니다.​<br /><br />
현재 LG Display, LG 이노텍, LG전자, SK hynix를 포함한 반도체/디스플레이/UTILITY 기계설비, 소방설비 공정에서 프로젝트를 성공적으로 수행하며 기술력과 사업 관리 능력을 내세워 경쟁력 있는 전문 건설 회사로 인증 받고 있습니다.​<br /><br />
​철저한 Risk 분석을 통해 사업과 시장의 다각화와 다변화 등에 힘쓰며 설비 분야에서 경쟁력 있는 회사로 거듭나기​
위해 노력하고 있습니다.​<br /><br />

형원이엔지의 구성원 각각은 이 분야의 최고 기술자이며, 당장의 이익보다 미래를 내다보는 경영과 고객 만족을 위한 지속적인 노력을 다하고 있습니다.​<br /><br />감사합니다.<br /><br />
          <div class="flex ml-auto items-center justify-center">
            <span class="text-4xl font-bold">대 표 이 사</span>
            <img class="w-80" src="/img/sign.jpg" />
          </div>
        </p>
      </section>

      <figure class="flex px-4 w-full lg:w-1/2">
        <img class="w-full object-cover" src="/img/ceo.jpg" />
      </figure>
    </div>
  </div>
</template>
