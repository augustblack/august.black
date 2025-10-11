import { Component, JSX } from "solid-js";
import Image from '../image'
import { Project } from './types'
import { MediaProps } from '../media'
import { Link, LinkPlain } from '../link'

const media: MediaProps[] = [
  {
    kind: 'image',
    src: "media/userradio/userradio_screen.png",
    width: 880,
    height: 736,
    blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAAAwAQCdASoKAAgAAUAmJaQAA3AA/vay/hPsKSojQt23J9eMoN+PiA/yoic8IAAA",
    alt: 'screenshot of userradio showing 4 audio faders'
  },
  {
    kind: 'image',
    src: "media/userradio/userradio_broad_overview_bw.png",
    width: 880,
    height: 736,
    blurDataURL: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoKAAgAAUAmJaQAAucSkFAAAP7+tcN03i7bfSI/AtO02TNOacD8RW/2mpt/yblBMzzL/PZcV8jAAAAA",
    alt: 'graphic of 3 people connected to a radio tower through network',
    caption: () => (<div>The audio output of the application is broadcast on terrestrial FM radio and the users are ideally within the broadcast diameter.</div>)
  },
  {
    kind: 'image',
    src: "media/userradio/userradio_server.png",
    width: 880,
    height: 736,
    blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoKAAgAAUAmJZwAAt0KY1BAAP7+8Zy7a8yzQqH3j1aU7QGqqGBrfnXdIFLndeyzliJsAAAA",
    alt: 'diagram of 3 computers connected to server connecte to radio tower',
    caption: () => (<div>Userradio works with both stored audio files (on the server) and live streams from the internet.</div>)
  },
  {
    kind: 'image',
    src: "media/userradio/userradio_klangpark.jpg",
    width: 785,
    height: 657,
    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoKAAgAAUAmJQBOgMV45JGBVUYAAP7wp2/UDfEn0cTFvVircl95Hr7XwXxKCpr7o/Eb6JeFTfOO3ezmDKt3zWnKumo6giK8KwT6jP8ins0pb+z7cpOAAA==",
    alt: 'speakers hoisted high by cranes',
    caption: () => (<div>UserRadio was a central part in the radio and communication project, &ldquo;Open Air: a radiotopia&rdquo;.  Part of the 2002 Ars Electronica in Linz, UserRadio controled the 4 sets of 100,000 watt speakers of the OMV klangpark. It has also been a part of the Radio Oltranzista and Aaniradio temporary FM stations.</div>)
  }

]
const longy: Component<{ children?: JSX.Element }> = (props) => (
  <div class="space-y-4  mx-auto">
    <div>
      Userradio mixes the new technologies of personal communication with &ldquo;old&rdquo; broadcast radio technology to create an instrument for collaborative networked audio production, where an unlimited number of individuals can mix multiple channels of audio simultaneously and together from anywhere on-line using a  standard (for the time) flash-capable browser.
    </div>
    <div>
      I initially built UserRadio in 2000-2002 for the fundamental radio show where Markus Seidl and I would stream and play sounds directly from our own server that was connected to the radio transmitter on Radio FRO. Since then, I have also used this interface at various festivals and happenings.
    </div>
    {props.children}
    <div class="pt-4 flex max-w-xl">
      <div class='flex-none'>
        <LinkPlain external href="https://assets.august.black/media/userradio/userradio.pdf">
          <Image
            class="w-32 h-48"
            width={300}
            height={386}
            src="media/userradio/userradio_pdf.jpg"
            blurDataURL="data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoKAA0AAUAmJaQAAudjJ+eBtgAA/v7dZWcp9/6+SMVvEwsgIYThRigxalIoF4C1W2L7jF7OKuHvX+oAAAA="
            alt="pdf icon"
          />
        </LinkPlain>
      </div>
      <div class="text-xs pl-4">August Black. 2004. <Link external href="https://assets.august.black/media/userradio/userradio.pdf">Userradio. In Proceedings of ACM Multimedia</Link>, New York, NY, USA , October 10 - 16, 2004. ISBN:ISBN:1-58113-893-8 DOI: 10.1145/1027527.1027570</div>
    </div>
  </div>
)


const Standup: Project = {
  kind: ['radio', 'performance', 'software'],
  key: 'userradio',
  aspect: "aspect-880/736",
  date: '2000-2004',
  title: 'UserRadio',
  shortDesc: "collaborative remote audio mixer",
  place: 'Linz, Austria',
  info: {
    long: longy,
    page: longy
  },
  media
}

export default Standup
