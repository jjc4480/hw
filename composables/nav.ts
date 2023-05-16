import type { Nav, NavTitle } from '@/types/nav'
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
    { name: 'Test', path: 'test' },
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