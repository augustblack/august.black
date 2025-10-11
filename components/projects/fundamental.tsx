import { Component, type JSX } from "solid-js"
import { Project } from './types'
import { MediaProps, Audio } from '../media'
import { Link } from '../link'

const media: MediaProps[] = [
  {
    kind: 'image',
    alt: 'close up of August and Mexx screaming',
    src: "media/fundament/funda_scream_transparent.jpg",
    width: 1440,
    height: 1152,
    blurDataURL: "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAQCdASoKAAgAAUAmJZQCdAD0NuzdwAD+/qrwb0v4eoSD/8Ffetb/LfSb/foQPiuMl7TbG3+Vgns/MLhgJUfft6Ao0rv/C4T+mIz39AAAAA==",
    caption: () => (<div>
      <Audio class="mt-1"
        id='fundament_out_of_space'
        sources={[
          { type: 'audio/mp4', src: 'https://assets.august.black/media/fundament/out_of_space.m4a' },
          { type: 'audio/mp3', src: 'https://assets.august.black/media/fundament/out_of_space.mp3' },
          { type: 'audio/ogg', src: 'https://assets.august.black/media/fundament/out_of_space.ogg' }
        ]} />
      <div class="">top: August Black, bottom: Markus Seidl.</div>
    </div>)

  },
  {
    kind: 'image',
    src: "media/fundament/heineken.jpg",
    width: 720,
    height: 576,
    blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoKAAgAAUAmJagCdADcXWvAAP7w4GkSv37KP9hKW15zdZzkEKtQ5Xkw2YVtR5cO+WeIzE7/2WNtA+8H/PX9vOToAAA=",
    alt: 'modified Heineken beer logo that says Fundamental Radio',
    caption: () => (<div>We want content. Streamed live to Radio FRO from the streets of Amsterdam at the net.congestion streaming media festival, 2000.</div>)
  },
  {
    kind: 'video',
    src: 'https://assets.august.black/media/fundament/fundadam.mp4',
    poster: 'https://assets.august.black/media/fundament/funda_adam.png'
  },
  {
    kind: 'image',
    src: "media/fundament/funda_lapland_mixed.jpg",
    width: 1000,
    height: 800,
    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoKAAgAAUAmJYwCdAEWULPM1ywAAP7CrT+kEEBRlSeRTd/8CpsWXpUujRpktRTAE3/j+KPk4HYyYc3w9Zy/iivcHL4FROn8o3L/NWHBM3L5O3S2nqAAAA==",
    alt: 'collage of people talking on the radio, Sophia lerner interview Steve Bradley and his pile of trash',
    caption: () => (<div>Fundamental radio was in Rovaniemi, Finnland at Polar Circuit 3 from 24.07.00 till 30.07.00 -
      we sent live transmissions to air on Radio Fro in Linz, Austria the entire week from 00:00 till 4:00 CEST under the midnight sun.
    </div>)
  },
  {
    kind: 'image',
    src: "media/fundament/funda_lapland_cooking.jpg",
    width: 1155,
    height: 924,
    blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADQAQCdASoKAAgAAUAmJQBOgCHciUSfCAD+0ng373kfnXkWGN62eg/SdV+qkLkwabvknVqvypzZDE/gCX4smvNZ9E3uz3OvmCOLDFBp9R6ObQNhdAkfExSP4sq3B7BJmdyFmkod+5nf6CWAAAA=",
    alt: 'collage of people cooking in front of microphones',
    caption: () => (<div>
      <Audio
        class="float-right ml-1 mb-1 p-0 w-1/2"
        id='funda_track9'
        sources={[
          { type: 'audio/mp3', src: 'https://assets.august.black/media/fundament/track9_128.mp3' }
        ]} />
      <div class="">We were interested in doing the show from remote locations via streaming media.
        Typically we&apos;d cook or hang with friends.</div>
    </div>)
  },
  {
    kind: 'image',
    src: "media/fundament/fundawater_01.jpg",
    width: 1440,
    height: 1152,
    blurDataURL: "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAwAgCdASoKAAgAAUAmJbACdAYqXbXwtFIDAAD+vo1234c0fGpIkE9el4dWvsxNcOS7sB2iXHIl9opxU3a5S0JlRI6PYpaBrGO0OTOF6LDHESMwP+/qVnp/Z+186+nGsbf7sl8FXiAAAA==",
    alt: 'collage of 4 photos showing a kid pool with a condom-covered microphone immersed in water',
    caption: () => (<div>
      <Audio
        class="float-right ml-1 mb-1 p-0 w-1/2"
        id='funda_track4'
        sources={[
          { type: 'audio/mp3', src: 'https://assets.august.black/media/fundament/track4_128.mp3' }
        ]} />
      <div class="">The underwater show - live radio from a terrace swimming pool in the altstadt of Linz.</div>
    </div>)
  },
  {
    kind: 'image',
    src: "media/fundament/fundawater_02.jpg",
    width: 1440,
    height: 1152,
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADQAQCdASoKAAgAAUAmJZQCdAEUUgn3SAD+0rGM2AFfRa94bjDthW5bO7Y1bqvTgaS/5B394vFs0PrbmvWyrcc7SiWoCswCFUMW5hbHX6Dzmh+Ml3EcVRFBgjeTHRGNOAItgAAA",
    alt: 'a colllage of 4 photos showing two adults and a child with a photo camera watching the performance',
    caption: () => (<div>
      <div class="">The underwater show - All sounds guaranteed to have been <a href="http://kunstradio.at/HISTORY/WORKS/bull_ready_und.html" target="_blank" rel="noreferrer">
        recorded live underwater.</a>
      </div>
    </div>)
  },
  {
    kind: 'video',
    src: 'https://assets.august.black/media/fundament/fundawater.mp4'
  },
  {
    kind: 'image',
    src: "media/fundament/funda_outofspace_big.jpg",
    width: 1000,
    height: 792,
    blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAACwAQCdASoKAAgAAUAmJQBOgB6PVSUAAP799lv1fZqMrV/gpbVJPrdZ1PcXakVQZ/ieDFwHk3gyLtlfZmftNKkmlfHCQ6Z+9frgMFHnUY2q/X2jkmWELUUT1FxRoAAA",
    alt: 'hand holding microphone pointed at clouds',
    caption: () => (<div>
      <Audio
        class="float-right ml-1 mb-1 p-0 w-1/2"
        id='funda_outofspace128'
        sources={[
          { type: 'audio/mp3', src: 'https://assets.august.black/media/fundament/outofspace128.mp3' }
        ]}
      />
      <div class="">Live radio event at the <b>Solar Circuit Festival</b> in Hobart, Tasmania and streamed LIVE-to-AIR on Radio FRO (Linz) and Radio Orange (Vienna) on <b>February 14th, 2002.</b>
      </div>
    </div>)
  },
  {
    kind: 'image',
    src: "media/fundament/funda_taz.jpg",
    width: 1440,
    height: 1152,
    blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAAAQAgCdASoKAAgAAUAmJZwCsAEfUWXkkO6IAP7zXp/2+sFLQijPy0/T80dYIHuxOTj2W//H2OJ22/FJlEWTHq69u9z/rqPy/JW/6dnNbwWIP8dBsA/3mueZS0gFY9hLZU4ABxXpC6DAAbesSAA=",
    alt: 'people reading poetry in front of microphones',
    caption: () => (<div>Live from the Tasmanian Museum of Art on February 14th, 2002 with Andrew Burrell, Lester Chan, Jody Chime, Ian Clothier, Nina Czegledy, Etienne Deleflie, Katherine Gadd, Ken Gregory, Amanda Hendricks, Antoanetta Ivanova, Megan Jones, Andrew Lawrence, Sophea Lerner, Tapio Makela, Wade Marynowsky, Maria Miranda, Kaoru Motomiya, Norie Neumark, Tulle Ruth, & Sarah Waterson.
    </div>)
  },
  {
    kind: 'image',
    src: "media/fundament/sheep.jpg",
    width: 720,
    height: 576,
    blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAAAQAgCdASoKAAgAAUAmJagCdLoAAwkTrkgAAP78rHe23C8EYEm2gyQ3/Ys5bAvH/8Wh1odaGxoAAA==",
    alt: 'white sheep head on green background',
    caption: () => (<div>
      <Audio
        class="ml-1 mb-1 p-0"
        id='funda_slowschwitt'
        sources={[
          { type: 'audio/mp3', src: 'https://assets.august.black/media/fundament/slowschwitt.m4a' }
        ]} />
      <div class="">Live audio streaming for <a href="http://www.kunstradio.at/PROJECTS/SCHWITTERS/">SCWITTRADIO</a> and track 21 on the <a href="http://www.kunstradio.at/PROJECTS/SCHWITTCD/">SCHWITTCD</a>.</div>
    </div>)
  },
  {
    kind: 'image',
    src: "media/fundament/funda_hdo_disks.jpg",
    width: 1440,
    height: 1152,
    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABQAgCdASoKAAgAAUAmJZQCdAYrd6ngh6B4vKAA/u+v0jyeVb/+QhU6bZqy796+Hvn+F1ubxqzcYO3yZPgWd/Wln2iP1DSTga+fvUd3ctS8A5PcKF8ocJkkZlWnK4IkHUbLOwawAAA=",
    alt: 'exposed hard drives with contact microphones taped to them',
    caption: () => (<div>
      <div class="">The Hard Drive Orchestra - An installation and instrument consisting of 8 1990&apos;s era hard drives, contact microphones, and a control interface for &quot;playing&quot; the disks.</div>
    </div>)
  },
  {
    kind: 'image',
    src: "media/fundament/funda_hdo_museum.jpg",
    width: 2038,
    height: 1630,
    blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADwAQCdASoKAAgAAUAmJZwCw7EfbkcCRlAA/v4tw3/VirTIcr8dLte17fH/z+ZY7M74ee1+dCMqcdj3knojjgT0ylfeMHdzjD4l7AZuBbLAT4gCvqAAAA==",
    alt: 'august and mexx in front of projected image of noise',
    caption: () => (<div>
      <div class="">At St.Petersburg&apos;s tiny but famous Freud Museum, we built an installation and performed a live set called &quot;The Physical Mechanism of Forgetting&quot;</div>
    </div>)
  },
  {
    kind: 'image',
    src: "media/fundament/fundament_kopaha.jpg",
    width: 2400,
    height: 3369,
    blurDataURL: "data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAAAwAgCdASoKAA4AAUAmJYwCdAEWPYk445ulgAD+/ZDO8FcyRHwv4ZCMSHjtOTAP2mXbluGdVgUzFiDw3Swv2qDVnlUVv1dkEM/xRGrvZE2e1L2GXs6jwZ3bqjv4Jp4z3YZVqZ1/YBV6KJaXYV88zKkfpVUDts182ghrWE6DKnmRNRgA",
    alt: 'august and mexx in russian language news',
  },
  {
    kind: 'image',
    src: "media/fundament/simpleworld.jpg",
    width: 1440,
    height: 1152,
    blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoKAAgAAUAmJQBOgBuMlzr94AD++EXzcpgZ802oL/5j4ZU1p6D9hYBsMpPhB7EOCP/LU5s/lWod31/F2SE1krQSvMwAAA==",
    alt: 'installation view showing cat-5 cable drawings on the wall',
    caption: () => (<div>&quot;SimpleWorld&quot; is an installation composed of 123 meters of black cat-5 network cable, one hub, two computers, two contact microphones, an amplifier and two loudspeakers.</div>)
  }

]
const longy: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="">
      Fundamental radio was the network-audio playground of Markus Seidl and August Black on <Link external href="https://www.fro.at/">Radio FRO</Link>,
      FM 105mhz in Linz, Austria from 1998-2004.
    </div>
    <div class="">
      For more than 5 years, we produced a weekly live radio art show every Thursday night from 8-9pm.
      We focused on radio as a genre, sculpture, and as political and social space.
      We had a number of running themes: silence, feedback, live cooking, improvised talk shows, doom poetry, audio concrete recordings.
      We often tried to connect broadcast space with network space by using then-current transport technology for text/audio (IRC, streaming media, etc) in innovative ways.
      We were interested in radio not only as an interface for listening, but also interaction.
    </div>
    <div class="">
      While radio was our central practice, we also produced installations, audio works, as well as works for the web and television. In many ways, we became a concept band.  For me, personally, it occupied that vast majority of my creative energies during this very active time at the cusp of the millennium changeover.
    </div>
    {props.children}
  </>
)


const Fundamental: Project = {
  kind: ['radio', 'performance', 'installation'],
  key: 'fundament',
  aspect: "aspect-1440/1152",
  date: '1998-2004',
  title: 'Fundamental Radio',
  shortDesc: "Weekly 1-hour art-radio broadcast",
  place: 'Linz, Austria',
  info: {
    long: longy,
    page: longy
  },
  media
}

export default Fundamental
