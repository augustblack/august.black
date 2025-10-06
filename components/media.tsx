import { Component, For, JSX, createSignal, onMount } from 'solid-js'
import { adjustVolume, mainAudioId } from './utils'

type SubProps = { sub?: string; subLabel?: string }
type SubsProps = { subs?: Array<SubProps>; src: string }
type CaptionProps = { caption?: JSX.Element }

type VideoProps = {
  kind: "video"
  bg?: string
  imgClass?: string
  src: string
  poster?: string
  caption?: JSX.Element
  subs?: Array<SubProps>
}

export type GenericProps = {
  kind: 'generic'
  src: string
  children: JSX.Element
  caption?: JSX.Element
}

export type ImageProps = {
  kind: "image",
  src: string
  width: number
  height: number
  blurDataURL: string
  alt: string
  bg?: string
  imgClass?: string
  caption?: JSX.Element
}

export type MediaProps = VideoProps | GenericProps | ImageProps

type MediaGroupProps = {
  media: MediaProps[]
}

type MediaGridProps = {
  media: MediaProps[]
  aspect?: string
}

const Caption: Component<CaptionProps> = (props) =>
  props.caption ? (
    <div class="absolute bottom-0 text-xs lg:text-sm xl:text-sm p-2 bg-slate-900 text-slate-100 w-full opacity-75">
      {props.caption}
    </div>
  ) : null

const SubTrack: Component<SubProps> = (props) =>
  props.sub && props.sub.trim() !== '' ? (
    <track label={props.subLabel} kind="subtitles" srclang="en" src={props.sub} default />
  ) : null

const SubTracks: Component<SubsProps> = (props) =>
  props.subs && props.subs.length ? (
    <>
      <For each={props.subs}>
        {(s) => <SubTrack {...s} />}
      </For>
    </>
  ) : null

const stopEvent = (e: KeyboardEvent | MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()
}

const pausePlayingAudio = (audioId: string) => {
  const audioEls = document.getElementsByTagName('audio')
  for (let i = 0; i < audioEls.length; i++) {
    const el = audioEls.item(i)
    if (el && el.id !== audioId && el.id !== mainAudioId) {
      adjustVolume(el, 0.0)
        .then(() => el.pause())
        .then(() => adjustVolume(el, 1.0))
        .catch(console.error)
    }
  }
}

const pausePlayingVideo = (videoId: string) => {
  const videoEls = document.getElementsByTagName('video')
  for (let i = 0; i < videoEls.length; i++) {
    const el = videoEls.item(i)
    if (el && el.id !== videoId && el.id !== mainAudioId) {
      adjustVolume(el, 0.0)
        .then(() => el.pause())
        .then(() => adjustVolume(el, 1.0))
        .catch(console.error)
    }
  }
}

const Video: Component<VideoProps> = (props) => {
  const handlePlay = () => {
    pausePlayingAudio(props.src)
    pausePlayingVideo(props.src)
  }
  return (
    <div class={"w-full h-full relative flex items-center " + (props.bg || '')} >
      <video
        class={"w-full relative " + (props.imgClass || '')}
        onPlay={handlePlay}
        poster={props.poster}
        controls
        id={props.src}
        onKeyUp={stopEvent}
        onKeyDown={stopEvent}
        onClick={stopEvent}
        playsinline
      >
        <source src={props.src} />
        <SubTracks subs={props.subs} src={props.src} />
      </video>
      <Caption caption={props.caption} />
    </div>
  )
}

const ImageLocal: Component<ImageProps> = (props) => (
  <div class={"w-full h-full relative " + (props.bg || '')} >
    <img
      draggable={false}
      src={props.width < props.width
        ? `https://assets.august.black/${props.src.split('.').slice(0, -1)}-${props.width}.webp`
        : `https://assets.august.black/${props.src}`
      }
      alt={props.alt}
      class={props.imgClass || "object-cover object-center w-full h-full"}
    />
    <Caption caption={props.caption} />
  </div>
)

const GenericMedia: Component<GenericProps> = (props) => (
  <div>
    {props.children}
    <Caption caption={props.caption} />
  </div>
)

export const Media: Component<MediaProps> = (props) =>
  props.kind === 'generic' ? (
    <GenericMedia {...props} />
  ) : props.kind === 'image' ? (
    <ImageLocal {...props} />
  ) : props.kind === 'video' ? (
    <Video {...props} />
  ) : null

export type MediaSources = Array<{
  type: string
  src: string
}>

export const Audio: Component<{
  id: string
  sources: MediaSources
  class?: string
  small?: boolean
}> = (props) => {
  const handlePlay = () => pausePlayingAudio(props.id)
  return (
    <audio
      controls
      class={'h-8 outline-none ' + props.class}
      style={props.small ? { "max-width": '50%' } : {}}
      onPlay={handlePlay}
      id={props.id}
    >
      <For each={props.sources}>
        {(s) => <source type={s.type} src={s.src} />}
      </For>
    </audio>
  )
}

export const MediaGroup: Component<MediaGroupProps> = (props) => {
  const [currentIndex, setCurrentIndex] = createSignal(0)

  const onChangeIndex = (index: number) => {
    setCurrentIndex(index)
    pausePlayingVideo('wtf')
    pausePlayingAudio('wtf')
  }

  return (
    <div class="carousel w-full h-full">
      <For each={props.media}>
        {(mediaItem, index) => (
          <div
            id={`slide${index()}`}
            class="carousel-item relative w-full h-full"
          >
            <Media {...mediaItem} />
          </div>
        )}
      </For>
    </div>
  )
}

export const MediaGrid: Component<MediaGridProps> = (props) => (
  <div class="min-w-1/2 mx-auto flex-1">
    <div class="grid grid-flow-row gap-2 md:gap4 lg:gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
      <For each={props.media}>
        {(m, _idx) => (
          <div class={"relative " + (props.aspect || 1)}>
            <Media {...m} />
          </div>
        )}
      </For>
    </div>
  </div>
)
