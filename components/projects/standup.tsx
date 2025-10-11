import { Component, JSX } from "solid-js";
import { Project } from './types'
import { MediaProps, Audio } from '../media'
import { Link } from '../link'

// const audioTextStyle = 'inline-block text-center text-xs md:text-sm lg:text-md xl:text-md w-1/2 mb-2'
const audioTextStyle = 'text-center text-xs md:text-sm lg:text-md xl:text-md w-full '

// style={{ backgroundImage: 'url(/img/standupradio.jpg)' }}
const media: MediaProps[] = [
  {
    kind: 'generic',
    src: 'standupradio',
    content: () => (
      <div class="grid grid-cols-2 lg:grid-cols-1 gap-2 w-full" >
        <div class={audioTextStyle}>
          <Audio
            class="w-full"
            id='standup_mix'
            sources={[
              { type: 'audio/mp4', src: 'https://assets.august.black/media/standup/standup_mix.m4a' }
            ]}
          />
          <div>mix #1</div>
        </div>
        <div class={audioTextStyle}>
          <Audio
            class="w-full"
            id='standup_track04'
            sources={[
              { type: 'audio/mp4', src: 'https://assets.august.black/media/standup/standup_track04.m4a' }
            ]}
          />
          <div>Berlin, 2000-12</div>
        </div>
        <div class={audioTextStyle}>
          <Audio
            class="w-full"
            id='standup_track05'
            sources={[
              { type: 'audio/mp4', src: 'https://assets.august.black/media/standup/standup_track05.m4a' }
            ]}
          />
          <div>schwimmbad, 2001-08</div>
        </div>
        <div class={audioTextStyle}>
          <Audio
            class="w-full"
            id='standup_track06'
            sources={[
              { type: 'audio/mp4', src: 'https://assets.august.black/media/standup/standup_track06.m4a' }
            ]}
          />
          <div>Hamburg, 2001-09</div>
        </div>
        <div class={audioTextStyle}>
          <Audio
            class="w-full"
            id='standup_track07'
            sources={[
              { type: 'audio/mp4', src: 'https://assets.august.black/media/standup/standup_track07.m4a' }
            ]}
          />
          <div>schwimmbad #2, 2001-08</div>
        </div>
        <div class={audioTextStyle}>
          <Audio
            class="w-full"
            id='standup_track08'
            sources={[
              { type: 'audio/mp4', src: 'https://assets.august.black/media/standup/standup_track08.m4a' }
            ]}
          />
          <div>Wien 4, 2000-10</div>
        </div>
        <div class={audioTextStyle}>
          <Audio
            class="w-full"
            id='standup_track09'
            sources={[
              { type: 'audio/mp4', src: 'https://assets.august.black/media/standup/standup_track09.m4a' }
            ]}
          />
          <div>hofer, 2001-02</div>
        </div>
      </div>
    )
  }
]

const longy: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="">
      Standup radio was the monthly radio and audio collaboration of <Link external href="http://ruperthuber.com/">Rupert Huber</Link> and August Black on <Link external href="https://www.o94.at/">Radio Orange</Link>,
      FM 94mhz in Vienna, Austria from 2000-2003.
    </div>
    <div class="">
      Most shows were made either by recording while traveling or by one of us phoning or streaming in live to the radio station.
    </div>
    {props.children}
  </>
)


const Standup: Project = {
  kind: ['radio', 'performance', 'installation'],
  key: 'standup',
  date: '2000-2003',
  aspect: "aspect-4/3",
  title: 'Standup Radio',
  shortDesc: "Monthly 1-hour art-radio broadcast",
  place: 'Linz, Austria',
  info: {
    long: longy,
    page: longy
  },
  media
}

export default Standup
