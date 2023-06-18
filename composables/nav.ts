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
    { name: "PipeLine", path: "pipeLine" },
  ],
  Commitments: [{ name: "QHSE", path: "qhse" }],
  Media: [{ name: "News", path: "news" }],
  Careers: [{ name: "Recruit", path: "recruit" }],
} as Nav

export const useNav = () => {
  return nav
}

export const useNavFinder = (title: NavTitle) => {
  return nav[title]
}
