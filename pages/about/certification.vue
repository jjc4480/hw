<script setup lang="ts">

defineProps({
  scrollTrigger: {
    // 스크롤시 이벤트를 트리거해준다!
    type: Number,
    required: true,
  },
})

let article = ref() // 이미지 영역






// 8개의 certification

/* 

  아래의 title을 가진 8개의 인증서

  [안전보건경영시스템(ISO 45001)

  ,건설업등록증

,건설업등록증-가스시설시공업제1종

,소방시설업등록증

,연구개발전담부서 인정서

,경영혁신형 중고기업(메인비즈)확인서

,ISO9001

,ISO14001 ]

*/
let certifications = ref([
  {
    index: 1,
    title: "안전보건경영시스템(ISO 45001)",
    imageSrc : '/certifications/1.jpg',
  },
  {
    index: 2,
    title: "건설업등록증",
    imageSrc : '/certifications/2.jpg',
  },
  {
    index: 3,
    title: "건설업등록증-가스시설시공업제1종",
    imageSrc : '/certifications/3.jpg',
  },
  {
    index: 4,
    title: "소방시설업등록증",
    imageSrc : '/certifications/4.jpg',
  },
  {
    index: 5,
    title: "연구개발전담부서 인정서",
    imageSrc : '/certifications/5.jpg',
  },
  {
    index: 6,
    title: "경영혁신형 중고기업(메인비즈)확인서",
    imageSrc : '/certifications/6.jpg',
  },
  {
    index: 7,
    title: "ISO9001",
    imageSrc : '/certifications/7.jpg',
  },
  {
    index: 8,
    title: "ISO14001",
    imageSrc : '/certifications/8.jpg',
  }
]
)  // DB 개념이라고 보면 됨 todo들의 객체가 모여있는 배열

const serachText = ref('') // 하나의 변수(ref)를 만든다.

const fileteredCertifications = computed(() => { 
  if (serachText.value) {       
    return certifications.value.filter((certification) => { 
      return certification.title.includes(serachText.value)   
    })
  }
  else { return certifications.value } 
})
</script>

<template>
  <div>
    <h2 class="my-20 text-6xl text-center font-black">인증현황</h2>
    <!-- <div class="container flex justify-center max-w-3xl py-20 mx-auto">
        <input
        type="search"
        class="w-3/4 px-2 border-b-2 h-14"
        v-model="serachText"
        placeholder="검색어를 입력해주세요"
        />
        <button class="px-2 border-b-2" type="submit">
          <svg
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
            <path
            d="M15.755 14.255h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23 6.5 6.5 0 1 0-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5Zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5Z"
            ></path>
          </svg>
        </button>
    </div> -->

    <div
    class="pages-fade container flex w-full h-full bg-transparent mx-auto flex-col items-center"
    :class="
      article?.offsetTop < scrollTrigger
        ? 'pages-fade-done'
        : 'pages-fade-bottom'
    "
    ref="article"
  >

    <ul
      class="container my-20 grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14"
    >
      <li
        class="items-center group w-full bg-transparent hover:bg-gray-700 hover:text-white transition-colors duration-500 ease-in-out"
        v-for="certification in fileteredCertifications"
      >
        <div class="relative px-10 pt-10 pb-0 h-[36rem] flex overflow-hidden">
          
          <div class="absolute top-0 right-0 left-0 w-full h-4/5">
            <img
              class="absolute w-full h-full bottom-0 left-0 object-cover group-hover:transform group-hover:scale-110 transition-all duration-500 ease-in-out"
              :src="certification.imageSrc"
              alt="hyoungwon news"
            />
          </div>
          <div class="text-lg absolute -bottom-12  h-1/5 font-semibold">
            <p class="line-clamp-5 min-h-full sm:line-clamp-2">
              {{ certification.title }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>
