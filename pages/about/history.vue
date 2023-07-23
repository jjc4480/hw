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
            content: [`Enrolled LG Display Subcontractor Established Poland Corporation`],
          },
        ]
      },
      {
        year : '2018',
        history : [
          {
            month: "7",
            content: [`Established Vietnam Corporation`],
          },
        ]
      },
      {
        year : '2017',
        history : [
          {
            month: "3",
            content: [`Acquired ISO 9001 & 14001`],
          },
          {
            month: "6",
            content: [`Acquired Tier 1 Gas Facilities Construction License`],
          },
        ]
      },
      {
        year : '2015',
        history : [
          {
            month: "9",
            content: [`Enrolled XI C&A Subcontractor`],
          },
          {
            month: "12",
            content: [`Acquired Fire Protection Service Business Registration`],
          },
        ]
      },
      {
        year : '2010',
        history : [
          {
            month: "12",
            content: [`Acquired Mechanical Engineering Construction License`],
          },
        ]
      },
      {
        year : '2009',
        history : [
          {
            month: "12",
            content: [`Established HYOUNGWON ENG Co., Ltd`],
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
        year : '2023',
        history : [
          {
            month: "1",
            content: [`Registered as Korea Semiconductor Industry Association Member`],
          },
          {
            month: "3",
            content: [`Established TX, US Corporation`],
          },
          {
            month : "5",
            content : [`Enrolled as Samsung ENG & Samsung C&T Corporation’s main Subcontractor`],
          },
          {
            month: "6",
            content: [`Established GA, US Corporation`],
          },
        ]
        
      },
      {
        year : "2022",
        history : [
          {
            month: "4",
            content: [`Acquired Business Innovation Small and Medium Business Certificate`],
          },
          {
            month: "12",
            content: [`Awarded XI C&A’s outstanding(Mechanical) Subcontractor`],
          },
        ]
      },
      {
        year : '2021',
        history : [
        {
          month: "11",
          content: [`Sap Flow Measurement System install for Korea Apple Research Institute`],
        },
        {
          month: "12",
          content: [`Acquired R&D Department’s Certificate`, `Received 58th Day of Export 3M USD Export Tower Awards`],
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
      <h2 class="mb-40 text-6xl text-center">History</h2>

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
            class="flex flex-col justify-center py-3 pl-24 mb-8 space-y-5 md:pl-0 md:items-center md:grid md:grid-cols-7"
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
                  class="flex flex-col space-y-4 text-lg text-gray-600 ltr:ml-6"
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
