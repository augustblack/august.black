import { Component, JSX } from 'solid-js'
import { Project } from './types'
import { MediaProps } from '../media'
import { Link } from '../link'


const media: MediaProps[] = [
  {
    kind: 'image',
    alt: 'a wide image of August Black in a planetarium with colorful waveforms on the large domed screen',
    src: 'media/compost/bogota_compost01.jpg',
    width: 1600,
    height: 1200,
    blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAwAgCdASoKAAgAAUAmJZQCdEf/geqKSSFeAAD+/WD/xO15vT2YI5wqfe3jcD7/cZGeFoKUgVuBaVsqL08MWlnKNhgvSv0EQAA=",
    caption: () => (<div>ID:Artes residency  @ Botota Planetarium, Colombia 2023.</div>),
  },
  {
    kind: 'image',
    alt: 'a wide image of August Black in a planetarium with colorful waveforms on the large domed screen',
    src: 'media/compost/bogota_compost02.jpg',
    width: 1600,
    height: 1200,
    blurDataURL: "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAAAwAgCdASoKAAgAAUAmJZACdEf/gh3H4J0IAAD+++9+EY2XvnNYl5MOcDxaCl4/AlZIRHHGrT7sQj+TiZ/ZHp38pLURj/zXnPNdzE2GfAAAAA==",
    caption: () => (<div>ID:Artes residency  @ Botota Planetarium, Colombia 2023.</div>),
  },
  {
    kind: 'image',
    alt: 'colorful waveforms on a planetarium screen',
    src: 'media/compost/wyoming01.jpg',
    width: 4032,
    height: 2268,
    blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoKAAYAAUAmJZQCdAEPDTZ8AAD+/nJ+AcD9gdP1oTDIRJE+U6CXQgPltbqqWhAEja7N7nZiXrAttcUhHwHgAA==",
    caption: () => (<div>live @ University of Wyoming Planetarium, 2024.</div>),
  },
  {
    kind: 'image',
    alt: 'colorful waveforms on a planetarium screen',
    src: 'media/compost/wyoming02.jpg',
    width: 4032,
    height: 2268,
    blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoKAAYAAUAmJZQCdAD0uFsOqAD+/ql2pbx9/K1UanemsFfO/2yma+qcpQH/8VdhTSyyO9wA",
    caption: () => (<div>live @ University of Wyoming Planetarium, 2024.</div>),
  },
  {
    kind: 'image',
    alt: 'screenshot of colorful waveforms on a mobile screen',
    src: 'media/compost/interface_record_march2024.png',
    width: 2400,
    height: 1080,
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full',
    blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAQCdASoKAAUAAUAmJYwCdAEOI+oAAP7+eaNxaIMd7+N/G+O/UigiqD5TAlQBhX/ePE8AEvte4ovIg7FCAAXz4/5t6f/Vh+gAAA==",
    caption: () => (<div>mobile interface with button to record, 2024.</div>)
  },

  {
    kind: 'image',
    alt: 'screenshot of colorful waveforms on a mobile screen',
    src: "media/compost/interface_stop_march2024.png",
    width: 2400,
    height: 1080,
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full',
    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADwAQCdASoKAAUAAUAmJQBOhlQAMCG79AAA/vx28xml4b/M502nH+P8a0jCgr7yFdjsvjlm+iruRG33x4jYDEaxVUn/x/Mmri4mzJaffyH9xm/8fwf3OcPyiGfzQoA4BKWgAA==",
    caption: () => (<div>mobile interface with button to record, 2024.</div>)
  },
  {
    kind: 'video',
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full',
    src: 'https://assets.august.black/media/compost/wyoming_edit2024.mp4',
    poster: 'https://assets.august.black/media/compost/wyoming01poster.jpg',
    caption: () => (<div>Recording from Cowboy Sandbox show at the Wyoming Planetarium. March 2024.</div>)
  },
  {
    kind: 'video',
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full',
    src: 'https://assets.august.black/media/compost/audio_compost-idartes.mp4',
    poster: 'https://assets.august.black/media/compost/idartesposter.jpg',
    caption: () => (<div>Early discussion of the system while on residency at IDArtes in Bogotá, Colombia, 2023.</div>)
  },

  {
    kind: 'image',
    alt: 'collage of 4 to 5 people in warm weather using audio compost and holding their mobile devices around someone\'s head',
    src: "media/compost/dinacon2.jpg",
    width: 4032,
    height: 3024,
    blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABQAgCdASoKAAcAAUAmJQBOiP/xavHKfMqnmFgA/vNlC/vmM/8t2YOloWZ68S/8xFgWZYT+1Y9G24gzZ8MtL/g/vmD28H2xirGc3dnj47L/99ISqzqUbpxBdLa5JnNwbq4sAWvY3SsCgkeHPFO47i2JfoAAAA==",
    caption: () => (<div>an early prototype made at <Link external href="https://www.2022.dinacon.org/">Dinacon in Sri Lanka, 2022</Link>.</div>)
  }
]
const page: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="flex flex-col lg:flex-row gap-4">
      <div class="flex-1">
        One of the most disruptive technological developments of our time is also, now, one of the most diverse and overlooked.  While mobile smart phones come packed with computational capabilities (such as lidar, multiple cameras, and hi resolution displays) a very under-appreciated feature is the lowly wireless microphone built into each device.  While people tend to be attentive and accepting to their own photographic image, often smitten by their own appearance, the recorded voice  holds a parallax tension that is simultaneously  too personal and too foreign for many to digest as easily as a photograph. Like a camera, we carry a mic with us at all times, but don&apos;t use it in the same capacity despite (or because) it is so electric and cutting.
      </div>
      <div class="flex-1">
        Audio Compost is a performance instrument and radiophonic installation whereby visitors can use their mobile phones to capture their voice and send it into a live  <Link external href="https://happymag.tv/frippertronics/">frippertronic loop</Link> that mixes their voices with others in an ever evolving and undetermined sonic event. For the performance part, the mobile phones of all participants act as both the microphone and audio output.  Given 20-100 participants, each opens a simple web url in their mobile phone’s browser and clicks a button to record their voice. The recording of any participant is sent to all others in real-time. Each user sees the audio waveforms of the other participants as well as a line going across their screen to mark the current play/record head.
      </div>
      <div class="flex-1">
        It has two modes. In bidirectional mode, each participant’s phone plays the entire loop in sync with all of the other participants as one big multi-channel wall of sound. In unidirectional mode, the sound is played for everyone over a PA.
        The software is adaptable for various installations and venues, and is part of ongoing research in how to use global networking for hyper-local connectivity - how to create, mark, or display a sense of &ldquo;togetherness&rdquo;.
      </div>
    </div>
    {props.children}
  </>
)
const longy: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div>
      Audio Compost is a performance instrument and radiophonic installation whereby visitors can use their mobile phones to capture their voice and send it into a live  <Link external href="https://happymag.tv/frippertronics/">frippertronic loop</Link> that mixes their voices with others in an ever evolving and undetermined sonic event.
    </div>
    <div>
      The software is adaptable for various installations and venues, and is part of ongoing research in how to use global networking for hyper-local connectivity.
    </div>
    {props.children}
  </>
)


const Compost: Project = {
  kind: ['performance', 'installation', 'software'],
  key: 'compost',
  aspect: "aspect-4/3",
  date: '2022 - ∞',
  title: 'Audio Compost',
  shortDesc: 'virtual frippertronic loop',
  place: 'various',
  info: {
    long: longy,
    page
  },
  media
}

export default Compost
