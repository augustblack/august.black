import { JSX, Component } from 'solid-js'
import { MediaProps } from '../media'
import { LogoNames } from './logos'

export type Kind = 'radio' | 'performance' | 'installation' | 'software' | 'systems' | 'highlight' | 'instrument' | 'hardware'

// Component<{ children?: JSX.Element }>
type ExItem = {
  label?: string
  item: Component<{ children?: JSX.Element }>
}

type Extra = {
  title: string
  list: Array<ExItem>
}

export interface Project {
  kind: Kind[]
  key: string
  aspect?: string
  date: string
  title: string
  shortDesc: string
  place: string
  media: MediaProps[]
  text: Array<() => JSX.Element>
  extras?: Array<Extra>
  logos?: Array<LogoNames>
}
