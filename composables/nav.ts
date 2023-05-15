import type { Nav, NavTitle } from '@/types/nav'
// const nav = [ // header의 메뉴 리스트
//   { title: 'About', items: ['Greetings', 'Profile', 'History', 'Structure'] },
//   { title: 'Projects', items: ['Portfolio'] },
//   { title: 'Capabilities', items: ['Pipe', 'Fire System', 'Blueprint', 'HVAC'] },
//   { title: 'Commitments', items: [] },
//   { title: 'Media', items: ['News'] },
//   { title: 'Careers ', items: ['Recruit'] },
// ]

const nav = {
  About: [
    { name: 'Greetings', path: 'greetings' },
    { name: 'Profile', path: 'profile' },
    { name: 'History', path: 'history' },
    { name: 'Structure', path: 'structure' },
  ],
  Projects: [
    { name: 'Portfolio', path: 'portfolio' },
  ],
  Capabilities: [
    { name: 'Pipe', path: 'pipe' },
    { name: 'Fire System', path: 'fire-system' },
    { name: 'Blueprint', path: 'blueprint' },
    { name: 'HVAC', path: 'hvac' },
  ],
  Commitments: [
  ],
  Media: [
    { name: 'News', path: 'news' },
  ],
  Careers: [
    { name: 'Recruit', path: 'recruit' },
  ],
} as Nav


export const useNav = () => {
  return nav
}

export const useNavFinder = (title: NavTitle) => {
  return nav[title]
}