import { Component, For, Show } from 'solid-js'
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
const ShowFirstImage: Component<{ media?: MediaProps[] }> = (props) => {
  const media = props.media?.find(m => m.kind === 'image')
  return (
    <Show when={media}>
      <div class={"max-w-42 aspect-video outline " + (media?.bg ? media.bg : "")}>
        <Image
          draggable={false}
          src={media?.src || 'wtf'}
          alt={media?.alt || 'wtf'}
          class={media?.imgClass || "object-cover object-center w-full h-full "}
          width={media?.width || 10}
          height={media?.height || 10}
          blurDataURL={media?.blurDataURL}
        />
      </div>
    </Show>
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

const PageFull: Component<{ project: Project, next?: Project, prev?: Project, showTitle?: boolean }> = (props) => {
  return (
    <>
      <Menu />

      <div class="font-medium w-full text-nowrap flex flex-col items-center py-4 gap-2 text-shadow-lg ">
        <div class="text-3xl whitespace-no-wrap tracking-widest uppercase">{props.project.title}</div>
        <div class="whitespace-no-wrap uppercase tracking-wide ">
          <span class="pr-4">{props.project.shortDesc}</span>
          <span class="pl-4 hidden md:inline">{props.project.date} </span>
        </div>
      </div >
      <ProjectPage project={props.project} />
      <div class="w-full flex flex-row gap-2 mt-10 py-8 bg-linear-to-t from-primary/100 via-base-100/100 to-base-100/0 ">
        <div class="w-0 hidden lg:flex lg:w-1/6" />
        <div class="w-full lg:w-2/3 flex flex-row items-center text-xs">
          <Show when={props.prev}>
            <button class="w-1/2 p-4 flex place-content-start">
              <LinkPlain href={'/' + props.prev?.key}>
                <div class="text-left max-w-42 uppercase text-nowrap whitespace-no-wrap overflow-hidden text-ellipsis ">
                  {props.prev?.title}
                </div>
                <div class="flex justify-items-start ">
                  <ShowFirstImage media={props.prev?.media} />
                </div>
              </LinkPlain>
            </button>
          </Show>
          <Show when={props.next}>
            <button class="w-1/2 p-4 flex flex-col place-items-end ">
              <LinkPlain href={'/' + props.next?.key}>
                <div class="text-right max-w-42 uppercase text-nowrap whitespace-no-wrap overflow-hidden text-ellipsis ">
                  {props.next?.title}
                </div>
                <div class="flex items-center justify-items-center ">
                  <ShowFirstImage media={props.next?.media} />
                </div>
              </LinkPlain>
            </button>
          </Show>

        </div >
        <div class="w-0 hidden lg:flex lg:w-1/6 " />
      </div >

    </>
  )
}

export default PageFull
