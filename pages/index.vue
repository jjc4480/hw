<script setup lang="ts">
import { useUiStore } from "@/stores/ui";

import Infomation from "@/components/landing/infomation.vue";
import Featured from "@/components/landing/featured.vue";
import Capabilities from "@/components/landing/capabilities.vue";
import Commitments from "@/components/landing/commitments.vue";
import Careers from "@/components/landing/careers.vue";

import type { ScrollTarget } from '@/types/fullpage'

const store = useUiStore() // ui store

const components = { // 사용될 컴포넌틑 리스트 v-for로 배치한다
  infomation: Infomation,
  featured: Featured,
  capabilities: Capabilities,
  commitments: Commitments,
  careers: Careers,
};

const options = { // fullpage.js 옵션
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ['infomation', 'featured', 'capabilities', 'commitments', 'careers'],
  afterLoad: afterLoad,
  scrollOverflow: false,
  scrollBar: false,
}

function afterLoad (_: ScrollTarget, to: ScrollTarget) {
  // fullpage의 스크롤 이동이 끝난후 실행되는 함수
  store.updateLandingScrolling(to.index) // store에 현재 스크롤 위치를 저장한다
  if (to.index == 4) {
    // 스크롤이 마지막 컴포넌트로 이동했을때 careers 컴포넌트의 애니메이션을 실행한다
    store.careers = true
  }
}

</script>

<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div
        v-for="(component, key) in components"
        class="section"
        :class="key"
        :key="key"
      >
        <component :is="component"></component>
      </div>
    </full-page>
  </div>
</template>
