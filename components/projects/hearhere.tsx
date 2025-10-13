import { Component, JSX } from "solid-js"
import Image from '../image'
import { Project } from './types'
import { MediaProps } from '../media'
import { Link, LinkPlain } from '../link'

const media: MediaProps[] = [
  {
    kind: 'image',
    src: "media/hearhere/august_hearhere_collage.jpg",
    width: 3840,
    height: 2160,
    blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoKAAYAAUAmJYwCdAEe4Zslf3AAAP6Ka9+aN/ZZM7M19vr8rJuVwnJUCFGLg12WIx/6lPXP8lcIT9O0kClZt7CpBgsTpYsuN6vrdGaB5XQbA55O3MV4AAAA",
    alt: 'collage of photos, one of August from the side with headphones on, holding a tablet, and speaking into a mic, the other two of august speaking to onlookers.',
    caption: () => (<div>Left: In the Wave Farm studio. Right: giving a demonstration of the Hear Here app. 2015.</div>)
  },
  {
    bg: "bg-black",
    kind: 'video',
    poster: 'https://assets.august.black/media/hearhere/hearhere.jpg',
    src: 'https://assets.august.black/media/hearhere/HearHere720.mp4'
  }
]
const longy: Component<{ children?: JSX.Element }> = (props) => (
  <div class="space-y-4  mx-auto">
    <div>During a ten day residency at Wavefarm in Acra, NY, I built a web application that gives participants
      the ability to stream direct (via webrtc) to the broadcast in 2 second overlapping intervals.
      The resulting show lasted for two hours with as many as 30 simultaneous participants making some interesting results.
    </div>

    <div><Link class="p-1" external href="https://wavefarm.org/ta/calendar/017hn5">https://wavefarm.org/ta/calendar/017hn5</Link></div>
    <div><Link class="p-1" external href="https://github.com/augustblack/hearhere">https://github.com/augustblack/hearhere</Link></div>
    {props.children}
    <div class="pt-4 flex max-w-md">
      <div class='flex-none'>
        <LinkPlain external href="https://assets.august.black/media/hearhere/hear.pdf">
          <Image
            class="w-32 h-48"
            width={306}
            height={400}
            alt="pdf icon"
            src="media/hearhere/hear-here-pdf.png"
            blurDataURL="data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAADQAQCdASoKAA0AAUAmJaQAA1b18d6cAAD+/sgzMmPGKP+Xpy4i5T3Sdg+aDHO4e2v/dkMFAOAL7v3LUZebSdP/8FOTH69Q1M5RmYKrucoSXhTfR//f/1jelfCuN8mjS/tIq3TYgV/DMKQA"
          />
        </LinkPlain>
      </div>
      <div class="text-xs pl-4">August Black. 2017. <Link external href="/media/hearhere/hear.pdf">Hear-Here. In Proceedings of ACM Audio Mostly conference</Link>, London, UK, August 2017 (Audio Mostly’17), 6 pages. DOI: 10.475/123_4</div>
    </div>
  </div>
)


const HearHear: Project = {
  kind: ['radio', 'performance', 'software'],
  key: 'hearhere',
  aspect: 'aspect-1280/720',
  date: '2015',
  title: 'Hear Here',
  shortDesc: "web-to-FM in short overlapping intervals",
  place: 'Acra, NY',
  info: {
    long: longy,
    page: longy
  },
  media
}

export default HearHear
