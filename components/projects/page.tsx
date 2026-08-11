import { Component, For, Show, createSignal } from 'solid-js'
import { Media, type MediaProps } from '../media'
import Image from '../image'
import { Logos } from './logos'
import Menu from '../menu'
import { LinkPlain } from '../link'
import { Project } from './types'

// bg-linear-to-b from-primary/100 via-base-100/100 to-base-100/10 
// NOTE: do not use Media instead of ShowFirstImage.  Since we are using a 
// LinkPlain to wrap this AND since captions can have another LinkPlain or <a> tag
// inside it, we can create a circular situation for Solid.js.
// Anchor tags are not allowed to wrap other anchor tags
const ShowFirstImage: Component<{ media?: MediaProps[], current: boolean }> = (props) => {
  const media = props.media?.find(m => m.kind === 'image')
  return (
    <Show when={media}>
      <div class={"h-24 aspect-video outline " + (media?.bg ? media.bg : "")}>
        <Image
          draggable={false}
          src={media?.src || 'wtf'}
          alt={media?.alt || 'wtf'}
          class={(props.current ? "grayscale " : "") + (media?.imgClass || "object-cover object-center w-full h-full")}
          width={media?.width || 10}
          height={media?.height || 10}
          blurDataURL={media?.blurDataURL}
          sizes="100px"
        />
      </div>
    </Show>
  )
}

const ProjectSlide: Component<{ project: Project, current: boolean }> = (props) => (
  <div class="carousel-item flex flex-col gap-1">
    <LinkPlain href={'/' + props.project.key} class="" disabled={props.current}>
      <ShowFirstImage media={props.project.media} current={props.current} />
      <div class={"flex justify-center uppercase text-xs text-nowrap whitespace-no-wrap overflow-hidden text-ellipsis "
        + (props.current ? "bg-black text-primary rounded px-1" : "")}>
        {props.project.title}
      </div>
    </LinkPlain>
  </div>
)

const ProjectCarousel: Component<{ current: string, recent: Project[], older: Project[] }> = (props) => {
  const [showOlder, setShowOlder] = createSignal(props.older.some(p => p.key === props.current))

  const slide = (p: Project) => (
    <ProjectSlide
      project={p}
      current={p.key === props.current}
    />
  )

  return (
    <div
      class="w-full flex justify-center gap-4 bg-linear-to-t from-primary/100 via-base-100/100 to-base-100/0"
    >
      <div class="carousel carousel-center w-full lg:w-2/3 gap-4 px-4 mt-10 py-8 ">
        <For each={props.recent}>{slide}</For>
        <div class="carousel-item items-center">
          <button
            class="btn btn-sm btn-ghost btn-primary font-light lowercase text-nowrap"
            onclick={() => setShowOlder(o => !o)}
          >{showOlder() ? "hide older" : "older projects"}</button>
        </div>
        <Show when={showOlder()}>
          <For each={props.older}>{slide}</For>
        </Show>
      </div>
    </div >
  )
}

export const ProjectPage: Component<{ project: Project }> = (props) => {
  const text = props.project.text || []
  const media = props.project.media || []
  const content: Array<{ type: 'text' | 'media-horizontal' | 'media-vertical', content: any, index: number }> = []

  let textIndex = 0
  let mediaIndex = 0
  let isHorizontal = true // Start with horizontal for first media group

  while (textIndex < text.length || mediaIndex < media.length) {
    // Add text if available
    if (textIndex < text.length) {
      content.push({ type: 'text', content: text[textIndex], index: textIndex })
      textIndex++
    }

    // Add media group if available
    if (mediaIndex < media.length) {
      const mediaGroup = []

      // Take 2 media items for this group
      if (mediaIndex < media.length) {
        mediaGroup.push(media[mediaIndex])
        mediaIndex++
      }
      if (mediaIndex < media.length) {
        mediaGroup.push(media[mediaIndex])
        mediaIndex++
      }

      content.push({
        type: isHorizontal ? 'media-horizontal' : 'media-vertical',
        content: mediaGroup,
        index: Math.floor((mediaIndex - 1) / 2)
      })

      isHorizontal = !isHorizontal // Alternate between horizontal and vertical
    }
  }

  return (
    <div class="w-full p-0 lg:p-4 items-center justify-center flex flex-col gap-4 lg:gap-8">
      <For each={content}>
        {(item, idx) => (
          <>
            {item.type === 'text' && (
              <div class="w-full flex flex-row gap-2">
                <div class="w-0 hidden lg:flex lg:w-1/6" />
                <div class={"w-full lg:w-2/3 px-4 lg:px-0 prose prose-lg text-base-content font-light " +
                  (idx() === 0 ? "uppercase leading-[1.6] text-md sm:text-lg md:text-xl lg:text-2xl text-shadow-lg  " : "")
                }>
                  {item.content()}
                </div>
                <div class="w-0 hidden lg:flex lg:w-1/6 " />
              </div>
            )}
            {item.type === 'media-horizontal' && item.content.length > 0 && (
              <div class="w-full flex flex-row gap-2">
                <For each={item.content}>
                  {(mediaItem, idx) =>
                    idx() === 0
                      ? (
                        <>
                          <div class="w-0 hidden lg:block lg:w-1/6 text-sm align-right flex justify-items-end">
                            <div class="max-w-48 text-right">
                              <Show when={mediaItem.caption}>
                                {mediaItem.caption()}
                              </Show>
                            </div>
                          </div>
                          <div class="w-full lg:w-1/3">
                            <Media {...mediaItem} capClass="lg:hidden" />
                          </div>
                        </>
                      )
                      : (
                        <>
                          <div class="w-full lg:w-1/3">
                            <Media {...mediaItem} capClass="lg:hidden" />
                          </div>
                          <div class="w-0 hidden lg:block lg:w-1/6 text-sm align-right flex justify-items-start">
                            <div class="max-w-48 text-left">
                              <Show when={mediaItem.caption}>
                                {mediaItem.caption()}
                              </Show>
                            </div>
                          </div>
                        </>
                      )
                  }
                </For>
              </div>
            )}
            {item.type === 'media-vertical' && item.content.length > 0 && (
              <For each={item.content}>
                {(mediaItem, idx) => (
                  <div class="w-full flex flex-row gap-2">
                    <div class="w-0 hidden lg:block lg:w-1/6 text-sm align-right flex justify-items-end">
                      <div class="max-w-48 text-right">
                        <Show when={idx() === 0 && mediaItem.caption}>
                          {mediaItem.caption()}
                        </Show>
                      </div>
                    </div>

                    <div class="w-full lg:w-2/3">
                      <Media {...mediaItem} capClass="lg:hidden" />
                    </div>
                    <div class="w-0 hidden lg:block lg:w-1/6 text-sm align-right flex justify-items-start">
                      <div class="max-w-48 text-left">
                        <Show when={idx() === 1 && mediaItem.caption}>
                          {mediaItem.caption()}
                        </Show>
                      </div>
                    </div>
                  </div>
                )}
              </For>

            )}
          </>
        )}
      </For>

      <Show when={props.project.extras} >
        <For each={props.project.extras}>
          {(ex) => (
            <div class="w-full flex flex-row gap-2">
              <div class="w-0 hidden lg:flex lg:w-1/6" />
              <div class="w-full lg:w-2/3 px-4 lg:px-0 prose prose-lg text-base-content font-light">
                <div><b class="font-medium uppercase">{ex.title}</b>
                  <div class="m-4 flex flex-col gap-2">
                    <For each={ex.list}>
                      {(exlistItem) => (
                        <div>
                          <Show when={exlistItem.label} >
                            <b class="font-medium">{exlistItem.label}: </b>
                          </Show>
                          <exlistItem.item />
                        </div>
                      )}
                    </For>
                  </div>
                </div>
              </div>
              <div class="w-0 hidden lg:flex lg:w-1/6 " />
            </div>
          )}
        </For>
      </Show>

      <Show when={props.project.logos?.length} >
        <div class="w-full flex flex-row gap-2 ">
          <div class="w-0 hidden lg:flex lg:w-1/6" />
          <div class="w-full lg:w-2/3 px-4 lg:px-0 prose prose-lg text-base-content font-light">
            <Logos logos={props.project.logos || []} />
          </div>
          <div class="w-0 hidden lg:flex lg:w-1/6 " />
        </div>
      </Show>
    </div >
  )
}

const PageFull: Component<{ project: Project, recent: Project[], older: Project[] }> = (props) => {
  return (
    <>
      <Menu />

      <div class="font-medium w-full text-nowrap flex flex-col items-center py-4 gap-2 text-shadow-lg ">
        <div class="text-xl md:text-2xl lg:text-3xl whitespace-no-wrap tracking-widest uppercase">{props.project.title}</div>
        <div class="whitespace-no-wrap uppercase tracking-wide ">
          <span class="pr-4">{props.project.shortDesc}</span>
          <span class="pl-4 hidden md:inline">{props.project.date} </span>
        </div>
      </div >
      <ProjectPage project={props.project} />
      <ProjectCarousel current={props.project.key} recent={props.recent} older={props.older} />
    </>
  )
}

export default PageFull
