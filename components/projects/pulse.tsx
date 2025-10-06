import { Component, JSX } from 'solid-js'
import { Project } from './types'
import { MediaProps } from '../media'

const media: MediaProps[] = [
  {
    kind: 'image',
    alt: 'screen shot of two phones running the pulse memorial interface show a pink background with a round red play button',
    src: 'media/pulse/pulse_phones.png',
    width: 2000,
    height: 1945,
    blurDataURL: "data:image/webp;base64,UklGRgoBAABXRUJQVlA4WAoAAAAQAAAACQAACQAAQUxQSFIAAAANcBPbtqvs+879kVRT5x4FKKNCCDKyEVDB0L3UoSEikj+H02/xKsfv/LzZ95TcD7yNrBiUVYXwivAsSDhEAypmFCN5tpA8O0IZoeulDKvyyWEJVlA4IJIAAAAwAgCdASoKAAoAAUAmJbACdAECpsrXvLewAAD+6Kb4WB5W0lf/iiFv8aUVWlq7NJuIr4ymdzNRprjzHnkL340ZSw3f/2YsP2z5/qg/flkd+cwje4POxnwLcwH2NaS+RFq848vQ4ECh/5N+PFJOzEHO6m77fXIIze4x2f/x1rw/5uL/qu/4XcIEv+T1SnWF8AAAAA==",
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full'
  },
  {
    kind: 'image',
    alt: 'picture of participants experiencing the pulse memorial in a dark setting',
    src: 'media/pulse/pm_01.jpg',
    width: 4096,
    height: 2160,
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full',
    blurDataURL: "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoKAAUAAUAmJaQAAu0dh+wAAP7/KwHTgPSmrNUwAAA="
  },
  {
    kind: 'video',
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full',
    src: 'https://assets.august.black/media/pulse/pulse_nov_2024.mp4',
    poster: 'https://assets.august.black/media/pulse/pm_02.jpg'
  }
]

const page: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div>
      The Pulse Memorial is a web-streamed sound installation that commemorates the lives lost in the mass shooting at the Pulse Bar in Orlando, Florida, where a gunman killed forty-nine Latine, Black, and queer patrons. This tragedy happened in June 2016 during a period of heightened fear among immigrant and marginalized communities anticipating the Trump election victory in November.
    </div>
    <div>
      The installation commemorates victims that continue to be erased out of broader histories of domestic terrorism and gun violence. The broadcasted sound plays an 8-channel score, then transmitted via WebRTC to participants — one channel per device — for a multi-channel sonic event.
    </div>
    {props.children}
  </>
)

const longy: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div>
      The Pulse Memorial is a queer cyber memorial in commemoration of the 49 lives lost in the 2016 Pulse nightclub shooting in Orlando, Florida. Unlike traditional memorials that focus on geolocal specifics and monumentality, our project explores the potential of migratory digital memorials that foster a sense of the ephemeral and develop new conditions of listening and togetherness.
    </div>
    <div>
      This project is a collaboration between Brook Vann and August Black
    </div>
    {props.children}
  </>
)


const Pulse: Project = {
  kind: ['radio', 'installation', 'software'],
  key: 'pulse',
  aspect: "aspect-4/3",
  date: '2024 - ∞',
  title: 'Pulse Memorial',
  shortDesc: "mobile multichannel memorial",
  place: 'various',
  info: {
    long: longy,
    page
  },
  media
}

export default Pulse
