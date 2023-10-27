<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})
const infomation = ref() // 소개영역
const historyContainer = ref()

let isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 768
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 768
  })
})

// currentTab Value 를 바꿀 때 에러나서 일단 any 처리
const historyList = {
  start: {
    title: "Start",
    range: "2009 ~ 2020",
    items: [
      {
        year : '2020',
        history : [
          {
            month: "12",
            content: [`LG 디스플레이 협력업체 등록`, `폴란드 현지 법인 형원폴란드 설립`],
          },
        ]
      },
      {
        year : '2018',
        history : [
          {
            month: "7",
            content: [`베트남 현지 법인 형원비나 설립`],
          },
        ]
      },
      {
        year : '2017',
        history : [
          {
            month: "3",
            content: [`품질경영시스템(ISO 9001) 획득`, `환경경영시스템(ISO 14001) 획득`],
          },
          {
            month: "6",
            content: [`가스시설시공업 제1종면허 취득`],
          },
        ]
      },
      {
        year : '2015',
        history : [
          {
            month: "9",
            content: [`㈜ 서브원(현.S&I건설) 협력업체 등록`],
          },
          {
            month: "12",
            content: [`전문소방시설공사업 면허 취득`],
          },
        ]
      },
      {
        year : '2010',
        history : [
          {
            month: "11",
            content: [`기계설비공사업 면허 취득`],
          },
        ]
      },
      {
        year : '2009',
        history : [
          {
            month: "12",
            content: [`㈜ 형원이엔지 설립`],
          },
        ]
      }
      
      ],
  },
  present: {
    title: "Present",
    range: "2021 ~",
    items: [
      {
        year : "2022",
        history : [
          {
            month: "4",
            content: [`경영혁신형 중소기업 확인서 취득`],
          },
          {
            month: "10",
            content: [`안전보건경영시스템(ISO 45001) 인증서 취득`]
          },
        ]
      },
      {
        year : '2021',
        history : [
        {
          month: "11",
          content: [`대표이사 김정환 취임`, `원예연구소 사과시험장 수액흐름 측정시스템 설치`],
        },
        {
          month: "12",
          content: [`연구개발전담부서 인정서 취득`, `58회 수출의 날 300만불달성 수출의 탑 수상`],
        },
        ]
      },
    ]
  },
} as any

let currentTab = ref(historyList.start) // 현재 탭

const handleClick = (event: MouseEvent) => {
  const target = event.target as HTMLButtonElement

  if (target.value === currentTab.value.title) return

  historyContainer.value.style.opacity = "0"
  const buttons = document.querySelectorAll(".tab-button")

  buttons.forEach((button) => button.classList.remove("active"))

  target.classList.add("active")
  setTimeout(() => {
    currentTab.value = historyList[target.value.toLowerCase()]
    historyContainer.value.style.opacity = "100"
  }, 1000)
}
</script>

<template>
  <div class="container justify-center pt-20 mx-auto mb-20 overflow-hidden">
    <section
      ref="infomation"
      class="mt-20 pages-fade"
      :class="
        infomation?.offsetTop < scrollTrigger
          ? 'pages-fade-done'
          : 'pages-fade-right'
      "
    >
      <h2 class="mb-40 text-6xl text-center font-black">History</h2>

      <div
        class="relative flex justify-around w-2/4 mx-auto font-semibold text-center tab-select drop-shadow-md"
      >
        <span class="inline-block relative min-w-[100]px my-12">
          <button
            class="inline-block text-3xl leading-9 tab-button pt-14 active"
            @click="handleClick"
            :value="historyList.start.title"
          >
            {{ historyList.start.title }}
          </button>
        </span>
        <span class="inline-block relative min-w-[100px] my-12">
          <button
            class="inline-block text-3xl leading-9 tab-button pt-14"
            @click="handleClick"
            :value="historyList.present.title"
          >
            {{ historyList.present.title }}
          </button>
        </span>
      </div>

      <div
        class="transition-opacity duration-500 ease-in-out"
        ref="historyContainer"
      >
        <div
          class="flex flex-col items-center justify-center px-20 py-8 space-y-4 font-semibold text-white bg-hw drop-shadow-md"
        >
          <div class="text-3xl">{{ currentTab.title }}</div>
          <div class="text-4xl">{{ currentTab.range }}</div>
        </div>

        <div
          class="container pl-2 mt-20 mb-2 history-container md:p-0 md:mx-auto w-14"
        >
          <img src="/img/logo.png" alt="" />
        </div>
        <div class="container drop-shadow-md">
          <div
            v-for="(item, index) in currentTab.items"
            :dir="isMobile ? '' : index % 2 === 0 ? 'rtl' : 'ltr'"
            class="flex flex-col justify-center py-3 pl-24 mb-8 space-y-0 md:pl-0 md:items-center md:grid md:grid-cols-7"
          >
            <div  
              class="text-5xl font-semibold md:text-3xl md:col-start-1 md:col-end-4 ltr:text-right ltr:mr-5 rtl:ml-5 rtl:text-left"
            >
              {{ item.year }}
            </div>
            <div
              class="hidden h-[0.5px] bg-black md:flex md:w-1/2 md:col-start-4 md:col-end-5 md:justify-center md:items-center"
            ></div>

            <div
              v-for="value in item.history"
              class="flex space-x-2 md:col-start-5 md:col-end-7 md:justify-start md:items-center md:space-x-6 rtl:space-x-0 rtl:mr-5 ltr:ml-5"
            >
              <div class="flex my-4">
                <div class="flex items-center text-3xl md:min-w-[30px] min-w-[50px] rtl:ml-5">
                  {{ value.month }}
                </div>
                <div
                  class="flex flex-col justify-center space-y-4 text-lg text-gray-600 ltr:ml-6"
                >
                  <div  v-for="words in value.content"  class="flex">{{ words }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.tab-select::before {
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;
  display: block;
  height: 1px;
  background-color: black;
  background-size: 100%;
  content: "";
}

.tab-button::before {
  position: absolute;
  top: 7px;
  left: 50%;
  width: 20px;
  height: 20px;
  content: "";
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  background: #c4c4c4;
  border-radius: 100%;
}

.tab-button.active::before {
  background: #15818b;
}

.tab-button.active::after {
  position: absolute;
  top: 0px;
  left: 50%;
  width: 36px;
  height: 36px;
  content: "";
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  border-radius: 100%;
  border: 1px solid #15818b;
}

.history-container::before {
  position: absolute;
  top: 45rem;
  left: 50%;
  width: 1px;
  height: auto;
  content: "";
  bottom: 0;
  background: black;
}

@media (max-width: 768px) {
  .history-container::before {
    left: 2rem;
  }
}
</style>
