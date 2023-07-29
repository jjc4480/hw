<script setup lang="ts">


let posts = ref([
  {
    index: 1,
    tag: "공지사항",
    title: "[형원이엔지] 경영관리부 (세무회계) 경력직 채용",
    regDate: "2022-09-19",
    endDate: "2022-12-31",
    status: "마감",
  },
  {
    index: 2,
    tag: "공지사항",
    title: "[형원이엔지] 경영관리부 (세무회계) 경력직 채용",
    regDate: "2022-09-19",
    endDate: "2022-12-31",
    status: "마감",
  },
]
)  // DB 개념이라고 보면 됨 todo들의 객체가 모여있는 배열
   
const serachText = ref('') // 하나의 변수(ref)를 만든다.

const fileteredPosts = computed(() => { 
  if (serachText.value) {       
    return posts.value.filter((post) => { 
      return post.title.includes(serachText.value)   
    })
  }
  else { return posts.value } 
})
</script>

<template>
  <div>
    <h2 class="my-20 text-6xl text-center">Careers</h2>
    <div
      class="bg-fixed bg-center bg-cover project-portfolio-image py-28"
    ></div>

    <div class="container flex justify-center max-w-3xl py-20 mx-auto">
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
    </div>

    <div class="container pb-20 mx-auto">
      <table class="w-full border-t-2 border-black table-fixed">
        <thead class="hidden">
          <tr>
            <th>tag</th>
            <th>regDate</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b hover:bg-slate-100"
            v-for="item in fileteredPosts"
            :key="item.index"
          >
          
            <td class="w-9/12 p-4 py-8">
                <div
                class="flex flex-col md:items-center md:flex-row md:space-x-5"
                >
                <div class="w-20 p-2 text-center text-white bg-black min-w-max">
                  {{ item.tag }}
                </div>
                <NuxtLink :to="{ path : `/careers/recruit/${item.index}`, params : item}"><div class="text-lg">{{ item.title }}</div></NuxtLink>
              </div>
            </td>
            <td class="w-3/12 py-8 text-center text-slate-600">
              <div class="flex flex-col space-x-2 lg:flex-row">
                <div>{{ item.regDate }} ~</div>
                <div>{{ item.endDate }}</div>
              </div>
            </td>
            <td class="w-2/12 p-4 py-8">
              <div
              class="w-full p-2 mx-auto text-center bg-white border min-w-max text-slate-400 border-slate-400"
              >
              {{ item.status }}
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="flex justify-center w-full py-16">
        <div
          class="flex items-center justify-center mx-2 text-gray-400 cursor-pointer hover:text-black"
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
          class="flex items-center justify-center mx-2 text-gray-400 cursor-pointer hover:text-black"
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
        <div
          class="flex items-center justify-center w-10 py-2 mx-2 text-xl text-center text-gray-400 border-b-2 border-gray-400 cursor-pointer hover:text-black"
        >
          1
        </div>
        <div
          class="flex items-center justify-center mx-2 text-gray-400 cursor-pointer hover:text-black"
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
          class="flex items-center justify-center mx-2 text-gray-400 cursor-pointer hover:text-black"
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
