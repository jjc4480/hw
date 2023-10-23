<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})

const management = ref()
const image1 = ref() // 이미지 영역
const image2 = ref()
const image3 = ref()

</script>

<template>
  <div>
    <div
      class="flex flex-col container items-center mx-auto py-20 gap-20 justify-center overflow-hidden"
    >
      
      <div>
        <section
          ref="management"
          class="pages-fade flex flex-col space-y-20 pb-20 "
          :class="
            management?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
        >
          <h3 class="text-6xl font-black text-center">품질 경영</h3>
          
          <figure class="mt-20">
            <img src="/img/pdca.png" alt="" />
          </figure>
          <p class="text-2xl">
            <strong class="font-bold">HYOUNGWON</strong>'s Quality Management System is as follows.
            <br /> <br />
            Based on PDCA, we are committed to increasing customer satisfaction by adding our own system, <strong class="text-[#9B1D20] font-bold">TOS</strong>.
            <br /> <br /> 
            A <strong class="text-[#9B1D20] font-bold">TOS</strong> system is a system that adds Training, Overlap, and Signal, which includes more specific and fractionized procedures during the Plan, Action, and Check phases, respectively.
            <br /> <br />
            <strong class="uppercase text-[#B7A196] font-bold">Training</strong> allows you to plan while sharing and training case analysis results.
            <br /> <br />
            <strong class="uppercase text-[#10446D] font-bold">Overlap</strong> provides cross-checking based on the manual and specifies the manager of each task so that action can be performed.
            <br /> <br />
            <strong class="uppercase text-[#008C95] font-bold">Signal</strong> extracts, analyzes, and improves repeated faults more than three times to complement the check.
          </p>
        </section>
      </div>

      <div class="flex flex-col-reverse md:flex-row gap-x-20 gap-y-10">
        <!-- mobile 일 경우, 이미지가 밑으로. -->

        <section
          class="pages-fade flex flex-col w-full md:w-1/2"
          :class="
            image1?.offsetTop - 500 < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
        >
          <h3 class="mt-10 text-6xl font-black space-y-2">품질</h3>
          <p class="mt-16 text-xl">
            Hyoungwon will ensure that all project ts are executed in accordance
            with contract specifications and drawings, within the contractual
            time frame, and in compliance with all legal requirements thus
            providing good value and satisfaction to our client. We do this by
            employing the best qualified employees and seeking out and using
            reputable, state of the art equipment's and products. This will
            produce a service that conforms to specified standards of quality,
            reliability, and performance.
            <br />
          </p>
        </section>
        <figure
          class="pages-fade flex w-full md:w-1/2"
          :class="
            image1?.offsetTop - 500 < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-right'
          "
          ref="image1"
        >
          <img class="w-full object-cover" src="/img/Qhse1.jpg" />
        </figure>
      </div>
      <div class="flex flex-col md:flex-row gap-x-20 gap-y-10">
        <!-- mobile 일 경우, 이미지가 밑으로. -->
        <figure
          class="pages-fade flex w-full md:w-1/2"
          :class="
            image2?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-right'
          "
          ref="image2"
        >
          <img class="w-full object-cover" src="/img/Qhse2.jpg" />
        </figure>
        <section
          class="pages-fade flex flex-col w-full  md:w-1/2"
          :class="
            image2?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
        >
          <h3 class="mt-10 text-6xl font-black space-y-2">안전 & 보건</h3>
          <p class="mt-16 text-xl">
            Hyoungwon is fully committed to encouraging a culture of openness
            within our workforce regarding health and safety. Our policy is to
            do all that is reasonably practicable to prevent personal injury and
            damage to property and to protect everyone from foreseeable risks,
            including the public, insofar as they interface with the Company or
            our activities.
            <br />
          </p>
        </section>
      </div>
      <div class="flex flex-col-reverse md:flex-row gap-x-20 gap-y-10">
        <!-- mobile 일 경우, 이미지가 밑으로. -->

        <section
          class="pages-fade flex flex-col w-full md:w-1/2"
          :class="
            image3?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-left'
          "
        >
          <h3 class="mt-10 text-6xl font-black space-y-2">환경</h3>
          <p class="mt-16 text-xl">
            Hyungwon's environmental policy is very intuitive. We will do
            everything we can to protect the environment and find better ways to
            do it. Our policy establishes a consistent standard intended to
            protect the environment by establishing sound practices that support
            compliance, while minimizing negative environmental impacts.
            <br />
          </p>
        </section>
        <figure
          class="pages-fade flex w-full md:w-1/2"
          :class="
            image3?.offsetTop < scrollTrigger
              ? 'pages-fade-done'
              : 'pages-fade-right'
          "
          ref="image3"
        >
          <img class="w-full object-cover" src="/img/Qhse3.jpg" />
        </figure>
      </div>
    </div>
  </div>
</template>
