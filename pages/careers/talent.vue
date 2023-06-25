<script setup lang="ts">
const list = [
  {
    icon: "/img/icon-Mechanical.png",
    title: "창의적인 인재",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    icon: "/img/icon-Mechanical.png",
    title: "창의적인 인재",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    icon: "/img/icon-Mechanical.png",
    title: "창의적인 인재",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    icon: "/img/icon-Mechanical.png",
    title: "창의적인 인재",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
]
</script>

<template>
  <div class="px-8 mx-auto container">
    <h2 class="text-6xl mt-20 text-center">
      Talent Lorem ipsum dolor sit amet
    </h2>
    <h2 class="font-bold text-6xl my-10 text-center">asdasdff</h2>

    <ul
      class="flex items-center justify-center flex-wrap border-t-4 border-black pt-20"
    >
      <li v-for="item in list" class="flex py-10 border-b">
        <div class="w-24 mx-12">
          <img :src="item.icon" />
        </div>

        <div class="flex flex-col">
          <div class="flex font-bold text-3xl mb-6">{{ item.title }}</div>

          <div class="flex text-lg">
            {{ item.content }}
          </div>
        </div>
      </li>
    </ul>

    <div class="">
      <a
        class="lg:flex container justify-center lg:max-w-[100%] lg:h-auto h-20 mx-auto group duration-700 hidden py-20 delay-75"
        href="/careers/recruit"
      >
        <section
          class="lg:w-[55%] flex flex-col justify-center w-full lg:h-auto h-full lg:pl-16 pl-0 lg:bg-hw bg-black/50 z-10 text-center"
        >
          <h2
            class="2xl:text-5xl text-3xl text-white font-black leading-snug lg:text-left text-center"
          >
            Careers
          </h2>
          <p
            class="mt-10 2xl:text-xl text-lg text-white leading-tight lg:text-left text-center"
          >
            We embrace people of all backgrounds, experiences,<br />
            culture, styles and talents. Join us!
          </p>
          <div class="lg:flex hidden mt-8">
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
            class="w-full h-full group-hover:scale-110 duration-500 object-cover object-center"
            src="/img/helena-hertz-wWZzXlDpMog-unsplash.png"
          />
        </figure>
      </a>
    </div>
  </div>
</template>
