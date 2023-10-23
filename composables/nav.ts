import type { Nav, NavTitle } from "@/types/nav"
const nav = {
  About: [
    { name: "인사말", path: "greetings" },
    { name: "철학", path: "philosophy" },
    { name: "연혁", path: "history" },
    { name: "QHSE", path: "qhse" }, 
    { name: "BI", path: "bi" },
  ],
  Projects: [{ name: "포트폴리오", path: "portfolio" }],
  Business: [
    { name: "하이테크", path: "mechanical" },
    { name: "소방설비", path: "fireProtection" },
    { name: "설계", path: "design" },
    { name: "Turn-key", path: "pipeline" },
  ],
  News : [{ name: "미디어", path: "news" }],
  Recruit: [
    { name: "인재상", path: "talent" },
    { name: "채용공고", path: "recruit" },
  ],
} as Nav

export const useNav = () => {
  return nav
}

export const useNavFinder = (title: NavTitle) => {
  return nav[title]
}
