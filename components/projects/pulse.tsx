import { type JSX } from "solid-js"
import { Project } from './types'
import { MediaProps } from '../media'
import { Link } from '../link'

const media: MediaProps[] = [
  {
    kind: 'image',
    alt: 'screen shot of two phones running the pulse memorial interface show a pink background with a round red play button',
    src: 'media/pulse/pulse_phones.png',
    width: 2000,
    height: 1945,
    blurDataURL: "data:image/webp;base64,UklGRgoBAABXRUJQVlA4WAoAAAAQAAAACQAACQAAQUxQSFIAAAANcBPbtqvs+879kVRT5x4FKKNCCDKyEVDB0L3UoSEikj+H02/xKsfv/LzZ95TcD7yNrBiUVYXwivAsSDhEAypmFCN5tpA8O0IZoeulDKvyyWEJVlA4IJIAAAAwAgCdASoKAAoAAUAmJbACdAECpsrXvLewAAD+6Kb4WB5W0lf/iiFv8aUVWlq7NJuIr4ymdzNRprjzHnkL340ZSw3f/2YsP2z5/qg/flkd+cwje4POxnwLcwH2NaS+RFq848vQ4ECh/5N+PFJOzEHO6m77fXIIze4x2f/x1rw/5uL/qu/4XcIEv+T1SnWF8AAAAA==",
    imgClass: 'object-contain w-full h-full bg-black'
  },
  {
    kind: 'image',
    alt: 'picture of participants experiencing the pulse memorial in a dark setting',
    src: 'media/pulse/pm_01.jpg',
    width: 4096,
    height: 2160,
    bg: 'bg-black',
    imgClass: 'object-contain',
    blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoKAAUAAUAmJaQAAu0dh+wAAP7/KwHTgPSmrNUwAAA="
  },
  {
    kind: 'image',
    alt: 'picture of participants experiencing the pulse memorial in a dark setting',
    src: 'media/pulse/pm_02.jpg',
    width: 4096,
    height: 2160,
    blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoKAAUAAUAmJYwCdAEQ/fYjIwAA/v7VnnMS/838Nj5jmgbyu4M6MivhyUn9+HDpDwcsqo0k/qI/X+4sgAA=",
    bg: 'bg-black',
    imgClass: 'object-contain',
  },
  {
    kind: 'image',
    alt: 'picture of participants experiencing the pulse memorial in a dark setting',
    src: 'media/pulse/pm_03.jpg',
    width: 4096,
    height: 2160,
    blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoKAAUAAUAmJaQAAudFrAAA/v86uVtnVPIcrjAAAAA=",
    bg: 'bg-black',
    imgClass: 'object-contain',
  },
  {
    kind: 'image',
    alt: 'picture of participants experiencing the pulse memorial in a dark setting',
    src: 'media/pulse/pm_04.jpg',
    width: 4096,
    height: 2160,
    blurDataURL: "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAABQAQCdASoKAAUAAUAmJZwABAAAAP79Aj3dZAbaxUAAAA==",
    bg: 'bg-black',
    imgClass: 'object-contain',
  },
  {
    kind: 'image',
    alt: 'picture of participants experiencing the pulse memorial in a dark setting',
    src: 'media/pulse/pm_05.jpg',
    width: 3840,
    height: 2160,
    blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADQAQCdASoKAAYAAUAmJZQCdADp9M4XIAD+/x6C7anj+OAftVOwN557g8///D5oq4fwIyCgHCnUzDgh+d/zKK+OWjxn495uIWuuLGrn54/OotLIAAA=",
    bg: 'bg-black',
    imgClass: 'object-contain',
  },
  {
    kind: 'image',
    alt: 'picture of participants experiencing the pulse memorial in a dark setting',
    src: 'media/pulse/pm_06.jpg',
    width: 4096,
    height: 2160,
    blurDataURL: "data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAABwAQCdASoKAAUAAUAmJZwC7AFAAAD+/QpFWQ8QAAA=",
    bg: 'bg-black',
    imgClass: 'object-contain',
  },
  {
    kind: 'video',
    bg: 'bg-black',
    imgClass: 'object-contain',
    src: 'https://assets.august.black/media/pulse/pulse_nov_2024.mp4',
    poster: 'https://assets.august.black/media/pulse/pm_02.jpg'
  },
  {
    kind: 'image',
    alt: 'picture of pink painting with round red dot in middle and qr code at the bottom.',
    src: "media/pulse/pulse_painting_recess.jpg",
    width: 3200,
    height: 2400,
    caption: () => (<div>Pulse Memorial painting with QR code to launch the project, as exhibited at the <Link external href="https://leafcolorado.org/leaf2025-recess-exhibit/">LEAF Recess exhibit 2025</Link></div>),
    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoKAAgAAUAmJYgCw7EfUlwB2HAAAP64Rg+B3uwdSEbPenV3dj5Db0iu0pXRP6hg/romRYBWh8RpkiJ/edjCVc0wEsAPVeMz+psfpP/K7wX2VFcu2TAAAA=="
  }
  /*
  {
    kind: 'image',
    alt: 'diagram of the multi-channel audio setup',
    src: 'media/pulse/pulse_chan_diagram.png',
    width: 2638,
    height: 2009,
    blurDataURL: "data:image/webp;base64,UklGRgIBAABXRUJQVlA4WAoAAAAQAAAACQAABwAAQUxQSFEAAAAAAAMAR00CDwsHADaDQH+CERYVEwKD+mcART8FYx8AmF4ABghEWVYWA1w0Mk4tnMx6cSoWBRIZFniXXy8PFw8AH04TETMOAA0WDi1CDQFgNwAAVlA4IIoAAAAwAgCdASoKAAgAAUAmJagCdAYZuYxuw8YKMAD+92m49ywz0PwqEE/7fwShTbxz5ehfP7XYPud0GjteX3o/bRF2J+6ek2BWSftGp/P37B+//3+SlP59f+RFvWtv30//rBWcrFDbAxJUbRSz3fka1JrWQU7rJ72QB4S/I/uP+kPDin+2I+9igp5gAAA=",
    bg: 'bg-black',
    imgClass: 'object-contain'
  },
  */
]
/*
const PaperWTF = () => (
  <div class="pt-4 flex max-w-md">
    <div class='flex-none w-24 h-48'>
      <LinkPlain external href="https://dl.acm.org/doi/pdf/10.1145/3680530.3695450">
        <Image
          width={306}
          height={400}
          draggable={false}
          alt="pdf icon"
          src="media/pulse/pulse_paper.jpg"
          blurDataURL="data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoKAA0AAUAmJaQAAu0eDyOO8AAA/v6dQNYQU9gbivmr63N3bmhhnrOcPUyqoZZWrPMdYxHfofU+AAAA"
        />
      </LinkPlain>
    </div>
    <div class="text-xs pl-4">Brook Vann, J Molina-Garcia, August Black. 2024. <Link external href="https://dl.acm.org/doi/pdf/10.1145/3680530.3695450">Pulse Memorial. SA &apos;24: SIGGRAPH Asia 2024 Art Papers Article No.: 27, Pages 1 - 6</Link>, DOI: 10.1145/3680530.3695450</div>
  </div>
)
    <Paper
      link="https://dl.acm.org/doi/pdf/10.1145/3680530.3695450"
      width={306}
      height={400}
      src="media/pulse/pulse_paper.jpg"
      blurDataURL="data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoKAA0AAUAmJaQAAu0eDyOO8AAA/v6dQNYQU9gbivmr63N3bmhhnrOcPUyqoZZWrPMdYxHfofU+AAAA"
      author="Brook Vann, J Molina-Garcia, August Black"
      year="2024"
      linkText="Pulse Memorial. SA &apos;24: SIGGRAPH Asia 2024 Art Papers Article No.: 27, Pages 1 - 6"
      extra="DOI: 10.1145/3680530.3695450"
    />

*/

const text: Array<() => JSX.Element> = [
  () => <div>
    The Pulse Memorial is a queer cyber memorial in commemoration of the 49 lives lost in the 2016 Pulse nightclub shooting in Orlando, Florida. Unlike traditional memorials that focus on geolocal specifics and monumentality, our project explores the potential of migratory digital memorials that foster a sense of the ephemeral and develop new conditions of listening and togetherness.
  </div>,
  () => <div>
    On June 12, 2016, an active shooter walked into the Pulse nightclub in Orlando, Florida at 2:02am with a SIG Sauer MCX semi-automatic rifle and a 9mm Glock 17 pistol and killed 49 LGBTQ+ individuals, mostly of Latinx descent, that were at the gay club celebrating “Latin Night” . The shooter fired over 200 rounds in the first five minutes, killing many on the dance floor, and then stood off with
    the police over the following three hours as patrons were barricaded in the back bathroom.
  </div>,
  () => <div>
    As a living queer cyber memorial honoring the 49 lives lost, our Pulse Memorial project reimagines remembrance as radical inclusion and global solidarity, providing a platform for storytelling, reflection, and empowerment. Designed as an online, participatory sound installation, the virtual memorial can currently only be fully experienced when eight or more people listen together in the same setting. The project consists of a 24/7 web broadcast that distributes eight individual real-time audio channels to participants who visit https://pulse.memorial with their mobile devices. When participants listen together in one location, they create a dynamic, moving multichannel soundscape.
  </div>,
  () => <div>
    This project is a collaboration between <Link external href="https://brookportfolio.com/">Brook Vann</Link>,  August Black, and <Link external href="https://https://www.betseybiggs.org/">Betsey Biggs</Link>. We are currently in the process of adapting the concept for 49 channels over 49 minutes. The new adaptation draws inspiration from the existing graffiti-like memorial panels that are currently positioned at the Pulse site. These panels, layered with handwritten notes left by the community, accumulate and fade over time, capturing the shifting yet enduring nature of remembrance. Similarly, as we solicit and collect new audio contributions, incoming audio will gradually replace older tracks, creating a constantly evolving broadcasted memorial.
  </div>
]

const extra: Array<() => JSX.Element> = [
  () =>
    <div class=""><b class="uppercase">Credits:</b>
      <div class="space-y-1 m-4">
        <div><b>concept and production:</b> Brook Vann & August Black</div>
        <div><b>software and design:</b> August Black</div>
        <div><b>data sonifications:</b> Brook Vann</div>
        <div><b>sound and composition:</b> Brook Vann & Betsey Biggs</div>
      </div>
    </div>
  ,
  () =>
    <div class=""><b class="uppercase">Related Publications:</b>
      <div class="space-y-1 m-4">
        <div class="pl-4">Brook Vann, J Molina-Garcia, August Black. 2024. <Link external href="https://dl.acm.org/doi/pdf/10.1145/3680530.3695450">Pulse Memorial. SA &apos;24: SIGGRAPH Asia 2024 Art Papers Article No.: 27, Pages 1 - 6</Link>, DOI: 10.1145/3680530.3695450</div>
      </div>
    </div>
]


const Pulse: Project = {
  kind: ['radio', 'installation', 'software'],
  key: 'pulse',
  aspect: "aspect-16/12",
  date: '2024 - ∞',
  title: 'Pulse Memorial',
  shortDesc: "mobile multichannel memorial",
  place: 'various',
  text,
  extra,
  media
}

export default Pulse
