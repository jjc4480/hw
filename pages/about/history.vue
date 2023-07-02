<script setup lang="ts">
defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})
const infomation = ref() // 소개영역

// currentTab Value 를 바꿀 때 에러나서 일단 any 처리
const historyList = {
  start: {
    title: "start",
    range: "2009 ~ 2020",
    items: [
      {
        "2009": [
          {
            month: "12",
            content: `Established HYOUNGWON ENG Co., Ltd`,
          },
        ],
        "2010": [
          {
            month: "12",
            content: `Acquired Mechanical Engineering Construction License`,
          },
        ],
        "2015": [
          {
            month: "09",
            content: `Enrolled XI C&A Subcontractor`,
          },
          {
            month: "12",
            content: `Acquired Fire Protection Service Business Registration`,
          },
        ],

        "2017": [
          {
            month: "03",
            content: `Acquired ISO 9001 & 14001`,
          },
          {
            month: "06",
            content: `Acquired Tier 1 Gas Facilities Construction License`,
          },
        ],

        "2018": [
          {
            month: "07",
            content: `Established Vietnam Corporation`,
          },
        ],

        "2020": [
          {
            month: "12",
            content: `Enrolled LG Display Subcontractor Established Poland Corporation`,
          },
        ],
      },
    ],
  },
  present: {
    title: "present",
    range: "2021 ~",
    items: [
      {
        "2021": [
          {
            month: "11",
            content: `Sap Flow Measurement System install for Korea Apple Research Institute`,
          },
          {
            month: "12",
            content: `Acquired R&D Department’s Certificate Received 58th Day of Export 3M USD Export Tower Awards`,
          },
        ],

        "2022": [
          {
            month: "04",
            content: `Acquired Business Innovation Small and Medium Business Certificate`,
          },
          {
            month: "12",
            content: `Awarded XI C&A’s outstanding(Mechanical) Subcontractor`,
          },
        ],

        "2023": [
          {
            month: "1",
            content: `Registered as Korea Semiconductor Industry Association Member`,
          },
          {
            month: "3",
            content: `Established TX, US Corporation`,
          },
          {
            month: "6",
            content: `Established GA, US Corporation`,
          },
        ],
      },
    ],
  },
} as any

let currentTab = ref(historyList.start) // 현재 탭

const handleClick = (event: MouseEvent) => {
  const target = event.target as HTMLButtonElement
  currentTab.value = historyList[target.value]
}
</script>

<template>
  <div class="container mx-auto py-20 justify-center overflow-hidden">
    <section
      ref="infomation"
      class="pages-fade mt-20"
      :class="
        infomation?.offsetTop < scrollTrigger
          ? 'pages-fade-done'
          : 'pages-fade-right'
      "
    >
      <h2 class="text-6xl mb-40 text-center">History</h2>

      <div
        class="tab-select relative text-center flex w-3/4 justify-around mx-auto"
      >
        <span class="inline-block relative min-w-[100px my-12">
          <button
            class="tab-button pt-14 leading-9 text-3xl inline-block"
            :class="
              currentTab.title === historyList.start.title ? 'active' : ''
            "
            @click="handleClick"
            value="start"
          >
            start
          </button>
        </span>
        <span class="inline-block relative min-w-[100px my-12">
          <button
            class="tab-button pt-14 leading-9 text-3xl inline-block"
            :class="
              currentTab.title === historyList.start.title ? '' : 'active'
            "
            @click="handleClick"
            value="present"
          >
            present
          </button>
        </span>
      </div>

      <div
        class="bg-hw flex py-8 px-20 text-white flex-col items-center justify-center space-y-4"
      >
        <div class="text-3xl">{{ currentTab.title }}</div>
        <div class="text-4xl">{{ currentTab.range }}</div>
      </div>

      <div class="history-container container md:mx-auto mt-20 mb-2 w-14">
        <img src="/img/logo.png" alt="" />
      </div>
      <div class="container">
        <div class="w-full h-20 items-center grid grid-cols-7">
          <div class="col-start-3 col-end-4 text-end">
            <h1 class="text-3xl">2023</h1>
          </div>
          <div class="col-start-4 col-end-5 flex">
            <div
              class="hidden md:block w-1/2 h-[0.5px] bg-black box-content"
            ></div>
          </div>

          <div class="col-start-5 col-end-7 flex space-x-5 items-center">
            <h1 class="text-3xl">12</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos repellendus !
            </p>
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
    left: 0.3rem;
  }
}
</style>
