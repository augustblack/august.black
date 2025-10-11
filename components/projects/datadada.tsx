import { Component, JSX } from "solid-js";
import { Project } from './types'
import { ImageProps } from '../media'
import { Link } from '../link'

const media: ImageProps[] = [
  {
    kind: 'image',
    alt: 'colorful noise',
    src: "media/datadada/datadada01.gif",
    width: 480,
    height: 262,
    blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoKAAUAAUAmJZwAAua8S8NAAN0C5Lo+jzb4TVhsZQ9AAA=="
  },
  {
    kind: 'image',
    src: "media/datadada/datadada02.gif",
    width: 480,
    height: 262,
    blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADwAQCdASoKAAUAAUAmJZwCdH8AGBTVFeAA/ukIXoc0QMzBdDatvpKzOIGfj6uRQAA=",
    alt: 'colorful noise',
    caption: () => (<div>This application reads any data on disk (or, optionally, only specific directories), and writes the same data as-is to your computer&apos;s sound card and video display.</div>)
  }
]
const longy: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="">Datadada is a software that will turn the stored data on your hard drive into a movie complete with sound, image, and subtitles.</div>
    <div class="">I have performed with this software, or variations thereof that deal with raw data, at various venues and on my radio shows.</div>
    <div class="">
      <div>Raw video-to-audio set with <Link external href="http://neoscenes.net/">John Hopkins</Link> for <Link external href="https://www.artsbirthday.net/2007/">Art&apos;s Birthday 2007</Link></div>
      <audio class="pt-4 outline-none" src="https://assets.august.black/media/datadada/artsbday_black_hopkins.mp3" controls />
    </div>
    {props.children}
  </>
)

const DataDada: Project = {
  kind: ['performance', 'software'],
  key: 'datadada',
  date: '2004',
  aspect: "aspect-480/262",
  title: 'DataDada',
  shortDesc: "raw data instrument",
  place: 'various',
  info: {
    long: longy,
    page: longy
  },
  media
}

export default DataDada
