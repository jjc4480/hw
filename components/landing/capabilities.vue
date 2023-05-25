<script setup lang="ts">

const items = [ // 박스 리스트
  { title: 'Mechanical', image: '/img/Mechanical.jpg' , icon : 'img/icon-Mechanical.png', svg : `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M420 5020 c-11 -11 -20 -29 -20 -40 0 -19 -7 -20 -160 -20 l-160 0 0
-80 0 -80 160 0 160 0 0 -160 0 -160 -160 0 -160 0 0 -80 0 -80 160 0 c153 0
160 -1 160 -20 0 -11 9 -29 20 -40 19 -19 33 -20 220 -20 187 0 201 1 220 20
11 11 20 29 20 40 0 19 7 20 155 20 243 0 245 -2 245 -246 l0 -154 -600 0
-600 0 0 -80 0 -80 600 0 600 0 0 -160 0 -160 -600 0 -600 0 0 -80 0 -80 600
0 600 0 0 -160 0 -160 -600 0 -600 0 0 -80 0 -79 1083 -4 c1164 -3 1108 -1
1227 -54 107 -48 224 -165 273 -273 42 -93 48 -139 54 -375 2 -126 9 -245 15
-264 14 -45 74 -110 123 -132 34 -16 68 -19 233 -19 l192 0 0 -161 0 -162
-202 6 c-182 4 -211 8 -283 31 -125 40 -225 117 -300 229 -74 112 -95 221 -95
505 0 192 -7 221 -63 281 -18 18 -50 42 -72 52 -38 18 -89 19 -1112 19 l-1073
0 0 -80 0 -80 600 0 600 0 0 -773 c0 -737 1 -777 20 -851 63 -248 268 -453
516 -516 75 -19 116 -20 1251 -20 1166 0 1173 0 1173 -20 0 -11 9 -29 20 -40
19 -19 33 -20 220 -20 187 0 201 1 220 20 11 11 20 29 20 40 0 19 7 20 160 20
l160 0 0 80 0 80 -160 0 -160 0 0 160 0 160 160 0 160 0 0 80 0 80 -160 0
c-153 0 -160 1 -160 20 0 11 -9 29 -20 40 -19 19 -33 20 -220 20 -187 0 -201
-1 -220 -20 -11 -11 -20 -29 -20 -40 0 -20 -7 -20 -1115 -20 -1228 0 -1172 -3
-1194 60 -8 24 -11 240 -11 746 l0 714 115 0 c138 0 177 -12 194 -60 7 -21 11
-111 11 -240 0 -173 3 -219 20 -284 63 -248 268 -453 516 -516 65 -17 111 -20
291 -20 206 0 213 -1 213 -20 0 -11 9 -29 20 -40 19 -19 33 -20 220 -20 187 0
201 1 220 20 11 11 20 29 20 40 0 20 7 20 320 20 313 0 320 0 320 -20 0 -11 9
-29 20 -40 19 -19 33 -20 220 -20 187 0 201 1 220 20 11 11 20 29 20 40 0 18
7 20 80 20 l80 0 0 80 0 80 -80 0 -80 0 0 160 0 160 80 0 80 0 0 80 0 80 -80
0 c-73 0 -80 2 -80 20 0 11 -9 29 -20 40 -19 19 -33 20 -220 20 -187 0 -201
-1 -220 -20 -20 -20 -20 -20 -20 40 0 53 2 60 20 60 11 0 29 9 40 20 19 19 20
33 20 220 0 187 -1 201 -20 220 -11 11 -29 20 -40 20 -20 0 -20 7 -20 400 l0
400 320 0 320 0 0 80 0 80 -320 0 -320 0 0 160 0 160 320 0 320 0 0 80 0 80
-320 0 -320 0 0 560 0 560 -80 0 -80 0 0 -1280 0 -1280 -160 0 -160 0 0 1280
0 1280 -80 0 -80 0 0 -560 0 -560 -920 0 -920 0 0 213 c0 180 -3 226 -20 291
-63 248 -268 453 -516 516 -65 17 -111 20 -291 20 -206 0 -213 1 -213 20 0 11
-9 29 -20 40 -19 19 -33 20 -220 20 -187 0 -201 -1 -220 -20z m300 -380 l0
-240 -80 0 -80 0 0 240 0 240 80 0 80 0 0 -240z m615 137 c199 -56 341 -198
403 -402 13 -42 16 -158 19 -732 l4 -683 -160 0 -161 0 0 670 c0 739 2 710
-63 779 -61 64 -89 71 -304 71 l-193 0 0 161 0 162 203 -6 c125 -4 221 -11
252 -20z m2425 -1177 l0 -160 -920 0 -920 0 0 160 0 160 920 0 920 0 0 -160z
m0 -720 c0 -393 0 -400 -20 -400 -11 0 -29 -9 -40 -20 -19 -19 -20 -33 -20
-220 0 -187 1 -201 20 -220 11 -11 29 -20 40 -20 18 0 20 -7 20 -60 0 -60 0
-60 -20 -40 -19 19 -33 20 -220 20 -187 0 -201 -1 -220 -20 -11 -11 -20 -29
-20 -40 0 -19 -7 -20 -154 -20 -88 0 -167 5 -186 11 -54 19 -60 49 -60 287 0
175 -3 221 -20 286 -63 248 -268 453 -516 516 -62 16 -111 20 -251 20 l-173 0
0 160 0 160 920 0 920 0 0 -400z m-2000 -1312 c0 -712 1 -755 19 -793 10 -22
34 -54 52 -72 71 -67 -11 -63 1259 -63 l1150 0 0 -160 0 -161 -1162 3 -1163 3
-80 27 c-219 75 -359 249 -386 482 -5 45 -9 397 -9 784 l0 702 160 0 160 0 0
-752z m2560 672 l0 -80 -240 0 -240 0 0 80 0 80 240 0 240 0 0 -80z m-80 -380
c0 -171 5 -180 100 -180 l60 0 0 -160 0 -160 -320 0 -320 0 0 160 0 160 60 0
c95 0 100 9 100 180 l0 140 160 0 160 0 0 -140z m-640 -340 l0 -240 -80 0 -80
0 0 240 0 240 80 0 80 0 0 -240z m1120 0 l0 -240 -80 0 -80 0 0 240 0 240 80
0 80 0 0 -240z m-160 -1040 l0 -240 -80 0 -80 0 0 240 0 240 80 0 80 0 0 -240z"/>
</g>
</svg>
`},
  { title: 'Fire Protection', image: '/img/FireProtection.jpg' , icon : 'img/icon-FireProtection.png'},
  { title: 'Technology Design', image: '/img/TechnologyDesign.jpg' , icon : 'img/icon-TechnologyDesign.png'},
  { title: 'Plumbing', image: '/img/Plumbing.jpg' , icon : 'img/icon-Plumbing.png'},
  { title: 'Comming soon', image: '/img/sven-mieke-fteR0e2BzKo-unsplash.jpg' , icon : 'img/icon-'},
  { title: 'LOGO', image: '/img/sven-mieke-fteR0e2BzKo-unsplash.jpg' , icon : 'img/icon-'},
]



const timer = ref<null|number>(null) // auto change active
const active = ref('Mechanical') // 선택될 박스

function changeActive (title: string) {
  // hover시 활성화된 박스를 바꾼다
  if(title == "LOGO") return;
  if (timer.value) {
    // 기존 타이머 삭제
    window.clearInterval(timer.value)
  }
  active.value = title // 교체
  activeStep() // 3초마다 박스를 변경한다
}

function activeStep () {
  // items의 마지막 아이템은 삭제
  const targetItems = items.slice(0, items.length - 1);

  timer.value = window.setInterval(() => {
    // 3초마다 박스를 변경한다
    const index = targetItems.findIndex((item) => item.title === active.value)
    if (index === targetItems.length - 1) {
      // 마지막 박스일 경우 첫번째 박스로 이동
      active.value = targetItems[0].title
    } else {
      // 그외는 다음 박스로 이동
      active.value = targetItems[index + 1].title
    }
  }, 3000)
}

onMounted(() => {
  // activeStep() // 마운트시 박스교체 준비
})

</script>

<template>
  <div class="relative">
    <div class="flex 2xl:w-[50vw] w-full h-screen ml-auto items-center 2xl:justify-start justify-center bg-black bg-opacity-50 absolute top-0 right-0 xl:pl-56 z-20">
      <section class="2xl:ml-40">
        <h2 class="text-6xl text-white font-black leading-snug 2xl:text-right">Capabilities</h2>
        <ul class="grid grid-cols-3 2xl:w-[30rem] w-full mt-16 gap-[2px]">
          <li
            class="lg:h-44 md:h-40 h-36 bg-gray-600 duration-500 "
            :class="{'capabilities-active': active == list.title}"
            v-for="list in items"
            @mouseover="changeActive(list.title)"
          >
            <!-- TODO : svg 들어가야함  -->
            <a
              class="flex w-full h-full text-xl text-center  text-white/60 items-center justify-center"
              :class="list.title == 'LOGO' ? 'cursor-default' : 'cursor-pointer'"
              href="/"
            >
              {{ list.title }}
            </a>
          </li>
        </ul>
      </section>
    </div>
    <div class="w-full h-screen absolute z-10 top-0 left-0 overflow-hidden">
      <Transition
        v-for="list in items"
        name="capabilities"
      >
        <div
          v-show="active === list.title"
          class="w-full h-screen absolute top-0 left-0"
          :style="
            `background: url(${list.image}) no-repeat center center / cover;
            ${active === list.title ? 'z-index: 0;' : 'z-index: 1;'}`
          "
        >
        </div>
      </Transition>
    </div>
  </div>
</template>