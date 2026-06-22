import { For, JSX } from "solid-js"
import { Project } from './types'
import { MediaProps, Audio } from '../media'
import { Link, LinkPlain } from '../link'
import Image from '../image'

const BetaGroup = {
  'Galen Joseph-Hunter': 'https://wavefarm.org',
  'Jen Kutler': 'https://www.jenkutler.com/',
  'Anna Friz': 'https://nicelittlestatic.com/',
  'Federico Bonelli': 'https://trasformatorio.net/',
  'Grant Smith': 'https://self-noise.net/',
  'Alejo Duque': 'http://red.radiolibre.cc',
  'Tom Roe': 'https://wavefarm.org',
  'Mort Drew': 'https://www.mortimerdrew.co.uk/'
}
const InternGroup = {
  'Henry Saver': 'https://www.linkedin.com/in/henry-saver-6b07701b5',
  'Namita Pasupuleti': 'https://namitapasu.wordpress.com/about-me/'
}
const InfraGroup = {
  'Kimberley Bianca': 'https://www.kimberleybianca.com/',
}

const Alon = () => (
  <span class='ml-2 whitespace-nowrap' style="font-size:0.57rem; line-height:1rem" ><LinkPlain external href="https://alonkoppel.com/">&copy;Alon Koppel</LinkPlain></span>
)

const Hethre = () => (
  <span class='ml-2 whitespace-nowrap' style="font-size:0.57rem; line-height:1rem">&copy;Hethre Contant</span>
)

const media: MediaProps[] = [
  {
    kind: 'image',
    src: "media/mezcal/mezcal_logo.svg",
    width: 3149,
    height: 3148,
    blurDataURL: "data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAACQAACQAAQUxQSFcAAAABcFTbttqcMHNSJgfkAi20o2qIhk5JAtcAd8quSENETAD/ZgYh2MMMrNM5jNMd7OOFNHrHRzhEq/7kFhzgID+u9abwQVgADtD2jSQvJXVoxV6t5GQL/AsAVlA4IEgAAACwAQCdASoKAAoAAUAmJbACdLoABGaAAP7od5Qg7xlgvQJy11s27j17L3PXr8kwCMAxjXyqf9r/9XNCVKYCP7Px//1ofNKxoAA=",
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full aspect-video',
    alt: 'mezcal logo'
  },
  {
    kind: "video",
    src: "https://assets.august.black/media/mezcal/mezcal_demoCut_2025-03-20.mp4",
    poster: "https://assets.august.black/media/mezcal/mezcal_demoCut_2025-03-20.jpg",
    bg: "bg-black",
    imgClass: "object-contain "
  },
  {
    kind: "image",
    src: "media/mezcal/mezcal_ttu_2024_devices.jpg",
    width: 6000,
    height: 4000,
    alt: 'three mobile devices of different sizes outside on an overcast day near the shore.',
    blurDataURL: "data:image/webp;base64,uklgrniaaabxrujqvla4igyaaaaqagcdasokaacaauamjqbogcnczfhjs2gaap78cfve0j3far4+itgdcqre1vx0/bpi4srmup4iydbmrvka8jki3vufs+7ywqmhcjxcauqmk/qliyjrqffuc8byjh7takmwsxuaaaa=",
    caption: () => (
      <div class='flex-grow'>Mezcal is built with a mobile-first design methodology. </div>
    )
  },
  {
    kind: "image",
    src: "media/mezcal/mezcal_ttu_2024_grupo.jpg",
    alt: 'three people with mobile devices and radios outside by the seaside',
    width: 6000,
    height: 4000,
    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADwAQCdASoKAAcAAUAmJZQCdAD7D6F//AAA/iefRQPYX4BpRlGD+EC0i2Tc8i1Z6Y5hfz70/56dsl3/J1i7oXh3v/gL/q7xeeg9IQlNm+u3OGdFK3cggZwBB6R9FUCT10AAAA==",
    caption: () => (
      <div class='flex-grow'>Mezcal works well in outdoor low-bandwidth situations </div>
    )
  },
  {
    kind: "image",
    src: "media/mezcal/mezcal_ttu_2024_flor.jpg",
    alt: 'White woman with fair hair holding a moblie phone with attached microphone and Mezcal displayed.',
    width: 5108,
    height: 3405,
    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAQCdASoKAAcAAUAmJbACdAEXZm1UomwA4n+qs+NweRDkzEqR1EFiEeeQDz31Pqak5cawJSN1+IY5Db1OTdftOIULci7sMbAeEj+RtSrtoqunsjRYjd2q1UEAAA==",
    caption: () => (
      <div class='flex-grow'>Florencia Curci with mobile mezcal setup.</div>
    )
  },

  {
    kind: 'image',
    src: "media/mezcal/mezcal-todo_la_teoria-2024-01-06.jpg",
    width: 2400,
    height: 1600,
    blurDataURL: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAQCdASoKAAcAAUAmJQBOgNMpfsxRGggA+WIbPw9UBrUTYH525aM48fC0c+vOm+lIqMQZfFICpL82Nv8FSYMecw7m2nKUjiPZsKyfSnYBnwUIBRX/Zbsajdf9PWzF7/JPlijf4mqKbbrRYAAAAA==",
    alt: 'Two pictures. On the left, a white woman with shoulder length brown hair shows mezcal on a laptop with a projection of the screen above. Four women look at her and the screen. On the right,  a white man with short balding hair looks at mezcal on his laptop with a man to his right and the other five women on the long end of a table.',
    caption: () => (<div class='flex flex-row'>
      <div class='flex-grow'>Mezcal workshop led by Florencia Curci at <LinkPlain external href="https://todalateoriadeluniverso.org/">Todo la Teor&iacute;a del Universo</LinkPlain>.
      </div>
    </div>
    )
  },
  {
    kind: 'image',
    src: "media/mezcal/mezcal_spree.jpg",
    width: 1080,
    height: 719,
    blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADwAQCdASoKAAcAAUAmJaACdAEf2jz7eAAA/vuJK7DOUxslqIDPi0bXxaVur1pB9FMtBMjSXv/6WRPyrXUnfiVvuPyqGU1nzVkdbyQm7av8wq61NEqhNfiE/sWiVQAA",
    alt: 'mezcal in use on laptops sitting on table in the hull of a large boat',
    caption: () => (<div class='flex flex-row'>
      <div class='flex-grow'>Mort Drew attending to Mezcal for the <LinkPlain external href="https://acousticommons.net/~/#">Spree Channelsea Radio Group</LinkPlain>.
      </div>
    </div>
    )
  },
  {
    kind: 'image',
    src: "media/mezcal/project107sydney01.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAwAgCdASoKAAcAAUAmJZQCdG1/AkNa4l/NMAD+6l8j2VjrjxsBPRuZi7f8eowhmfB14v4+H8Qm8u/1NMvohfIc+D9Ddm79vZKJ8wMZh3vEaJ4LBwEtHJxMVyNaEAMZnH/QAAAA",
    alt: 'photo of mobile phone pointed at Australian police',
    caption: () => (<div>From workshops with Jon Panther and Hethre Contant (Diffusion 107) in Sydney, Australia. 2022. <Hethre /></div>)

  },
  {
    kind: 'image',
    src: "media/mezcal/project107sydney02.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADQAQCdASoKAAcAAUAmJZwCdADdoYKhAADOP+4YpcWDvOZ+OMOo1sTwUD+mG87+eml9h8CH2WzyI7DKV3J27VNwSoab7ePh+uGP3/5R9fgaYj5lQjHthk0ydBE0rtQQC9Rv7Fgim6MBGUx5QAA=",
    alt: 'photo of mobile phone pointed at ticking wheel spinner',
    caption: () => (<div>From workshops with Jon Panther and Hethre Contant (Diffusion 107) in Sydney, Australia. 2022. <Hethre /></div>)
  },
  {
    kind: 'image',
    src: "media/mezcal/mezcal_piksel_2022_01.jpg",
    width: 3240,
    height: 2160,
    blurDataURL: "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAAAQAgCdASoKAAcAAUAmJYgCdAEfbX9QuksAAP7qWq78KKv8hTbufjJ+lG9lYkpm3B2423t4EEfAz3tBT9Yhcbq9Av6wtuf/T/m47Y+sUHDV9Fq+ribIPmqwcACJ9axIijieFJHXEXoFwb6RcfudAAAA",
    alt: 'Photo collage of asian male and russian woman experimenting with mezcal.',
    caption: () => (<div>Mezcal workshops @ Piksel 2022 in Bergen, Norway</div>)
  },
  {
    kind: 'image',
    src: "media/mezcal/mezcal_piksel_2022_02.jpg",
    width: 3240,
    height: 2160,
    blurDataURL: "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAQAgCdASoKAAcAAUAmJZQCdAYrxaXUEAAAAP6JOMc/REPF8MGnPKM6ulcZDCbTgqT7BG1Vh/EjRfiiG1/v53y3zEOssGyFWY1OKvyYKJgJO54wiyorqwAA",
    alt: 'Photo collage of two men experimenting with mezcal.',
    caption: () => (<div>Mezcal workshops @ Piksel 2022 in Bergen, Norway</div>)
  },
  {
    kind: 'image',
    src: "media/mezcal/wavefarm_workshop_mobile.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAQCdASoKAAcAAUAmJaQCw7DdK//JSoAA/voP1ry7hHefgcbSLFH6KrF1yZsLfOO/mDxBifYfz3/+lZGnu0PSco6fD9MX+wv3ba9iBXuJcAW8QRE0FGAAAAA=",
    alt: 'mobile phone with audio mixer app, mezcal',
    caption: () => (<div>Early mezcal interface on a mobile phone. <Alon /> </div>)
  },
  {
    kind: 'image',
    src: "media/mezcal/wavefarm_workshop_2021_01.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAABwAgCdASoKAAcAAUAmJaACdEf/2SIC/nTzsKQAAP7SOHIryPSVBnINmnt3tkmuybXv27XBi7cujcd2N0o+Lp2URVWPibxVfO/x3AgWPP6KcYI08wbhe/7Dfw3aqIPM7T2Yd9X/dfz7jvx2y64LuAAA",
    alt: '14 people looking at speaker on large porch',
    caption: () => (<div class='flex flex-wrap'>
      <Audio
        class='mt-1 flex-shrink mr-2'
        small={true}
        id='wavefarm_workshop'
        sources={[
          { type: 'audio/mp3', src: 'https://assets.august.black/media/mezcal/wavefarm_workshop_edit.mp3' }
        ]}
      />
      <div class='flex-grow'>Mezcal workshop at <LinkPlain external href="https://wavefarm.org">Wave Farm</LinkPlain>.
        <Alon />
      </div>
    </div>
    )
  },
  {
    kind: 'image',
    src: "media/mezcal/wavefarm_workshop_phones.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABQAgCdASoKAAcAAUAmJaACdAYr7y2EUmp9KMAA/ub/V/9IQdlBPe1pKWZhGED+pe/+P7BpIa2196tnMVLlzdGrmLutUUG1lu5y+V38OfU8NHi1wSWTUF51ks1iP0CKEVt2YVrFoAA=",
    alt: 'mobile phone with audio mixer app, mezcal',
    caption: () => (<div>Mezcal workshop at <LinkPlain external href="https://wavefarm.org">Wave Farm</LinkPlain>, summer 2021.
      <Alon />
    </div>
    )
  },
  {
    kind: 'image',
    src: "media/mezcal/wavefarm_workshop_people01.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAAAQAgCdASoKAAcAAUAmJYgCdAEQFPtoD9ngAP5LssZ/J+jU4RaOFbO3Mf195pumbYvwEFblwx4j1MNeFgPlIznz1MF4C4T7QmhwU7M7Xyk2W50PExBsAFNdqg8jxbRxz0cNIlNwmGOzQ3dbdltmvzkE/j1jyJin/bfe78GtIAA=",
    alt: 'workshop participants with phones',
    caption: () => (<div>Mezcal workshop at <LinkPlain external href="https://wavefarm.org">Wave Farm</LinkPlain>, summer 2021.
      <Alon />
    </div>
    )
  },
  {
    kind: 'image',
    src: "media/mezcal/wavefarm_workshop_people02.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAADQAQCdASoKAAcAAUAmJYgCdAD0ux2QaAD+mn+31i/UjQvKH+fzBvIbD6rwE5Tp4VS/ZHSPnwS6zwNtMPUm7+YEd7Y59OJGHrWWoLrm124+gK69hv6YM8cREbP+C2ujF90vRayD/5HjIMqB1ewZ5gDH/xgW/7N/T9vx8f/sZ0gAAA==",
    alt: 'workshop participants with phones',
    caption: () => (<div>Mezcal workshop at <LinkPlain external href="https://wavefarm.org">Wave Farm</LinkPlain>, summer 2021.
      Participants: Alex, Adam, Kirsten Bates, Bianca Biberaj, August Black, Jeff Economy, Jimmy Garver, Galen Joseph-Hunter, Alon Koppel, Alanna Medlock, Jess Puglisi, Tom Roe, Becca Van K, and Bryan Zimmerman
      <Alon />
    </div>
    )
  },
  {
    kind: 'image',
    src: "media/mezcal/wavefarm_footsteps_01.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoKAAcAAUAmJZwC7AEXfrFy3jkAAP7rxpD2eNB/6td11OqhRtf8dZ//Rw8/1JdIAyXLEw4tcEfJIfv74v/Kvr6sosanCBGALK1yXfMkbadSRQMCvvKOAAAA",
    alt: 'trashcans taped to the leg, cell phones inside',
    caption: () => (<div class='flex flex-wrap'>
      <Audio
        class='mt-1 flex-shrink mr-2'
        id='wavefarm_footsteps'
        sources={[
          { type: 'audio/mp3', src: 'https://assets.august.black/media/mezcal/wavefarm_footsteps.mp3' }
        ]}
        small={true} />
      <div class='flex-grow'>&quot;Footsteps on Gravel&quot; <LinkPlain external href="https://wavefarm.org">&copy;Wave Farm</LinkPlain>, summer 2021.
      </div>
    </div>
    )
  },
  {
    kind: 'image',
    src: "media/mezcal/wavefarm_footsteps_02.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAQCdASoKAAcAAUAmJbAC7AD0sefVUsgA/sj0POqg9XPgIfPp3ZdtLCITd3OKNwZ7ZKT8S//rgJzsYzu2UlvaGDTRCmE5lxWfphtXve7Pm4I/9zUzXzUzQSYAAA==",
    alt: 'collage of person walking with trashcans taped to the leg',
    caption: () => (<div class='flex flex-row'>
      <div class='flex-grow'>&ldquo;Footsteps on Gravel&rdquo; Two mobile phones inside two trash cans act as a low-level listening device.
      </div>
    </div>
    )
  },
  {
    kind: 'image',
    src: "media/mezcal/migrant_detention.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAQCdASoKAAcAAUAmJQBOgCfQbo67bIAA/v3HPyAahtrlePueenC9NY08vpRiHUY4yrthFqIYVSFexDeCVGWSICLNUzavDbdmKj0D9r9TyLKKBLIzVqDKAAA=",
    alt: 'collage of man and women outside detention centers',
    caption: () => (<div class='flex flex-wrap gap-2 items-center'>
      <Audio
        class='flex-1'
        id='wavefarm_migrant_detention_radio'
        sources={[
          { type: 'audio/mp3', src: 'https://assets.august.black/media/mezcal/wavefarm_migrant_detention_radio.mp3' }
        ]}
      />
      <div class='flex-grow'><Link external href='https://wavefarm.org/wf/archive/v93f5v'>Migrant Detention Radio</Link> - live from the Aurora, CO and Otay Mesa, CA detention centers by <Link external href='http://eliseortiz.net/'>Eliseo Ortiz</Link> and <Link external href='https://www.jessica-ordaz.com/'>Prof. Jessica Ordaz</Link>.</div>
    </div>
    )
  },
  {
    kind: 'image',
    src: "media/mezcal/mezcal_screen_clipped.png",
    width: 1158,
    height: 942,
    blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoKAAgAAUAmJZQCdAEQ/SwO0QAA/ug/Rdm8lvQE6qB15cVQt638eX7bXFdIBz4DO/jrXuZfVBMDHoUjoRyJFJXdFdOsBGllsAA=",
    bg: 'bg-black',
    alt: 'mezcal interface',
    caption: () => (<div>An early version 1 mezcal interface.</div>)
  }
]

const text: Array<() => JSX.Element> = [
  () => <div>
    Mezcal is a browser-based instrument for making an ambulent, live, and discursive form of radio; beyond the standard forms of talk and music playback. It allows for real-time acoustic interchange among multiple producers that is mobile and accessible.  Liveing on the web as a 24 / 7 WebRTC service, end-users need not deal with app stores or long term maintenance of software. Each participant that visits the URL for the server is automatically connected together in a horizontal improvisational audio context; no one controls the mix.
  </div>
  ,
  () => <div>
    The interface presents each participant with an uncluttered audio mixing interface that allows one to play sound from various sources (archives, files, streams) along with input from multiple virtual and connected sound devices (mic, external devices, Jack/Blackhole, etc.). Altogether, when combined with broadcasting strategies, Mezcal allows multiple remote participants to collaborate with sub-second latency and affords a more ambulant and discursive style of radio that is often cross-border, archive-driven, and environmentally engaged.
    <div class="pt-8">
      <Image
        draggable={false}
        src={"media/mezcal/mezcalv2_mobiles.png"}
        width={6114}
        height={2390}
        alt={"mezcal screenshots from mobile phones"}
        blurDataURL={"data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAACQAAAwAAQUxQSCUAAAABR6CobSOGP9fb63mhERGBsNwnIAsweUcwkkgiyV8ghYj+xxq5AFZQOCA8AAAA8AEAnQEqCgAEAAFAJiWMAnR/ABgaT+eIAP7HeD7/BYmkab3achSYXE0wMgl9oj+UzdF07NrHW4bc6OAA"}
      />
    </div>
  </div>,

  () => <>
    As a telematic service that allows multiple constituents to fluidly participate in broadcast-like scenarios through their mobile devices at the flick of their thumbs and the swipe of their trackpads, it affords a new kind of radio-making that is built for live scenarios, where your hand is on the dial. It is cheap and quick and easy, and more akin to live sports broadcast, but for art and activism. I see it as a compliment to the canned podcast radio magazine format.
  </>,
  () => <>
    Listeners get an immediate way to call in and contribute.  Producers can make shows by themselves, in collaboration with others, at remote locations or on site, and/or in synchronous or asynchronous modes. Both listeners and producers can hop-on or off the stream at will. It all works in a browser, outside of app stores, and is a different kind of networked radio where the boundary between listener and producer can be strict or blurred.
  </>,
  () => <>
    The underlying transport of Mezcal is similar to other teleconferencing software. What sets it apart is that the network configuration is centralized within a Multi-point Control Unit (MCU) that minimizes bandwidth at scale. Furthermore, the Mezcal interface provides audio-specific features such as mixing of multiple audio sources, re-streaming to Icecast, fingertip access to various online media archives, etc. The project is at a working beta status and in constant development in collaboration with activists, artists and researchers from the USA, UK, Netherlands, Italy, Colombia, and Australia.
  </>,
  () => <>
    Not unlike how a piano provides its “users” with a vast set of possible acoustic outcomes - everything from classical to jazz and noise - I see Mezcal as an instrument for diverse practices in transmission and sound art, for providing alternative modes of point to point communication for social movements, and as a new technological form of environmental and journalistic reporting.
  </>,
  () => <>
    The biggest difference between Mezcal and other telematic software is in its vision. I don't see this research as a tool for industry or even for band practice (not that these things are bad); I see Mezcal as an expressive instrument for diverse sound, music, and transmission practices, for participatory and open-ended artistic performance, for growing social movements, and for live environmental reporting, all under expanded musical pretexts.
  </>
]

const extras = [
  {
    title: "Related Events",
    list: [
      {
        item: () => <><Link external href="https://www.nsota.org/">New School of the Anthropocene</Link> collaborative radio show for <LinkPlain external href="https://www.mixcloud.com/Resonance/playlists/bad-punk/">‘Bad Punk’</LinkPlain> on Resonance FM 2024.</>
      },
      {
        item: () => <Link external href="https://www.kunstradio.at/PROJECTS/AB2024/">Art&lsquo;s Birthday 2024</Link>
      },
      {
        item: () => <Link external href="https://acousticommons.net/~/#">Spree Channelsea Radio Group 2023</Link>
      },
      {
        item: () => <Link external href="https://centrodeartesonoro.cultura.gob.ar/actividad/terra-ignota/">Terra Ignota Radio Forum 2023.</Link>
      },
      {
        item: () => <Link external href="http://kunstradio.at/PROJECTS/AB2023/network-kunstradio-party.php">Art&lsquo;s Birthday 2023</Link>
      },
      {
        item: () => <Link external href="https://wavefarm.org/radio/wgxc/audio-archive/jbrxxs">The Conduction Series, Nov. 2021 - ongoing</Link>
      },
      {
        item: () => <Link external href="https://acousticommons.net/listen/land-to-return">Acoustic Commons - Земля повернення, земля турботи, 2022</Link>
      },
      {
        item: () => <Link external href="https://wavefarm.org/ta/archive/works/b0eaj7">Radio Research Residency @ Wave Farm 2021</Link>
      },
      {
        item: () => <Link external href="https://wavefarm.org/wf/archive/v93f5v">Migrant Detention Radio, 2021</Link>
      }
    ]
  },
  {
    title: 'Workshops',
    list: [
      {
        item: () => <div><Link external href="https://todalateoriadeluniverso.org/">Todo la Teor&iacute;a del Universo</Link> by Florencia Curci</div>
      },
      {
        item: () => <div ><Link external href="https://radiopreservation.org/2023-conference/">Radio Preservation Task Force 2023, Library of Congress DC</Link></div>
      },
      {
        item: () => <div ><Link external href="https://piksel.no/2022/11/01/pikselxx-ai-ai-ai-workshops">Piksel 2022, Norway</Link></div>
      },
      {
        item: () => <div ><Link external href="https://pif.camp/piflog-day-4/">PIF Camp 2022, Slovenia</Link></div>
      },
      {
        item: () => <div ><Link external href="https://107.org.au/event/mezcal-radio-workshop/">Radio Workshops @ Project 107 Sydney, Australia 2023</Link> by Jon Panther</div>
      },
      {
        item: () => <div ><Link external href="https://107.org.au/event/mezcal-radio-transmission-and-sound-art-2/">Radio Workshops @ Project 107 Sydney, Australia 2022</Link> by Jon Panther</div>
      },
      {
        item: () => <div ><Link external href="https://wavefarm.org/ta/archive/works/b0eaj7">Wave Farm 2021</Link></div>
      }

    ]

  },
  {
    title: 'Credits',
    list: [
      {
        label: 'concept, design, software',
        item: () => <>August Black</>
      },
      {
        label: 'beta group',
        item: () =>
          <For each={Array.from(Object.entries(BetaGroup))}>
            {([k, url], idx) => (<span>{idx() === 0 ? '' : ', '}<LinkPlain external href={url}>{k}</LinkPlain></span>)}
          </For>
      },
      {
        label: 'documentaion and grant writing',
        item: () =>
          <For each={Array.from(Object.entries(InfraGroup))}>
            {([k, url], idx) => (<span>{idx() === 0 ? '' : ', '}<LinkPlain external href={url}>{k}</LinkPlain></span>)}
          </For>
      },
      {
        label: 'interns',
        item: () => <For each={Array.from(Object.entries(InternGroup))}>
          {([k, url], idx) => (<span>{idx() === 0 ? '' : ', '}<LinkPlain external href={url}>{k}</LinkPlain></span>)}
        </For>
      },
      { label: 'logo', item: () => <LinkPlain external href="https://nimabahrehmand.com/">Nima Bahrehmand</LinkPlain> }
    ]

  },
  {
    title: 'Press',
    list: [
      {
        item: () => <div ><Link external href='https://oe1.orf.at/programm/20240229/750542/Kuenstliche-Intelligenz-feiert-den-Geburtstag-der-Kunst'>Künstliche Intelligenz feiert den Geburtstag der Kunst</Link> on <Link external href='https://oe1.orf.at/soundart/kunstzumhoeren'>KUNST ZUM HÖREN</Link> 2024 (at minute 11, I speak about mezcal)</div>
      },
      {
        item: () => <div > <Link external href='https://oe1.orf.at/programm/20210627/642046/Akustische-Live-Vernetzung-ueber-Grenzen-hinweg'>Akustische Live Vernetzung</Link> 2023</div >
      },
      {
        item: () => <div ><Link external href='https://www.newmediacaucus.org/migrant-detention-radio-on-wave-farm-wgxc-90-7-fm/'>New Media Caucus</Link> 2021</div>
      }
    ]
  },
  {
    title: 'Related Publications',
    list: [
      {
        item: () => <>Black, A. <i>Mezcal: A Collaborative Transmission Art Instrument</i> <i>Proceedings of the International Conference on New Interfaces for Musical Expression (NIME '26)</i>, June 23–26, 2026, London, UK. <Link external href="https://doi.org/10.5281/zenodo.20784196">https://doi.org/10.5281/zenodo.20784196</Link></>
      },
      {
        item: () => <>Black, A. et al. <i>The Conduction Series: Live Collaborative Transmission Art Across Borders</i> <i>Proceedings of the 20th International Audio Mostly Conference on Interactive Audio.</i> July 3-7, 2025, Coimbra, Portugal. <Link external href="https://doi.org/10.1145/3771594.3771612">https://doi.org/10.1145/3771594.3771612</Link></>
      },
      {
        item: () => <>Black, A. <i>Boutique Permasoftware: micro-cultures of care and stewardship in software ecologies</i> <i>Politics of the Machine.</i> <Link external href="http://doi.org/10.14236/ewic/POM24.33">http://doi.org/10.14236/ewic/POM24.33</Link> </>
      }
    ]
  }
]

const Mezcal: Project = {
  kind: ['radio', 'performance', 'software'],
  aspect: "aspect-1080/720",
  key: 'mezcal',
  date: '2020 - ∞',
  title: 'Mezcal',
  shortDesc: "transmission and sound art instrument",
  place: 'Boulder, CO',
  media,
  text,
  extras,
  logos: ['wavefarm', 'atlas', 'dcmp']
}

export default Mezcal
