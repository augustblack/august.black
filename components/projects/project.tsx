import { Component, Show, createSignal } from 'solid-js'
import { MediaGroup } from '../media'
import { Project } from './types'

export type ShortProps = {
  project: Project
  open: boolean
  onClick?: (e: MouseEvent) => void
}


const ProjectRow: Component<ShortProps & { pid: string }> = (props) => {
  const [open, setOpen] = createSignal(false)
  let inputRef !: HTMLInputElement

  const onChange = () => {
    if (inputRef.checked) {
      setOpen(inputRef.checked)
    }
  }

  return (
    <div id={props.project.key} class="collapse rounded-none w-full">
      <input ref={inputRef} type="checkbox" class="peer" onchange={onChange} />
      <div class="collapse-title font-medium w-full text-nowrap opacity-90 bg-base-100 text-base-content peer-checked:opacity-100 peer-checked:bg-primary peer-checked:text-primary-content flex flex-row">
        <div class="w-32 hidden lg:block align-middle whitespace-no-wrap uppercase select-none">{props.project.date}</div>
        <div class="w-74 whitespace-no-wrap align-middle tracking-wider uppercase select-none">{props.project.title}</div>
        <div class="hidden md:block align-middle uppercase select-none">{props.project.shortDesc}</div>
      </div>
      <div class="collapse-content overflow-hidden bg-base-100 text-base-content p-0 m-0 pb-0" >

        <Show when={open()} >
          <div class="flex flex-col sm:flex-row">
            <div class={"w-full sm:w-1/2 flex-none "}>
              <MediaGroup media={props.project.media} aspect={props.project.aspect || "aspect-video"} />
            </div>
            <div class="p-2 lg:p-8 xl:p-8 max-w-4xl flex-1">
              <div class="space-y-4">
                <props.project.info.long>
                  <div class='pt-4 pb-4'>
                    <a class='btn btn-md md:btn-lg' href={'/' + props.project.key}>more</a>
                  </div>
                </props.project.info.long>
              </div>
            </div>
          </div>
        </Show>
      </div>
    </div >

  )
}

export default ProjectRow
