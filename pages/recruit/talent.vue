<script setup lang="ts">
const list = [
  {
    icon: "/img/talent_1.png",
    title: "창의적인 인재",
    content: "현재에 만족하지 않고 끊임없이 새로운 방법을 모색하는 분.",
    color : '#10446D'
  },
  {
    icon: "/img/talent_2.png",
    title: "진실된 인재​",
    content: "도덕성과 투명성을 갖춘 분.",
    color : '#D4BD83'
  },
  {
    icon: "/img/talent_3.png",
    title: "원칙을 지키는 인재",
    content: "팀워크와 원활한 커뮤니케이션을 바탕으로 공정한 경쟁을 추구하는 분. ​",
    color : '#B7A196'
  },
  {
    icon: "/img/talent_4.png",
    title: "열정적인 인재",
    content: "명확한 비전과 최고가 되고자 하는 열정을 가지고 자신의 능력을 소신껏 발휘하며 결과에 책임을 질 줄 아는 성숙함을 갖춘 분.",
    color : '#9B1D20'
  },
]
</script>

<template>
  <div class="container px-8 mx-auto">
    <h2 class="my-10 text-6xl font-extrabold leading-relaxed text-center">
      <span class="text-hw">㈜형원이엔지</span>와 함께할 인재를 기다립니다.
    </h2>

    <ul
      class="grid items-center justify-center grid-cols-4 border-t-4 border-black"
    >
      <li v-for="item in list" class="flex col-span-4 gap-10 py-10  lg:py-20 border-b xl:col-span-2">
        <div class="w-1/6">
          <img class="object-contain" :src="item.icon" />
        </div>

        <div class="flex flex-col w-3/4 px-6 justify-center">
          <div class="flex mb-6 text-3xl font-bold" :style="`color : ${item.color}`">{{ item.title }}</div>

          <div class="flex h-24 text-2xl">
            {{ item.content }}
          </div>
        </div>
      </li>
    </ul>

    <div class="my-16">
      <a
        class="flex container justify-center lg:max-w-[100%] lg:h-auto h-64 mx-auto group duration-700 delay-75 relative"
        href="/recruit/recruit"
      >
        <section
          class="lg:w-[55%] py-8 flex flex-col justify-center w-full lg:h-auto h-full lg:pl-16 pl-0 top-0 left-0 lg:static absolute lg:bg-hw bg-black/50 z-10 text-center"
        >
          <h2
            class="text-3xl font-black leading-snug text-center text-white 2xl:text-5xl lg:text-left"
          >
            Recruit
          </h2>
          <p
            class="mt-10 text-lg leading-tight text-center text-white 2xl:text-xl lg:text-left"
          >
            형원이엔지와 함께 나아갈 긍정적이고 창의적인 인재를 기다립니다.
          </p>
          <div class="mt-8 lg:flex">
            <span class="text-white 2xl:text-2xl lg:text-lg">View More</span>
            <svg
              class="w-8 h-8 ml-10 group-hover:ml-16 fill-white duration-150"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </section>
        <figure class="lg:w-[25%] w-full overflow-hidden">
          <img
            class="object-cover object-center w-full h-full duration-500 group-hover:scale-110"
            src="/img/career.jpg"
          />
        </figure>
      </a>
    </div>
  </div>
</template>
