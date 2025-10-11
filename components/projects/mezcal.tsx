import { Component, For, JSX } from "solid-js"
import { Project } from './types'
import { MediaProps, Audio } from '../media'
import { Logos } from './logos'

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
const DesignGroup = {
  'Alejo Duque': 'http://red.radiolibre.cc',
  'Namita Pasupuleti ': 'https://namitapasu.wordpress.com/about-me/'
}
const InfraGroup = {
  'Kimberley Bianca': 'https://www.kimberleybianca.com/',
}

const Alon = () => (
  <span class='ml-2 sm:ml-4 md:ml-8 whitespace-nowrap' style="font-size:0.57rem; line-height:1rem" ><a target="_blank" href="https://alonkoppel.com/">&copy;Alon Koppel</a></span>
)

const Hethre = () => (
  <span class='ml-2 sm:ml-4 md:ml-8 whitespace-nowrap' style="font-size:0.57rem; line-height:1rem">&copy;Hethre Contant</span>
)

const media: MediaProps[] = [
  {
    kind: 'image',
    src: "media/mezcal/mezcal_logo.svg",
    width: 3149,
    height: 3148,
    blurDataURL: "data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAACQAACQAAQUxQSFcAAAABcFTbttqcMHNSJgfkAi20o2qIhk5JAtcAd8quSENETAD/ZgYh2MMMrNM5jNMd7OOFNHrHRzhEq/7kFhzgID+u9abwQVgADtD2jSQvJXVoxV6t5GQL/AsAVlA4IEgAAACwAQCdASoKAAoAAUAmJbACdLoABGaAAP7od5Qg7xlgvQJy11s27j17L3PXr8kwCMAxjXyqf9r/9XNCVKYCP7Px//1ofNKxoAA=",
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full',
    alt: 'mezcal logo'
  },
  {
    kind: 'image',
    src: "media/mezcal/wavefarm_workshop_mobile.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAQCdASoKAAcAAUAmJaQCw7DdK//JSoAA/voP1ry7hHefgcbSLFH6KrF1yZsLfOO/mDxBifYfz3/+lZGnu0PSco6fD9MX+wv3ba9iBXuJcAW8QRE0FGAAAAA=",
    alt: 'mobile phone with audio mixer app, mezcal',
    caption: () => (<div>The mezcal interface.
      <Alon />
    </div>
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
      <div class='flex-grow'>Mezcal workshop led by Florencia Curci at <a target="_blank" href="https://todalateoriadeluniverso.org/">Todo la Teor&iacute;a del Universo</a>.
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
      <div class='flex-grow'>Mezcal at work for the <a target="_blank" href="https://acousticommons.net/~/#">Spree Channelsea Radio Group</a>.
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
    src: "media/mezcal/wavefarm_workshop_2021_01.jpg",
    width: 1080,
    height: 720,
    blurDataURL: "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAABwAgCdASoKAAcAAUAmJaACdEf/2SIC/nTzsKQAAP7SOHIryPSVBnINmnt3tkmuybXv27XBi7cujcd2N0o+Lp2URVWPibxVfO/x3AgWPP6KcYI08wbhe/7Dfw3aqIPM7T2Yd9X/dfz7jvx2y64LuAAA",
    alt: '14 people looking at speaker on large porch',
    caption: () => (<div class='flex flex-row'>
      <Audio
        class='mt-1 flex-shrink mr-2'
        small={true}
        id='wavefarm_workshop'
        sources={[
          { type: 'audio/mp3', src: 'https://assets.august.black/media/mezcal/wavefarm_workshop_edit.mp3' }
        ]}
      />
      <div class='flex-grow'>Mezcal workshop at <a target="_blank" href="https://wavefarm.org">Wave Farm</a>.
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
    caption: () => (<div>Mezcal workshop at <a target="_blank" href="https://wavefarm.org">Wave Farm</a>, summer 2021.
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
    caption: () => (<div>Mezcal workshop at <a target="_blank" href="https://wavefarm.org">Wave Farm</a>, summer 2021.
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
    caption: () => (<div>Mezcal workshop at <a target="_blank" href="https://wavefarm.org">Wave Farm</a>, summer 2021.
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
    caption: () => (<div class='flex flex-row'>
      <Audio
        class='mt-1 flex-shrink mr-2'
        id='wavefarm_footsteps'
        sources={[
          { type: 'audio/mp3', src: 'https://assets.august.black/media/mezcal/wavefarm_footsteps.mp3' }
        ]}
        small={true} />
      <div class='flex-grow'>&quot;Footsteps on Gravel&quot; <a target="_blank" href="https://wavefarm.org">&copy;Wave Farm</a>, summer 2021.
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
    caption: () => (<div class=''>
      <Audio
        class='mb-1 mr-2 h-6 inline-block float-left'
        id='wavefarm_migrant_detention_radio'
        sources={[
          { type: 'audio/mp3', src: 'https://assets.august.black/media/mezcal/wavefarm_migrant_detention_radio.mp3' }
        ]}
        small={true}
      />
      <div class=''><a target="_blank" href='https://wavefarm.org/wf/archive/v93f5v'>Migrant Detention Radio</a> - live from the Aurora, CO and Otay Mesa, CA detention centers by <a target="_blank" href='http://eliseortiz.net/'>Eliseo Ortiz</a> and <a target="_blank" href='https://www.jessica-ordaz.com/'>Prof. Jessica Ordaz</a>.</div>
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
    caption: () => (<div>The mezcal interface.</div>)
  },
]

const longy: Component<{ children?: JSX.Element }> = ({
  children
}) => (
  <>
    <div class="">
      Mezcal is a browser app and telematic service that currently works similar to the audio rooms of Slack or Discord, but with broadcast scalability and audio-specific features. The design and development of the software is ongoing and made in close collaboration with radio activists, artists and researchers from the USA, UK, Netherlands, Italy, Colombia, and Australia.
    </div>
    <div class=""><b>Press, publications:</b>
      <div class="space-y-1 m-4">
        <div ><a target="_blank" href='https://oe1.orf.at/programm/20210627/642046/Akustische-Live-Vernetzung-ueber-Grenzen-hinweg'>Akustische Live Vernetzung</a></div>
        <div ><a target="_blank" href='https://www.newmediacaucus.org/migrant-detention-radio-on-wave-farm-wgxc-90-7-fm/'>New Media Caucus</a></div>
      </div>
    </div>
    <Logos logos={['wavefarm', 'atlas', 'dcmp']} />
    {children}
  </>
)
const page: Component<{ children?: JSX.Element }> = ({
  children
}) => (
  <>
    <div class="">
      Mezcal is a telematic service that allows multiple constituents to fluidly participate in broadcast-like scenarios through their mobile devices at the flick of their thumbs. It is a new kind of radio that is cheap and quick and easy. Listeners get an immediate way to call in and contribute.  Producers can make shows by themselves, in collaboration with others, at remote locations or on site, and/or in synchronous or asynchronous modes. Both listeners and producers can hop-on or off the stream at will. It all works in a browser, outside of app stores, and is a different kind of networked radio where the boundary between listener and producer can be strict or blurred.
    </div>
    <div class="">
      Mezcal currently works similar to the audio rooms of Slack or Discord, but with broadcast scalability and audio-specific features such as mixing of multiple audio sources, re-streaming to icecast, fingertip access to various online media archives, etc. The project is at a working beta status and in constant development in collaboration with activists, artists and researchers from the USA, UK, Netherlands, Italy, Colombia, and Australia.
    </div>
    <div>Not unlike how a piano provides its “users” with a vast set of possible acoustic outcomes - everything from classical to jazz and noise - I see Mezcal as an instrument for diverse practices in transmission and sound art, for providing alternative modes of point to point communication for social movements, and as a new technological form of environmental and journalistic reporting.
    </div>
    <div class=""><b>Related events:</b>
      <div class="space-y-1 m-4">
        <div><a target="_blank" href="https://www.nsota.org/">New School of the Anthropocene</a> collaborative radio show for <a target="_blank" href="https://www.mixcloud.com/Resonance/playlists/bad-punk/">‘Bad Punk’</a> on Resonance FM 2024</div>
        <div><a target="_blank" href="https://www.kunstradio.at/PROJECTS/AB2024/">Art&lsquo;s Birthday 2024</a></div>
        <div><a target="_blank" href="https://acousticommons.net/~/#">Spree Channelsea Radio Group 2023</a></div>
        <div ><a target="_blank" href="https://centrodeartesonoro.cultura.gob.ar/actividad/terra-ignota/">Terra Ignota Radio Forum 2023</a></div>
        <div ><a target="_blank" href="http://kunstradio.at/PROJECTS/AB2023/network-kunstradio-party.php">Art&lsquo;s Birthday 2023</a></div>
        <div ><a target="_blank" href="https://wavefarm.org/radio/wgxc/audio-archive/jbrxxs">The Conduction Series, Nov. 2021 - ongoing</a></div>
        <div ><a target="_blank" href="https://acousticommons.net/listen/land-to-return">Acoustic Commons - Земля повернення, земля турботи, 2022</a></div>
        <div ><a target="_blank" href="https://wavefarm.org/ta/archive/works/b0eaj7">Radio Research Residency @ Wave Farm 2021</a></div>
        <div ><a target="_blank" href="https://wavefarm.org/wf/archive/v93f5v">Migrant Detention Radio, 2021</a></div>
      </div>
    </div>
    <div class=""><b>Workshops:</b>
      <div class="space-y-1 m-4">
        <div><a target="_blank" href="https://todalateoriadeluniverso.org/">Todo la Teor&iacute;a del Universo</a> by Florencia Curci</div>
        <div ><a target="_blank" href="https://radiopreservation.org/2023-conference/">Radio Preservation Task Force 2023, Library of Congress DC</a></div>
        <div ><a target="_blank" href="https://piksel.no/2022/11/01/pikselxx-ai-ai-ai-workshops">Piksel 2022, Norway</a></div>
        <div ><a target="_blank" href="https://pif.camp/piflog-day-4/">PIF Camp 2022, Slovenia</a></div>
        <div ><a target="_blank" href="https://107.org.au/event/mezcal-radio-workshop/">Radio Workshops @ Project 107 Sydney, Australia 2023</a> by Jon Panther</div>
        <div ><a target="_blank" href="https://107.org.au/event/mezcal-radio-transmission-and-sound-art-2/">Radio Workshops @ Project 107 Sydney, Australia 2022</a> by Jon Panther</div>
        <div ><a target="_blank" href="https://wavefarm.org/ta/archive/works/b0eaj7">Wave Farm 2021</a></div>
      </div>
    </div>

    <div class=""><b>Credits:</b>
      <div class="space-y-1 m-4">
        <div>software: August Black (lead), Henry Saver (intern)</div>
        <div>design: August Black (lead),
          <For each={Array.from(Object.entries(DesignGroup))}>
            {([k, url], idx) => (<span>{idx() === 0 ? '' : ', '}<a target="_blank" href={url}>{k}</a></span>)}
          </For>
        </div>
        <div>beta group:
          <For each={Array.from(Object.entries(BetaGroup))}>
            {([k, url], idx) => (<span>{idx() === 0 ? '' : ', '}<a target="_blank" href={url}>{k}</a></span>)}
          </For>
        </div>
        <div>documenation and grant writing:
          <For each={Array.from(Object.entries(InfraGroup))}>
            {([k, url], idx) => (<span>{idx() === 0 ? '' : ', '}<a target="_blank" href={url}>{k}</a></span>)}
          </For>
        </div>

        <div>logo: <a target="_blank" href="https://nimabahrehmand.com/">Nima Bahrehmand</a></div>
      </div>
    </div>
    <div class=""><b>Press, publications:</b>
      <div class="space-y-1 m-4">
        <div ><a target="_blank" href='https://oe1.orf.at/programm/20240229/750542/Kuenstliche-Intelligenz-feiert-den-Geburtstag-der-Kunst'>Künstliche Intelligenz feiert den Geburtstag der Kunst</a> on <a target="_blank" href='https://oe1.orf.at/soundart/kunstzumhoeren'>KUNST ZUM HÖREN</a> 2024 (at minute 11, I speak about m3zcal)</div>
        <div ><a target="_blank" href='https://oe1.orf.at/programm/20210627/642046/Akustische-Live-Vernetzung-ueber-Grenzen-hinweg'>Akustische Live Vernetzung</a> 2023</div>
        <div ><a target="_blank" href='https://www.newmediacaucus.org/migrant-detention-radio-on-wave-farm-wgxc-90-7-fm/'>New Media Caucus</a> 2021</div>
      </div>
    </div>
    <Logos logos={['wavefarm', 'atlas', 'dcmp']} />
    {children}
  </>
)

const Mezcal: Project = {
  kind: ['radio', 'performance', 'software'],
  aspect: "aspect-1080/720",
  key: 'mezcal',
  date: '2020 - ∞',
  title: 'Mezcal',
  shortDesc: "transmission and sound art instrument",
  place: 'Boulder, CO',
  info: {
    long: longy,
    page
  },
  media
}

export default Mezcal
