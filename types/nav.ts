export interface Nav {
  About: { name: string, path: string }[]
  Projects: { name: string, path: string }[]
  Business: { name: string, path: string }[]
  News: { name: string, path: string }[]
  Recruit: { name: string, path: string }[]
}

export type NavTitle = 'About' | 'Projects' | 'Business' | 'News' | 'Recruit'