import { Component, Show, createSignal } from 'solid-js'
import { MediaGroup } from '../media'
import { Project } from './types'

export type ShortProps = {
  project: Project
  open: boolean
}

const ProjectRow: Component<ShortProps & { pid: string }> = (props) => {
  const [open, setOpen] = createSignal(false)
  let inputRef !: HTMLInputElement

  const onChange = () => {
    if (inputRef.checked) {
      setOpen(inputRef.checked)
    }
  }
  // bg-linear-to-b from-primary/100 via-10% via-base-100/30 to-base-100/0
  return (
    <div id={props.project.key} class="collapse rounded-none w-full">
      <input ref={inputRef} type="checkbox" class="peer" onchange={onChange} />
      <div class="collapse-title font-medium w-full text-nowrap opacity-90 text-base-content peer-checked:opacity-100 peer-checked:bg-primary peer-checked:text-primary-content flex flex-row">
        <div class="w-8 md:w-10 lg:w-16 " />
        <div class="w-32 hidden lg:block align-middle whitespace-no-wrap uppercase select-none">{props.project.date}</div>
        <div class="w-74 whitespace-no-wrap align-middle tracking-wider uppercase select-none">{props.project.title}</div>
        <div class="hidden md:block align-middle uppercase select-none">{props.project.shortDesc}</div>
      </div>
      <div class="collapse-content overflow-hidden  text-base-content p-0 m-0 pb-0 " >
        <Show when={open()} >
          <div class="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 pb-4">
            <div class={"w-full sm:w-1/2 flex-none "}>
              <MediaGroup media={props.project.media} aspect={props.project.aspect || "aspect-video"} />
            </div>
            <div class="max-w-4xl flex-1 portrait:px-4 flex flex-col gap-4 font-light pt-4 ">
              {props.project.text![0]}
              <div class='pt-4 pb-4'>
                <a class='btn btn-md md:btn-lg btn-primary font-light' href={'/' + props.project.key}>more</a>
              </div>
            </div>
          </div>
        </Show>
      </div>
    </div >

  )
}

export default ProjectRow
