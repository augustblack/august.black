import { Component, createSignal, createEffect, onMount, onCleanup, JSX } from 'solid-js'
import { MediaGroup } from '../media'
import { Project } from './types'

export type ShortProps = {
  project: Project
  open: boolean
  onClick?: (e: MouseEvent) => void
}

const ProjectRow: Component<ShortProps & { pid: string }> = (props) => (
  <details id={props.project.key} class="collapse bg-base-100 rounded-none w-full">
    <summary class="collapse-title font-semibold w-full text-nowrap opacity-90 bg-slate-300 text-slate-900 hover:bg-red-200 hover:opacity-95 dark:hover:bg-red-900 dark:hover:text-red-300 dark:bg-slate-800 dark:text-slate-300 focus:opacity-100 focus:bg-red-400 focus:text-slate-900 focus:dark:bg-red-800 focus:dark:text-red-200">
      <span class="w-32 hidden lg:inline align-middle p-4 whitespace-no-wrap uppercase select-none">{props.project.date}</span>
      <span class="w-64 whitespace-no-wrap align-middle p-4 tracking-wider uppercase select-none">{props.project.title}</span>
      <span class="hidden md:inline  align-middle p-4 uppercase select-none">{props.project.shortDesc}</span>
    </summary>
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
  </details >

)

export default ProjectRow
