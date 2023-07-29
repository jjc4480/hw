import type { Nav, NavTitle } from "@/types/nav"
const nav = {
  About: [
    { name: "Greetings", path: "greetings" },
    { name: "Philosophy", path: "philosophy" },
    { name: "History", path: "history" },
    { name: "BI", path: "bi" },
  ],
  Projects: [{ name: "Portfolio", path: "portfolio" }],
  Capabilities: [
    { name: "Mechanical", path: "mechanical" },
    { name: "Fire Protection", path: "fireProtection" },
    { name: "Design", path: "design" },
    { name: "Pipeline", path: "pipeline" },
  ],
  Commitments: [
    { name: "QHSE", path: "qhse" }, 
    { name: "Management", path: "management" },
  ],
  Media: [{ name: "News", path: "news" }],
  Careers: [
    { name: "Talent", path: "talent" },
    { name: "Recruit", path: "recruit" },
  ],
} as Nav

export const useNav = () => {
  return nav
}

export const useNavFinder = (title: NavTitle) => {
  return nav[title]
}
