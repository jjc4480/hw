export interface Nav {
  About: { name: string, path: string }[]
  Projects: { name: string, path: string }[]
  Capabilities: { name: string, path: string }[]
  Commitments: { name: string, path: string }[]
  Media: { name: string, path: string }[]
  Careers: { name: string, path: string }[]
}

export type NavTitle = 'About' | 'Projects' | 'Capabilities' | 'Commitments' | 'Media' | 'Careers'