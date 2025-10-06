import { JSX, Component } from 'solid-js'
import { MediaProps } from '../media'

export type Kind = 'radio' | 'performance' | 'installation' | 'software' | 'systems' | 'highlight' | 'instrument' | 'hardware'

export interface Info {
  long: Component<{ children?: JSX.Element }>
  page: Component<{ children?: JSX.Element }>
}

export interface Project {
  kind: Kind[]
  key: string
  aspect?: string
  date: string
  title: string
  shortDesc: string
  place: string
  info: Info
  media: MediaProps[]
}
