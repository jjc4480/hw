<script setup lang="ts">
import { useUiStore } from "@/stores/ui";

import Infomation from "@/components/landing/infomation.vue";
import Featured from "@/components/landing/featured.vue";
import Capabilities from "@/components/landing/capabilities.vue";
import Commitments from "@/components/landing/commitments.vue";
import Careers from "@/components/landing/careers.vue";

import type { ScrollTarget } from "@/types/fullpage";

const store = useUiStore(); // ui store
const fullpageKey = useRuntimeConfig().public.fullpageKey;
const options = {
  // fullpage.js 옵션
  licenseKey: fullpageKey,
  anchors: ["infomation", "featured", "capabilities", "commitments", "careers"],
  afterLoad: afterLoad,
  onScrollOverflow: onScrollOverflow,
  scrollOverflow: true,
  scrollBar: false,
};

// landing 에서 Careers 를 지나쳐 밑으로 내려갈 경우 헤더 안보이게 숨김
function onScrollOverflow(
  _: ScrollTarget,
  slide: any,
  position: number,
  direction: string
) {
  if (position > 0 && direction == "down") {
    // header 숨김
    store.headerHiddenToggle({ open: true });
  } else if (position < 10 && direction == "up") {
    // header 보임
    store.headerHiddenToggle({ open: false });
  }
}

function afterLoad(_: ScrollTarget, to: ScrollTarget) {
  // fullpage의 스크롤 이동이 끝난후 실행되는 함수
  store.updateLandingScrolling(to.index); // store에 현재 스크롤 위치를 저장한다
  if (to.index == 4) {
    // 스크롤이 마지막 컴포넌트로 이동했을때 careers 컴포넌트의 애니메이션을 실행한다
    store.careers = true;
  }
}
</script>

<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div class="section">
        <Infomation></Infomation>
      </div>
      <div class="section">
        <Featured></Featured>
      </div>
      <div class="section">
        <Capabilities></Capabilities>
      </div>
      <div class="section">
        <Commitments></Commitments>
      </div>
      <div class="section careers-section">
        <Careers></Careers>
      </div>
      <div class="section fp-auto-height">
        <LayoutFooter />
      </div>
    </full-page>
  </div>
</template>
