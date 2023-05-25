import type { Nav, NavTitle } from '@/types/nav'
const nav = {
  About: [
    { name: 'Greetings', path: 'greetings' },
    { name: 'Philosophy', path: 'philosophy' },
    { name: 'History', path: 'history' },
    { name: 'Structure', path: 'structure' },
  ],
  Projects: [
    { name: 'Portfolio', path: 'portfolio' },
  ],
  Capabilities: [
    { name: 'Mechanical', path: 'mechanical' },
    { name: 'Fire Protection', path: 'fireProtection' },
    { name: 'Technology Design', path: 'technologyDesign' },
    { name: 'Plumbing', path: 'plumbing' },
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