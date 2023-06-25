<script setup lang="ts">
const boardItems = [
  {
    index: 1,
    tag: "공지사항",
    title: "[형원이엔지] 경영관리부 (세무회계) 경력직 채용",
    regDate: "2022-09-19 ~ 2022-12-31",
    status: "마감",
  },
  {
    index: 2,
    tag: "공지사항",
    title: "[형원이엔지] 경영관리부 (세무회계) 경력직 채용",
    regDate: "2022-09-19 ~ 2022-12-31",
    status: "마감",
  },
]
</script>

<template>
  <div>
    <h2 class="text-6xl my-20 text-center">Careers</h2>
    <div
      class="project-portfolio-image py-28 bg-fixed bg-center bg-cover"
    ></div>

    <div class="container mx-auto py-20 flex justify-center max-w-3xl">
      <input
        type="search"
        class="border-b-2 w-3/4 h-14"
        placeholder="검색어를 입력해주세요"
      />
      <button class="border-b-2 px-2" type="submit">
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

    <div class="container mx-auto pb-20">
      <table class="table-fixed w-full border-t-2 border-black">
        <thead class="hidden">
          <tr>
            <th>tag</th>
            <th>title</th>
            <th>regDate</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b hover:bg-slate-100"
            v-for="item in boardItems"
            :key="item.index"
          >
            <td class="py-8 w-1/12 text-center p-4">
              <div class="p-2 bg-black text-white">{{ item.tag }}</div>
            </td>
            <td class="py-8 w-8/12 text-lg">
              {{ item.title }}
            </td>
            <td class="py-8 w-2/12 text-slate-600 text-center">
              {{ item.regDate }}
            </td>
            <td class="py-8 w-1/12 p-4">
              <div
                class="p-2 w-16 text-center mx-auto bg-white text-slate-400 border border-slate-400"
              >
                {{ item.status }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="w-full py-16 flex justify-center">
        <div
          class="mx-2 flex justify-center items-center hover:text-black cursor-pointer text-gray-400"
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
          class="mx-2 hover:text-black flex justify-center items-center cursor-pointer text-gray-400"
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
          class="mx-2 hover:text-black flex justify-center items-center cursor-pointer text-gray-400 w-10 text-center text-xl py-2 border-b-2 border-gray-400"
        >
          1
        </div>
        <div
          class="mx-2 hover:text-black flex justify-center items-center cursor-pointer text-gray-400"
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
          class="mx-2 hover:text-black flex justify-center items-center cursor-pointer text-gray-400"
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
