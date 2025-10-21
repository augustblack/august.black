import { Component, type JSX } from "solid-js"
import Image from '../image'
import { Project } from './types'
import { MediaProps } from '../media'
import { Link, LinkPlain } from '../link'

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
const Paper = () => (
  <div class="pt-4 flex max-w-md">
    <div class='flex-none'>
      <LinkPlain external href="https://dl.acm.org/doi/pdf/10.1145/3680530.3695450">
        <Image
          class="w-32 h-48"
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

const page: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="flex flex-col lg:flex-row gap-4">
      <div class="">
        The Pulse Memorial is a web-streamed sound installation that commemorates the lives lost in the mass shooting at the Pulse Bar in Orlando, Florida, where a gunman killed forty-nine Latine, Black, and queer patrons. This tragedy happened in June 2016 during a period of heightened fear among immigrant and marginalized communities anticipating the Trump election victory in November. Inspired by Toni Morrison&apos;s concept of &ldquo;disremembrance,&rdquo; which denotes an emotional experience of erasure due to a lack of acknowledgment, this web sculpture disrupts disremembrance by using sound to evoke presence. The installation commemorates victims that continue to be erased out of broader histories of domestic terrorism and gun violence. The broadcasted sound plays an 8-channel score, then transmitted via WebRTC to participants — one channel per device — for a multi-channel sonic event. This project transforms memorials from passive, site-specific events to community-driven experiences. It provokes curiosity about digital media&apos;s role in preserving cultural memory and amplifying marginalized voices.
      </div>
      <div class="">
        Currently, the eight-channel sound is composed of field recordings, audio abstractions, and data sonification using the numerical data associated with each victim (their birthday and victim number, listed alphabetically). The sound is meant to function as a narrative and virtual monument to commemorate the victims. The sound streams live in the network and only exist when the machines are on and people are listening together. They do not only exist on fixed spaces, but are grafted temporarily onto already existing architecture. Moreover, this project reimagines the potential of vibrational sonic experiences: the basis for many esoteric healing practices, such as those found in sound baths and tantric chanting, for example, where vibrations at particular frequencies cause calming, soothing, and meditative states of rest. The final output will be through web streaming, particularly through mobile browsers, of audience members to create a digital caphony memorial.
      </div>
      <div class="">
        This project is a collaboration between <Link external href="https://brookportfolio.com/">Brook Vann</Link>,  <Link external href="https://https://www.betseybiggs.org/">Betsey Biggs</Link>, and August Black. We are currently in the process of adapting the concept for 49 channels over 49 minutes. The new adaptation draws inspiration from the existing graffiti-like memorial panels that are currently positioned at the Pulse site. These panels, layered with handwritten notes left by the community, accumulate and fade over time, capturing the shifting yet enduring nature of remembrance. Similarly, as we solicit and collect new audio contributions, incoming audio will gradually replace older tracks, creating a constantly evolving broadcasted memorial.
      </div>
    </div>
    {props.children}
    <Paper />
  </>
)

const longy: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div>
      The Pulse Memorial is a queer cyber memorial in commemoration of the 49 lives lost in the 2016 Pulse nightclub shooting in Orlando, Florida. Unlike traditional memorials that focus on geolocal specifics and monumentality, our project explores the potential of migratory digital memorials that foster a sense of the ephemeral and develop new conditions of listening and togetherness.
    </div>
    <div>
      Currently, the project consists of a 24/7 broadcast system using a server and low-latency webrtc.  The server continuously simulcasts eight individual streams of synchronized webrtc audio consisting of abstractions, field recordings, and data sonification of victim demographics. To hear the memorial, participants must come together in a group, point their mobile devices at https://pulse.memorial and listen together in one setting. Each connecting participant receives a different track from the 8-channel simulcast broadcast (selected in sequence) forming an independently moving 8-channel swarm of audio - a low-fi, untethered sonic environment where sound emerges dynamically from multiple sources. The piece uses global networking to form local togetherness and when done in low-light resembles a candle-light vigil.
    </div>
    <div>
      This project is a collaboration between <Link external href="https://brookportfolio.com/">Brook Vann</Link>,  <Link external href="https://https://www.betseybiggs.org/">Betsey Biggs</Link>, and August Black.
    </div>
    {props.children}
    <Paper />
  </>
)


const Pulse: Project = {
  kind: ['radio', 'installation', 'software'],
  key: 'pulse',
  aspect: "aspect-16/12",
  date: '2024 - ∞',
  title: 'Pulse Memorial',
  shortDesc: "mobile multichannel memorial",
  place: 'various',
  info: {
    long: longy,
    page
  },
  media
}

export default Pulse
