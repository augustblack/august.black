import { Component } from "solid-js"
import type { JSX } from "solid-js"
import { Project } from './types'
import { Audio, ImageProps } from '../media'
import { Link, LinkPlain } from '../link'

const media: ImageProps[] = [
  {
    kind: 'image',
    alt: 'many catcti in dry brown landscape',
    src: 'media/wearehere/panflute.jpg',
    width: 1280,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAwAgCdASoKAAYAAUAmJYgCdEyAfoABqKH/KADylZbc4qPiw3mBffcLPeDoVVIiJa9vFDD4F0tiXvraKgG7jJBz0Kb+XnvmEf7r/MUru1ts/JOYZ/Rd+JkeAAA=",
    caption: () => (<div class='flex flex-row space-x-2 items-center'>
      <Audio
        id='wearehere_panflute'
        sources={[
          { type: 'audio/webm', src: 'https://assets.august.black/media/wearehere/panflute.webm' },
          { type: 'audio/flac', src: 'https://assets.august.black/media/wearehere/panflute.flac' }
        ]}
      >
      </Audio>
      <div class='flex-grow text-center'>
        <LinkPlain external href="https://www.google.com/maps/place/19%C2%B028'00.1%22S+68%C2%B038'38.0%22W/@-20.0950637,-81.7838969,4.98z/data=!4m5!3m4!1s0x0:0x0!8m2!3d-19.4667!4d-68.6439">Near Cariquima, Chile.</LinkPlain>
      </div>
    </div>)
  },
  {
    kind: 'image',
    alt: 'outside on nameless ship deck',
    src: "media/wearehere/ship.jpg",
    width: 1280,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADwAQCdASoKAAYAAUAmJZgCdAEOeIFokwAA/Nl4rUCIx89Nebqz2/a6bUvQvlXp3Xy1WFp/D6322nECKNyG/yBjQzXl1SySf2QSgAAA",
    caption: () => (<div class='flex flex-row space-x-2 items-center'>
      <Audio
        id='wearehere_ship'
        sources={[
          { type: 'audio/webm', src: 'https://assets.august.black/media/wearehere/ship.webm' },
          { type: 'audio/flac', src: 'https://assets.august.black/media/wearehere/ship.flac' }
        ]}
      />
      <div class='flex-grow text-center'>
        <LinkPlain external href="https://www.google.com/maps/place/40%C2%B049'39.2%22N+140%C2%B041'36.5%22E/@40.827559,140.693473,10z/data=!4m5!3m4!1s0x0:0x0!8m2!3d40.827559!4d140.693473">Near Aomori, Japan.</LinkPlain>
      </div>
    </div>)
  },
  {
    kind: 'image',
    alt: 'many catcti in dry brown landscape',
    src: "media/wearehere/argentina_raceway.jpg",
    width: 1280,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAAAQAgCdASoKAAYAAUAmJZACdAEQFLlZavsAAP7h9ZF8eG/i0GF/JufFs3MK27/Wl72dlQ+qHcSOznQ5wsiPXE3FB/2X462DF6wwAA==",
    caption: () => (<div class='flex flex-row space-x-2 items-center'>
      <Audio
        class='flex-shrink'
        id='wearehere_argentina_raceway'
        small={true}
        sources={[
          { type: 'audio/webm', src: 'https://assets.august.black/media/wearehere/argentina_raceway.webm' },
          { type: 'audio/flac', src: 'https://assets.august.black/media/wearehere/argentina_raceway.flac' }
        ]}
      />
      <div class='flex-grow text-center'>
        <LinkPlain external href="https://www.google.com/maps/place/37%C2%B052'53.1%22S+58%C2%B015'52.0%22W/@-28.3591471,-64.4582726,4.68z/data=!4m5!3m4!1s0x0:0x0!8m2!3d-37.8814249!4d-58.2644463">Near Balcarce, Argentina.</LinkPlain>
      </div>
    </div>)
  },
  {
    kind: 'image',
    alt: 'installation view at Piksel 2022',
    src: "media/wearehere/piksel_2022.jpg",
    width: 3840,
    height: 2160,
    blurDataURL: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoKAAYAAUAmJaQAAtzzjd/77AAA/sK+1d3ROXZSQtqfTjdDud53BPg5UNPY3+DuemQuZihnkXhwAA==",
    caption: () => (<div>Installation view @ Piksel 2022 in Bergen, Norway.</div>)
  },
  {
    kind: 'image',
    alt: 'installation view at Colorado University Museum 2023',
    src: "media/wearehere/cu_2023_01.jpg",
    width: 4080,
    height: 3072,
    caption: () => (<div>Installation view @ CU Art Museum 2023 in Colorado, USA.</div>),
    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAQAgCdASoKAAgAAUAmJYwCdAE2Wgj8CTssAP7troQL1kr7fQL01EIsIdwpujmIVt5kCXORLcyn/fQNdiZuPePFIqUQT2yeji8+160lp5GJDR6A8/6//kk7pACmUXYWJlCAAA=="
  },
  {
    kind: 'image',
    alt: 'installation view at Colorado University Museum 2023',
    src: "media/wearehere/cu_2023_02.jpg",
    width: 4080,
    height: 3072,
    caption: () => (<div>Installation view @ CU Art Museum 2023 in Colorado, USA.</div>),
    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADQAQCdASoKAAgAAUAmJYwCdAEIhfAIAAD+x393qFVLhODROU4fxFkKFvEfDHTt9svvr/BH4wkyxP5vFRCduTMLDecphwDIXZql7I/gyqo78rfzX/7PKYV/IlgAAA=="
  }

]

const page: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="flex flex-col lg:flex-row gap-4">
      <div class="flex-1">
        <Link external href='https://wearehere.fm'>We Are Here FM</Link> is an ongoing project by artists <Link external href="https://www.betseybiggs.org/">Betsey Biggs</Link> and <Link href="/" >August Black</Link> that navigates our conceptions of place through images and sounds that are geographically, but not necessarily chronologically or aesthetically, coordinated. Consisting of an ongoing stream of images and generative music in the web, the real-time audiovisual broadcast creates an ever-shifting hyperreal landscape of imaginary situations. Sometimes displayed as an on-site multi-channel installation, these experiences are at times magically experimental, at times hauntingly disturbing, and at times utterly mundane. All listeners, on-site or online, experience the same sound and image at the same time.
      </div>
      <div class="flex-1">Currently using google maps for images and Freesound.org for audio, the audio-visual pairing comes from a random dart throw on the global map.  If there are images and sounds in that area, we show them and include them in the ongoing broadcast. No place names or context are offered, and geographical locations are randomly chosen every five minutes. As such, the project immerses visitors - both sonically and visually - in a realistic yet artificially created landscape and they must locate themselves — physically, emotionally, socially and politically — within this space. </div>
      <div class="flex-1">
        We hope you enjoy getting lost with us.
        <div><Link external href="https://wearehere.fm">https://wearehere.fm</Link></div>
      </div>
    </div>
    <div class=""><b>Betsey Biggs and August Black</b> collaborate on projects bringing together transmission practice, generative systems, community and place.  Their web-based installation, We Are Here FM creates haunting hyperreal audiovisual landscapes from geo-tagged audio and panoramic images, and their <b>Front Yard Radio</b> project (in progress), will create a network of hyper-local, user-friendly public radio stations in and around Boulder County, Colorado.</div>
    <div class="space-y-2">
      <div class="font-medium">Press, publications:</div>
      <div ><Link external href='https://blackflash.ca/shifting-and-transitory-soundscapes-we-are-here-fm/'>Blackflash Magazine article</Link> by Cléo Sallis-Parchet</div>
      <div ><Link external href='https://thedigitalreview.com/issue02/biggs_weareherefm/index.html'>The Digital Review</Link></div>
    </div>
    {props.children}
  </>
)

const longy: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="">
      <LinkPlain external href='https://wearehere.fm'>We Are Here FM</LinkPlain> is an ongoing project by artists <LinkPlain external href="https://www.betseybiggs.org/">Betsey Biggs</LinkPlain>
      and
      <LinkPlain external href="/" >August Black</LinkPlain>
      that navigates our conceptions of place through images and sounds that are geographically, but not necessarily chronologically or aesthetically, coordinated. Consisting of an ongoing stream of images and generative music in the web, the real-time audiovisual broadcast creates an ever-shifting hyperreal landscape of imaginary situations. Sometimes displayed as an on-site multi-channel installation, these experiences are at times magically experimental, at times hauntingly disturbing, and at times utterly mundane. All listeners, on-site or online, experience the same sound and image at the same time. We hope you enjoy getting lost with us.
    </div>
    <div class=""><Link external href='https://wearehere.fm'>https://wearehere.fm</Link></div>
    <div class="space-y-2">
      <div class="font-medium">Press, publications:</div>
      <div ><Link external href='https://blackflash.ca/shifting-and-transitory-soundscapes-we-are-here-fm/'>Blackflash Magazine article</Link> by Cléo Sallis-Parchet</div>
      <div ><Link external href='https://thedigitalreview.com/issue02/biggs_weareherefm/index.html'>The Digital Review</Link></div>
    </div>
    {props.children}
  </>
)

const Wearehere: Project = {
  kind: ['performance', 'software'],
  key: 'wearehere',
  aspect: "aspect-1280/720",
  date: '2021 - ∞',
  title: 'We Are Here',
  shortDesc: "generative, geo-tagged audio-visuals",
  place: 'various',
  info: {
    long: longy,
    page
  },
  media
}

export default Wearehere
