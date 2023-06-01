import { defineStore } from "pinia";

interface Toggle {
  open: boolean;
}

// ui를 컨트롤하는 store
export const useUiStore = defineStore("ui", {
  state: () => ({
    app: {
      loaded: false, // app 마운트 구현용
    },
    landing: {
      scrollIndex: 0, // 스크롤 index
    },
    header: {
      hidden: false,
      nav: false, // 네비게이션
    },
    siteMap: false, // 사이트맵
    careers: false, // 경력 애니메이션
    capabilities: false,
  }),
  actions: {
    updateLandingScrolling(index: number) {
      // 스크롤 index를 변경
      this.landing.scrollIndex = index;
    },
    siteMapToggle({ open }: Toggle) {
      // 사이트맵 상태를 변경
      this.siteMap = open;
    },
    headerNavToggle({ open }: Toggle) {
      // 네비게이션 상태를 변경
      this.header.nav = open;
    },
    headerHiddenToggle({ open }: Toggle) {
      this.header.hidden = open;
    },
  },
});
