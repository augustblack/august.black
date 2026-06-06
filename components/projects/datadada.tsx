import { JSX } from "solid-js";
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
    imgClass: 'object-cover w-full h-full',
    blurDataURL: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoKAAUAAUAmJZwAAua8S8NAAN0C5Lo+jzb4TVhsZQ9AAA=="
  },
  {
    kind: 'image',
    src: "media/datadada/datadada02.gif",
    imgClass: 'object-contain w-full h-full',
    width: 480,
    height: 262,
    blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADwAQCdASoKAAUAAUAmJZwCdH8AGBTVFeAA/ukIXoc0QMzBdDatvpKzOIGfj6uRQAA=",
    alt: 'colorful noise',
    caption: () => (<div>This application reads any data on disk (or, optionally, only specific directories), and writes the same data as-is to your computer&apos;s sound card and video display.</div>)
  }
]
const text: Array<() => JSX.Element> = [
  () => <div>
    Datadada is a software that will turn the stored data on your hard drive into a lengthy audio-visual work complete with sound, image, and subtitles. It works through your filesystem, file by file, reading each file bit by bit without regarding the data type, but instead simply converting the raw data simultaneously to 44.1k stereo audio and to video RGB8 format at varying resolution.
  </div>,
  () => <div>
    The end results of this misreading can be very rich and surprising at times. While most files are compressed in some way and compressed files read as "noise", many gems can be found where data is has <b>less</b> information packed in it and the data is organized with repitition and redundancy.
  </div>,
  () => <div>
    While Working with raw data is not entirely a new technique, it has a versitile set of outputs. I have performed with this software, or variations thereof that deal with raw data, at various venues and on my radio shows.
  </div>,
  () => <div>
    <div>Raw video-to-audio set with <Link external href="http://neoscenes.net/">John Hopkins</Link> for <Link external href="https://www.artsbirthday.net/2007/">Art&apos;s Birthday 2007</Link></div>
    <audio class="pt-4 outline-none" src="https://assets.august.black/media/datadada/artsbday_black_hopkins.mp3" controls />
  </div>
]

const DataDada: Project = {
  kind: ['performance', 'software'],
  key: 'datadada',
  date: '2004',
  aspect: "aspect-480/262",
  title: 'DataDada',
  shortDesc: "raw data instrument",
  place: 'various',
  media,
  text
}

export default DataDada
