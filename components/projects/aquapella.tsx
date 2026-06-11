import { JSX } from "solid-js"
import { Project } from './types'
import { MediaProps } from '../media'
import { Link } from '../link'

const media: MediaProps[] = [

  {
    kind: "image",
    src: "media/aquapella/aquacamera.png",
    width: 3024,
    height: 1964,
    blurDataURL: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAQCdASoKAAYAAUAmJagCdADcSQuOW4AA/vfh4llifBpE5WL22vMn+1/7F83/gs6q9tnmfft85UfnFWb/OZD+wqx4D9Jc2P4cP7BHR6fnTQVv4NbEubZbvkC2sRX/aSXiFlQv9If6oWdPS9AAAA==",
    alt: "Close-up view of a camera mounted above a clear container of water for the Aquapella instrument",
    caption: () => <>Aquapella camera view with contrast filter.</>
  },
  {
    kind: "image",
    src: "media/aquapella/AquapellawithCamera.jpg",
    width: 3493,
    height: 2795,
    imgClass: 'object-contain w-full h-full bg-white',
    blurDataURL: "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAQAgCdASoKAAgAAUAmJaQC7AERH+nHVpoAAP7+EnEIl5/End/Tnnbw+qpYQ6zNQU//ybdy3W/tUO33xzo5/+YwC6Yf8f+FKpHVGLHgCAq/WjtJEAYcAAAA",
    alt: "Complete Aquapella instrument setup with camera positioned above water container for motion capture",
    caption: () => <>Image of the Aquapella with attached camera. While the Aquapella is made out of a black plastic, the camera mount is made out of wood. The camera itself has its own USB cable separate to the microcontroller.</>
  },
  {
    kind: "video",
    src: "https://assets.august.black/media/aquapella/aquapella1080p.mp4",
    poster: "https://assets.august.black/media/aquapella/aquapella1080p_poster.jpg",
  },
  {
    kind: "image",
    src: "media/aquapella/Handpic.jpg",
    width: 3433,
    height: 2746,
    blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAAAQAgCdASoKAAgAAUAmJQBOgCFsZkpymp+gAP75CftziM//GKwRJCYmsnD0CsdDmR9v/LtxSKX7fRysp1R7JRS/slmvLbJv37XvnJJ/PLxXxY88oq8Tl60CpYgV5sOYpgecg3dYq5GDOBHYQAA=",
    alt: "Close-up of hands interacting with water in the Aquapella instrument, demonstrating gestural control",
    caption: () => <>The final Aquapella container with eight sensors and water movement.</>
  },
  {
    kind: "image",
    src: "media/aquapella/AquapellaDrawing.png",
    width: 2766,
    height: 1734,
    blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoKAAYAAUAmJaQAAt0ImIUAAP7+nOu2YlLQtXnuDUAA+hm1xEN34JsUXwAAAA==",
    alt: "Technical drawing or diagram of the Aquapella instrument setup showing the liquid container and sensing components",
    caption: () => <>Mechanical drawing of the 3D Print of the Aquapella.</>
  },
  {
    kind: "image",
    src: "media/aquapella/AquapellaMultipleViews.png",
    width: 2914,
    height: 2044,
    blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoKAAcAAUAmJaQAAu0d9RnVYAD+/pail8bxaPHYFZ6pYGObPZShSwliP8JX61gfhgAAAA==",
    alt: "Multiple perspectives of the Aquapella instrument showing different angles of the water container and camera setup",
    caption: () => <>Mechanical drawing of the Aquapella showing all sides of the Aquapella.</>
  },

  /*
  {
    kind: "image",
    src: "media/aquapella/sensor.png",
    width: 952,
    height: 521,
    blurDataURL: "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAwAgCdASoKAAUAAUAmJbACdDVAAYWYyAf9YAD+ye7I1p//8tlk1nj/5g2omT/8MXsGtcXjdRajQ28cMRdWcQ990xYWrXRAYbxdb4XcK343imW+ut25//x//FvBT+7fIbP/L8J+3X/o8+MuNf6m/U//NEX5nAcJAAA=",
    alt: "Sensor or electronic component used in the Aquapella instrument for detecting liquid motion"
  },
  */
  {
    kind: "image",
    src: "media/aquapella/twoOfUs.jpg",
    width: 4080,
    height: 1606,
    blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoKAAQAAUAmJYwCdADdE5McAAD++WdtHHfTq51VH5vnB/ir5ZXyqu/2vu9LLap/dDkPkBMokgt66hkAjAfuExheV0sAAA==",
    alt: "Two performers demonstrating collaborative interaction with the Aquapella instrument",
    caption: () => <>Aquapella interface with camera and laptop view.</>
  },
  {
    kind: "image",
    src: "media/aquapella/V1Aquapella.jpg",
    width: 3616,
    height: 2893,
    blurDataURL: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoKAAgAAUAmJaQAAxYT0n1AAP78nNivLZPgSukjWqe4Cv/rF5cNvvqw2M8PKybPO8kF4+BE/Xhp6jgA",
    alt: "First version of the Aquapella instrument prototype in development",
    caption: () => <>The first Aquapella prototype made from a clear, rectangular container.</>
  },
  {
    kind: "image",
    src: "media/aquapella/V2Aquapella.jpg",
    width: 3238,
    height: 2591,
    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoKAAgAAUAmJYwCdAELY0oS9rtAAP73cPEHPuORbFGnWjAY2wF8c8Sfvo6G+ffnk18pcQqH07ETJE0oBLlK27CqCSDIlkx13AqzefpWqT/rAc/wRUAAAA==",
    alt: "Second version of the Aquapella instrument showing refined design and construction",
    caption: () => <>The shallow circular Aquapella prototype.</>
  }
]

const text: Array<() => JSX.Element> = [
  () => <div>
    Aquapella is a hand-held gestural instrument that explores the unique relationship between liquid turbulence and musical expression. The device consists of eight conductive water-level sensors embedded in a custom 3D printed octagonal container. As musicians move and tilt the device, they generate chaotic flow patterns in the water that are translated into real-time MIDI signals for audio-visual interpretation.
  </div>,
  () => <div>
    The instrument's design embraces the inherent unpredictability of water while monitoring its movement in detail. This balance between control and chaos creates a uniquely interactive experience, where nearly identical gestures can produce different sonic outcomes due to the fluid's chaotic nature. The device features three primary interaction modes: tilting (which moves water toward container edges), swirling (creating circular motion through centripetal force), and reverberating (using momentum to bounce water off container walls).
  </div>,
  () => <div>
    Central to the Aquapella's appeal is its tactile, sculptural quality. The weighted feel and hand-held ergonomics provide an immediacy that bridges physical and computational interactions. Unlike fully digital interfaces, the instrument grounds creative expression in the tangible world while offering vast sonic possibilities through its connection to digital audio workstations. An attached USB camera with ring lighting captures the water's surface patterns, enabling tightly coupled audio-visual performances.
  </div>,
  () => <div>
    Our sound experiments have focused on ambient, noise, and glitch aesthetics that move fluidly between harmony and dissonance. Successful mappings include spatial audio techniques where tilting controls sound location in quadraphonic setups, octet arrangements where each sensor controls synthesizer amplitude, and immersive soundscapes that transform white noise into ocean-like environments. The instrument's circular form naturally lends itself to cyclical concepts like phase shifting and euclidean rhythms.
  </div>,
  () => <div>
    The development process involved extensive iteration on container shapes, sensor technologies, and calibration approaches. We progressed from rectangular plastic containers to shallow circular forms before settling on the current octagonal design, which optimizes both circular gestures and lateral water movement. The conductive sensors, while presenting challenges with drift and adhesion, were chosen for their affordability, compactness, and real-time responsiveness after testing capacitive and optical alternatives.
  </div>,
  () => <div>
    Performance with the Aquapella reveals fascinating aspects of human-water interaction. Most first-time users demonstrate intuitive understanding of the instrument's capabilities, suggesting people have natural knowledge of fluid dynamics in containers. The momentum of water carries over from gesture to gesture, creating "aftertouch"-like qualities where physical properties extend sonic output in nuanced ways. This residual effect makes the instrument feel alive and responsive while maintaining an element of beautiful unpredictability.
  </div>
]

const extras = [
  {
    title: "Credits",
    list: [
      {
        label: "concept, hardware",
        item: () => <>John Lettang</>
      },
      {
        label: "design, imaging, software",
        item: () => <>August Black</>
      },
      {
        label: "audio design",
        item: () => <>John Lettang & August Black</>
      }


    ]
  },
  {
    title: "Related Publications",
    list: [
      {
        item: () => <>Lettang, J., Black, A. <i>Aquapella: Gestural Interactions with Liquid Turbulence as Musical Expression</i> <i>Proceedings of the ACM International Conference on New Interfaces for Musical Expression.</i> June 24-27, 2025, Canberra, Australia. <Link external href="https://doi.org/10.5281/zenodo.15699626">https://doi.org/10.5281/zenodo.15699626</Link> </>
      }
    ]
  }
]

const Aquapella: Project = {
  kind: ['instrument', 'performance', 'software'],
  key: 'aquapella',
  aspect: "aspect-1920/1080",
  date: '2024 - 2025',
  title: 'Aquapella',
  shortDesc: "liquid gestural interactions",
  place: 'Boulder, CO',
  text,
  extras,
  media
}

export default Aquapella
