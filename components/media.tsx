import { Component, For, Show, Switch, Match, type JSX, onMount, onCleanup } from 'solid-js'
import { fadeOutElement } from './utils'
import Image from './image'

type SubProps = { sub?: string; subLabel?: string }
type SubsProps = { subs?: Array<SubProps>; src: string }
type CaptionProps = { caption?: () => JSX.Element, class?: string }

type VideoProps = {
  kind: "video"
  bg?: string
  imgClass?: string
  capClass?: string
  src: string
  poster?: string
  caption?: () => JSX.Element
  subs?: Array<SubProps>
}

export type GenericProps = {
  kind: 'generic'
  src: string
  capClass?: string
  content: () => JSX.Element
  caption?: () => JSX.Element
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
  capClass?: string
  caption?: () => JSX.Element
}

export type MediaProps = VideoProps | GenericProps | ImageProps

type MediaGroupProps = {
  aspect: string
  media: MediaProps[]
}

type MediaGridProps = {
  media: MediaProps[]
  aspect?: string
}

const Caption: Component<CaptionProps> = (props) => {
  if (!props.caption) return null
  return (
    < div class={
      "absolute text-xs lg:text-sm xl:text-sm p-2 bg-slate-900 text-slate-100 w-full opacity-75 hidden md:block " +
      (props.class || "")
    }>
      {props.caption()}
    </div >
  )
}

const SubTrack: Component<SubProps> = (props) =>
  props.sub && props.sub.trim() !== '' ? (
    <track label={props.subLabel} kind="subtitles" srclang="en" src={props.sub} default />
  ) : null

const SubTracks: Component<SubsProps> = (props) => (
  <Show when={props.subs && props.subs.length}>
    <For each={props.subs}>
      {(s) => <SubTrack {...s} />}
    </For>
  </Show>
)

const stopEvent = (e: KeyboardEvent | MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()
}

const pausePlayingAudio = (audioId: string) => {
  const audioEls = document.getElementsByTagName('audio')
  for (let i = 0; i < audioEls.length; i++) {
    const el = audioEls.item(i)
    if (el && el.id !== audioId) {
      fadeOutElement(el, 0.0)
    }
  }
}

const pausePlayingVideo = (videoId: string) => {
  const videoEls = document.getElementsByTagName('video')
  for (let i = 0; i < videoEls.length; i++) {
    const el = videoEls.item(i)
    if (el && el.id !== videoId) {
      fadeOutElement(el, 0.0)
    }
  }
}

const Video: Component<VideoProps> = (props) => {
  const handlePlay = () => {
    pausePlayingAudio(props.src)
    pausePlayingVideo(props.src)
  }
  // NOTE: we put the video captions on TOP so that we can see the video controls
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
      <Caption caption={props.caption} class={" top-0 " + props.capClass} />
    </div>
  )
}

const ImageLocal: Component<ImageProps> = (props) => (
  <div class={"w-full h-full relative " + (props.bg || '')} >
    <Image
      draggable={false}
      src={props.src}
      alt={props.alt}
      class={props.imgClass || "object-cover object-center  w-full h-full "}
      width={props.width}
      height={props.height}
      blurDataURL={props.blurDataURL}
    />
    <Caption caption={props.caption} class={" bottom-0 " + props.capClass} />
  </div>
)

const GenericMedia: Component<GenericProps> = (props) => (
  <div class="w-full m-4 md:m-8">
    {props.content()}
    <Caption caption={props.caption} class={" bottom-0 " + props.capClass} />
  </div>
)

export const Media: Component<MediaProps> = (props) => (
  <Switch fallback={<p>Unknown status</p>}>
    <Match when={props.kind === "image"}>
      <ImageLocal {...props as ImageProps} />
    </Match>
    <Match when={props.kind === "video"}>
      <Video {...props as VideoProps} />
    </Match>
    <Match when={props.kind === "generic"}>
      <GenericMedia {...props as GenericProps} />
    </Match>
  </Switch>
)

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
      class={'h-8 max-w-1/2 lg:max-w-none outline-none ' + props.class}
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
  let carouselRef: HTMLDivElement | undefined
  let slideRefs: HTMLDivElement[] = []

  const onChangeIndex = () => {
    pausePlayingVideo('wtf')
    pausePlayingAudio('wtf')
  }

  onMount(() => {
    if (!carouselRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const slideId = entry.target.id
            const slideIndex = parseInt(slideId.replace('slide', ''))
            if (!isNaN(slideIndex)) {
              onChangeIndex()
            }
          }
        })
      },
      {
        root: carouselRef,
        threshold: 0.5, // Trigger when 50% of the slide is visible
        rootMargin: '0px'
      }
    )

    // Observe all slide elements
    slideRefs.forEach((slide) => {
      if (slide) observer.observe(slide)
    })

    onCleanup(() => {
      observer.disconnect()
    })
  })

  return (
    <div ref={carouselRef} class={"carousel carousel-horizontal w-full  " + (props.aspect || "aspect-video")}>
      <For each={props.media}>
        {(mediaItem, index) => (
          <div
            ref={(el) => (slideRefs[index()] = el)}
            id={`slide${index()}`}
            class="carousel-item relative w-full h-full overflow-hidden "
          >
            <Media {...mediaItem} />
          </div>
        )}
      </For>
    </div>
  )
}

export const MediaGrid: Component<MediaGridProps> = (props) => (
  <div class="flex-1 w-full">
    <div class="grid grid-flow-row gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-8 p-4 ">
      <For each={props.media}>
        {(m, _idx) => (
          <div class={"relative w-full overflow-hidden " + (props.aspect)}>
            <Media {...m} />
          </div>
        )}
      </For>
    </div>
  </div>
)
