import { JSX } from "solid-js"
import { Project } from './types'
import { MediaProps } from '../media'
import { Link } from '../link'

const media: MediaProps[] = [
  {
    kind: "image",
    src: "media/endofus/evans_2024_03_16_worms01.jpg",
    width: 1280,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoKAAYAAUAmJYwCdADygCtgwAD+BeRsAuPXtI+ZWXxvXBjDZpRUW4ESZgLDPBy0yZpGFpQVEA5MIYwmknRqy1IE1ruwAAAA",
    alt: "Close-up view of superworms (Zophobas Morio) used in The End of Us performances, eating styrofoam",
    caption: () => <>Zophobas Morio, also known as superworms, are the only living creatures known to digest Styrofoam.</>
  },
  {
    kind: "image",
    src: "media/endofus/leaf_01.jpg",
    width: 5944,
    height: 3906,
    blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoKAAcAAUAmJYwCdAEQdqI7roAAAP7KpteUY87nu0bvTFlQEbx845m7f560CjpE26IafzHL3kA3V9NCFpgrZ7IIXDHt33l9E7Oh3iAZmoA824RmYGW52UAA",
    alt: "Frontal installation view of The Feeders showing the wooden frame holding superworms (Zophobas Morio) with headphones for lisenting and two video monitors.",
    caption: () => <><i>The Feeders</i> installation at <Link external href="https://leafcolorado.org/leaf2025-recess-exhibit/">Lafayette Electronic Arts Festival</Link> (LEAF), June-July 2025.</>
  },
  {
    kind: "image",
    src: "media/endofus/leaf_02.jpg",
    width: 6022,
    height: 4024,
    blurDataURL: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAQCdASoKAAcAAUAmJQBOgB6MFonmCAAA/pFWPTj2cszHP9HCZ7XzTXzphbgV9j4h6IahtoHS+w8P6PgeMEGr3l6bQDwmMybhQtDxg/Iy5NgVV/nZT7W4AAA=",
    alt: "Side installation view of The Feeders showing the one of the video monitors on the side showing superworms (Zophobas Morio).",
    caption: () => <>Side view of LEAF exhibit showing a video monitor with looped six minute video essay.</>
  },
  {
    kind: "image",
    src: "media/endofus/leaf_03.jpg",
    width: 6022,
    height: 4024,
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAABQAgCdASoKAAcAAUAmJZQCdG1/At14M5TQQsAA/t4/liWXQaYoXWft3b/f9h98ZdFt+e76XMg9yB8vfsnv+V8AudfIUs0ML6UAKpxhbDGjH4DXv7w47mRBZmYU0JDfiTrsAAAA",
    alt: "Back view of the installation, The Feeders. ",
    caption: () => <>Back view of the installation, <i>The Feeders</i>. Participants could walk around the installation to observe the worms on both sides.</>
  },
  {
    kind: "image",
    src: "media/endofus/leaf_opening_01.jpg",
    width: 6022,
    height: 4024,
    blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoKAAcAAUAmJZQCdAYqrbWMoj7wAP7Q/L9MTadQfJ7lCs7egeLbUnPZL9JhP4Tz8UMUw638zN/egVvIx1EUmYiVV6Lm1/QYUl/UeLBO/YzCjVxe0FmMAAAA",
    alt: "Opening sequence of leaf interaction with superworms showing initial contact",
    caption: () => <>Outside view of  <Link external href="https://leafcolorado.org/leaf2025-recess-exhibit/">RECESS</Link> exhibit @ LEAF 2025.</>
  },
  {
    kind: "video",
    src: "https://assets.august.black/media/endofus/worms_leaf_stopmotionB15fps.mp4",
    poster: "https://assets.august.black/media/endofus/worms_leaf_stopmotionB15fps.jpg",
    bg: "bg-black",
    imgClass: "object-contain ",
    caption: () => <>A month of superworm activity.</>
  },

  /*
  {
    kind: "image",
    src: "media/endofus/leaf_opening_02.jpg",
    width: 6022,
    height: 4024,
    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADwAQCdASoKAAcAAUAmJQBOj+ACdwVjpjAA/upEbyyzXg5a7mai9hnaJAKE97xmUi34wYT4Zv0G5Tw0votoPrDoBYDo9cT9DjkPs1/x/T5ldZQico89P/2Nlmuds5SubwAAAA==",
    alt: "Second frame of leaf opening sequence showing progressive decomposition"
  },
  */
  {
    kind: "image",
    src: "media/endofus/leaf_opening_03.jpg",
    width: 6022,
    height: 4024,
    blurDataURL: "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAQAgCdASoKAAcAAUAmJYwCdAD5hWHRQ6QAAP5P76/isZFJg3+sq+Txs0F5fei/9wWq9rNXvkXHgou8q8XrZFWN2XET5cMCUXv8fZ8uROQg+0TYKobj4AAA",
    alt: "Photo of installation with superworms showing an audience member listening intently to the worms.",
    caption: () => <>The installation consisted of four contact mics mixed to stereo. Participants can listen and observe and ponder.</>
  },

  {
    kind: "video",
    src: "https://assets.august.black/media/endofus/the_feeders_v1.mp4",
    poster: "https://assets.august.black/media/endofus/the_feeders_v1.jpg",
    bg: "bg-black",
    imgClass: "object-contain ",
    caption: () => <>Video essay, published in <Link external href="https://www.aspera.org.au/sightlines-contribution/the-feeders">Sightlines Journal</Link>, that speculates on capitalism, fatalism, and cannibalism.</>
  },
  {
    kind: "image",
    src: "media/endofus/leaf_opening_04.jpg",
    width: 6022,
    height: 4024,
    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoKAAcAAUAmJYwCdAEDfuJ//JQwAP7yEKlGyFM7hqc/fleT8alPuiTdve4TkK4Zy1dtgty7vIxhxcN2e2SMkaIz5hq9yNGY5X1Ge/68KsuCANjobNAAAA==",
    alt: "Final frame of leaf opening sequence showing advanced decomposition by superworms",
  },
  {
    kind: "image",
    src: "media/endofus/evans_2024_03_16_worms02.jpg",
    width: 1280,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAQCdASoKAAYAAUAmJQBOgBuPBkHwAP7we6+QcgbKGJLJs9ZnALD5SDgIATYdYf260xDLBoXNVCVNJgjchR64ubkTlgy3OygAAA==",
    alt: "Detail view of superworms interacting with styrofoam or polystyrene materials"
  },
  {
    kind: "image",
    src: "media/endofus/evans_2024_03_16-checkered.jpg",
    width: 2560,
    height: 1424,
    alt: "Split view of image stills from evans school performance.",
    blurDataURL: "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADwAQCdASoKAAYAAUAmJZQCdAEXtYXq7UAA/vxvPz/9dQK+i4tVT/5i/WfP2D/bx7p29tQRVzR+WdQTecO50d95kv2hhfISHROn70El27fz9M/SfZneQAAA",
    caption: () => <>Images from the performance at the Evans School in Denver. March 2024.</>
  },
  {
    kind: "video",
    src: "https://assets.august.black/media/endofus/evans_2024_03_16.mp4",
    poster: "https://assets.august.black/media/endofus/evans_2024_03_16.jpg",
    bg: "bg-black",
    imgClass: "object-contain ",
    caption: () => <>Evans School performance documentation.  Custom-made WebRTC software allows live media interrogation of the "worms" with a mobile phone as VJ system.</>
  },
  /*
   {
    kind: "image",
    src: "media/endofus/evans_2024_03_16_02.jpg",
    width: 1280,
    height: 712,
    blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoKAAYAAUAmJZwAApkLfgAA/v7QrqYlT2G++niD2m4W/VzEc38fAXsXjuAgAA==",
    alt: "Close-up of performance setup with mobile device and projection"
  },

  {
    kind: "image",
    src: "media/endofus/evans_2024_03_16_03.jpg",
    width: 1280,
    height: 712,
    blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoKAAYAAUAmJaQAAuTqwUAA/v6/S91dVY7YJdhvZSL475OfSIfkk9RwAAA=",
    alt: "Performance scene with projected superworm visuals and audience engagement"
  },
  {
    kind: "image",
    src: "media/endofus/evans_2024_03_16_04.jpg",
    width: 1280,
    height: 712,
    blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACQAQCdASoKAAYAAUAmJZwAApdtcwwA/v6TNw1b37crgpn9e241n2EnFkVxLuoYvlZX82KgR8x6/AAA",
    alt: "Detail view of The End of Us performance setup and projection technology"
  },
  */
]

const text: Array<() => JSX.Element> = [
  () => <div>
    <div class="inline-block font-medium">The End of Us</div> is a speculative media project, made in collaboration <Link external href="https://nimabahrehmand.com/">Nima Bahrehmand</Link>, that creates performances and installations in collaboration with Zophobas Morio (aka superworms or larva of the darkling beetle).
  </div>,
  () => <div>
    Zophobas Morio are one of few living creatures that can digest polystyrene. We look at these creatures and their ecosystem as a way to contemplate an anticipated future where resources for living are over-extracted and depleted. Our work examines the intersection of ecological collapse, capitalist extractivism, and interspecies collaboration through performance and installation.
  </div>,
  () => <div>
    In Mark Fisher's <i>Capitalist Realism</i>, borrowing from Slavoj Žižek and Frederic Jameson, he famously states that it is easier to imagine the end of the world than the end of capitalism. <div class="inline-block font-medium">The End of Us</div> investigates moments of catharsis in the face of global crisis and systemic antagonism (late-stage capitalism, global warming, rising sea levels, increased authoritarianism, and other global imbalances).
  </div>,
  () => <div>
    In our initial performance at the Evans School in Denver we created a WebRTC app that allows us to live VJ a moving interrogation of the "worms" with a cell phone camera projected large. At the same time we speak about the science behind the worms and philosophy of the end of the world, while whipping the audience up into a chant of "worms!" over the noise of the critters feeding on the polystyrene.
  </div>,
  () => <div>
    At a month-long residency at <Link external href="https://denverdigerati.org/">Denver Digerati</Link>, we developed a walk-in installation with live broadcasting of the "worms" that we presented at <Link external href="https://festival2024.rixc.org/">Symbiotic Sense(s)</Link> conference in Riga, Latvia. The project continues to evolve as an ongoing investigation into post-capitalist futures and multi-species entanglements.
  </div>,
  () => <div>Most recently, we developed a month-long living installation as part of the <Link external href="https://leafcolorado.org/leaf2025-recess-exhibit/">RECESS</Link> exhibition for the Lafayette Electronic Arts Festival (LEAF), June - July 2025. In this iteration, participants could view the worms on site and hear them through four contact microphones mixed to stereo. An additional single channel live broadcast from two separate cameras mixed with the audio was sent to the web so that one could tune into the worms from remote 24/7.
  </div>

]

const extras = [
  {
    title: "Credits",
    list: [

      {
        label: "concept, design, performance",
        item: () => <>August Black & <Link external href="https://nimabahrehmand.com/">Nima Bahrehmand</Link></>
      },
      {
        label: "custom software, graphics",
        item: () => <>August Black</>
      },
      {
        label: "graphics",
        item: () => <>Nima Bahrehmand</>
      }
    ]
  },
  {
    title: "Related Events",
    list: [
      {
        item: () => <>Installation at <Link external href="https://leafcolorado.org/leaf2025-recess-exhibit/">RECESS</Link> exhibition as part of the Lafayette Electronic Arts Festival (LEAF), June - July 2025.</>
      },

      {
        item: () => <>Talk at the <Link external href="https://festival2024.rixc.org/">Symbiotic Sense(s)</Link> conference (remote), Riga, Latvia, October 2024</>
      },
      {
        item: () => <>Residency at <Link external href="https://denverdigerati.org/">Denver Digerati. Denver USA. October-November 2024.</Link></>
      },
      {
        item: () => <>Performance at Evans School, Denver, CO. March 16, 2024</>
      },

    ]
  },
  {
    title: "Related Publications",
    list: [
      {
        item: () => <>Bahrehmand, N., Black, A. <i>The Feeders</i> <i>Sightlines Journal Issue 7</i>, Australian Screen Production Education and Research Association. ISSN: 2653-1801 (Online). <Link external href="https://doi.org/10.64139/sightlines.2025.007.005">https://doi.org/10.64139/sightlines.2025.007.005</Link></>
      }
    ]
  }
]

const EndOfUs: Project = {
  kind: ['installation', 'performance'],
  key: 'endofus',
  aspect: "aspect-16/9",
  date: '2024 - ∞',
  title: 'The End of Us',
  shortDesc: "speculation with superworms",
  place: 'Denver, CO',
  text,
  extras,
  media
}

export default EndOfUs
