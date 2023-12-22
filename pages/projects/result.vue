<script setup lang="ts">

let posts = ref([
    {   index : 1,
        year: 2021,
        company : '회사명',
        location: '경기도 안산시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 2,
        year: 2021,
        company : '회사명',
        location: '경기도 안산시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 3,
        year: 2021,
        company : '회사명',
        location: '경기도 안산시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 4,
        year: 2021,
        company : '회사명',
        location: '경기도 안산시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 5,
        year: 2021,
        company : '회사명',
        location: '경기도 안산시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 6,
        year: 2021,
        company : '회사명',
        location: '경기도 포천시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 7,
        year: 2021,
        company : '회사명',
        location: '경기도 안산시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 8,
        year: 2021,
        company : '회사명',
        location: '경기도 안산시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 9,
        year: 2021,
        company : '회사명',
        location: '경기도 안산시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 10,
        year: 2021,
        company : '회사명',
        location: '경기도 수원시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 11,
        year: 2021,
        company : '회사명',
        location: '경기도 안산시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 12,
        year: 2021,
        company : '회사명',
        location: '경기도 의정부시',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },
    {   index : 13,
        year: 2021,
        company : '회사명',
        location: '경기도 안산시 단원구',
        content: '안산시 단원구 고잔동 681-1번지',
        category: '건축',
        etc: '주택',
    },

])

let currentPage = ref(1) // 현재 페이지
let postsPerPage = ref(10) // 한 페이지에 보여줄 게시글 수
let totalPosts = ref(posts.value.length) // 전체 게시글 수
let totalPage = ref(10) // 전체 페이지 수

const handlePageChange = (page: number) => {
    if(page < 1) page = 1
    if(page > totalPage.value) page = totalPage.value
    currentPage.value = page
}

const serachText = ref('') // 하나의 변수(ref)를 만든다.

const handleSearch = () => {
    currentPage.value = 1
    
}

const fileteredPosts = computed(() => {
    
    // postsPerPage의 값만큼만 가져오도록
    const startIndex = (currentPage.value - 1) * postsPerPage.value
    const endIndex = startIndex + postsPerPage.value
    totalPosts.value = posts.value.length
    totalPage.value = Math.ceil(totalPosts.value / postsPerPage.value)
    if (serachText.value) {    
        return posts.value.filter((post) => { 
            return post.year.toString().includes(serachText.value) || post.location.includes(serachText.value) || post.content.includes(serachText.value) || post.category.includes(serachText.value) || post.etc.includes(serachText.value)
        }).slice(startIndex, endIndex)
    }
    else { return posts.value.slice(startIndex, endIndex) }
})
</script>

<template>
  <div>
    
    <h2 class="my-10 text-6xl text-center font-black">사업실적</h2>
    <h4 class="my-10 text-3xl text-center font-semibold">㈜형원이엔지의 주요 사업실적을 소개합니다.</h4>
    <div class="container pb-20 mx-auto">
      <table class="w-full border-t-2 border-black table-fixed">
        <thead>
          <tr class="[&>th]:py-3">
            <th>연도</th>
            <th>발주처</th>
            <th>위치</th>
            <th>공 사 내 용</th>
            <th>구분</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b hover:bg-slate-100 [&>td]:py-3 [&>td]:px-2 text-center"
            v-for="item in fileteredPosts"
            :key="item.index"
          >
            <td>{{ item.year }}</td>
            <td>{{ item.company }}</td>
            <td>{{ item.location }}</td>
            <td>{{ item.content }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.etc }}</td>
        </tr>
        </tbody>
      </table>
      <div class="flex justify-center w-full py-16 space-x-4">
        <div
          class="flex items-center justify-center text-gray-400 cursor-pointer hover:text-black"
          @click="handlePageChange(1)"
        >
          <svg
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6 6 6Z"
            ></path>
            <path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6 6 6Z"></path>
          </svg>
        </div>
        <div
          class="flex items-center justify-center text-gray-400 cursor-pointer hover:text-black"
          @click="handlePageChange(currentPage - 1)"
        >
          <svg
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.705 16.59 11.125 12l4.58-4.59L14.295 6l-6 6 6 6 1.41-1.41Z"
            ></path>
          </svg>
        </div>
        
        <ul class="flex space-x-4">
            <li
                class="flex items-center justify-center py-2 text-xl text-center border-gray-400 cursor-pointer hover:text-black"
                v-for="page in totalPage"
                :key="page"
                @click="currentPage = page"
                :class="[ currentPage === page ? 'border-b-2 text-black' : 'text-gray-400']"
            >
                {{ page }}
            </li>
        </ul>
        
        <div
          class="flex items-center justify-center text-gray-400 cursor-pointer hover:text-black"
          @click="handlePageChange(currentPage + 1)"
        >
          <svg
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m8.295 16.59 4.58-4.59-4.58-4.59L9.705 6l6 6-6 6-1.41-1.41Z"
            ></path>
          </svg>
        </div>
        <div
          class="flex items-center justify-center text-gray-400 cursor-pointer hover:text-black"
          @click="handlePageChange(totalPage)"
        >
          <svg
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6-6-6Z"></path>
            <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6-6-6Z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
