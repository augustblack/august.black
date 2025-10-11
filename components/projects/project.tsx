import { Component } from 'solid-js'
import { MediaGroup } from '../media'
import { Project } from './types'

export type ShortProps = {
  project: Project
  open: boolean
  onClick?: (e: MouseEvent) => void
}

const ProjectRow: Component<ShortProps & { pid: string }> = (props) => (
  <div id={props.project.key} class="collapse rounded-none w-full">
    <input type="checkbox" class="peer" />
    <div class="collapse-title font-medium w-full text-nowrap opacity-90 bg-slate-300 text-slate-900 hover:bg-red-200 hover:opacity-95 dark:hover:bg-red-900 dark:hover:text-red-300 dark:bg-slate-800 dark:text-slate-300 peer-checked:opacity-100 peer-checked:bg-red-400 peer-checked:text-red-900 peer-checked:dark:bg-red-800 peer-checked:dark:text-red-200 flex flex-row">
      <div class="w-32 hidden lg:block align-middle whitespace-no-wrap uppercase select-none">{props.project.date}</div>
      <div class="w-64 whitespace-no-wrap align-middle tracking-wider uppercase select-none">{props.project.title}</div>
      <div class="hidden md:block align-middle uppercase select-none">{props.project.shortDesc}</div>
    </div>
    <div class="collapse-content overflow-hidden bg-slate-300 text-slate-900 dark:bg-slate-800 dark:text-slate-300 p-0 m-0 pb-0" >
      <div class="flex flex-col sm:flex-row">
        <div class={"w-full sm:w-1/2 flex-none " + (props.project.aspect || "aspect-16/9")}>
          <MediaGroup media={props.project.media} />
        </div>
        <div class="p-2 lg:p-8 xl:p-8 max-w-4xl flex-1">
          <div class="space-y-4">
            <props.project.info.long>
              <div class='pt-4 pb-4'>
                <a class='p-2 rounded' href={'/' + props.project.key}>more</a>
              </div>
            </props.project.info.long>
          </div>
        </div>
      </div>
    </div>
  </div >

)

export default ProjectRow
