import { defineStore } from 'pinia'

interface BodyLock {
  isLock: boolean
}

interface Toggle {
  open: boolean
}

// ui를 컨트롤하는 store
export const useUiStore = defineStore('ui', {
  state: () => ({
    bodyLock: false, // body 스크롤 제한
    siteMap: false, // 사이트맵
    nav: false, // 네비게이션
    careers: false, // 경력 애니메이션
  }),
  actions: {
    bodyLocker({isLock}: BodyLock) {
      // body 스크롤 제한 상태를 변경
      this.bodyLock = isLock
    },
    siteMapToggle({open}: Toggle) {
      // 사이트맵 상태를 변경
      this.siteMap = open
    },
    navToggle({open}: Toggle) {
      // 네비게이션 상태를 변경
      this.nav = open
    }
  },
})