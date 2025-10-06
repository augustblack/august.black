import { Component } from 'solid-js'
import { MediaGrid } from '../media'

import { ShortProps } from './project'
import { Project } from './types'

const ProjectRowPage: Component<ShortProps> = (props) => {
  return (
    <div class="bg-slate-300 text-slate-900 dark:bg-slate-800 dark:text-slate-300 p-4">
      <div class="p-2 lg:p-8 xl:p-8 flex-1">
        <div class="space-y-4">
          <props.project.info.page />
        </div>
      </div>
      <div class="p-2 lg:pl-8 lg:pb-8">
        <MediaGrid media={props.project.media} aspect={props.project.aspect} />
      </div>
    </div>
  )
}

const ProjectRow: Component<{ project: Project }> = (props) => {
  return (
    <div id={props.project.key}>
      <div class="collapse-title font-semibold w-full text-nowrap hover:bg-red-200 hover:opacity-95 dark:hover:bg-red-900 dark:hover:text-red-300 dark:bg-slate-800 dark:text-slate-300 opacity-100 bg-red-400 text-slate-900 dark:bg-red-800 dark:text-red-200">
        <span class="w-32 hidden lg:inline align-middle p-4 whitespace-no-wrap uppercase select-none">{props.project.date}</span>
        <span class="w-64 whitespace-no-wrap align-middle p-4 tracking-wider uppercase select-none">{props.project.title}</span>
        <span class="hidden md:inline  align-middle p-4 uppercase select-none">{props.project.shortDesc}</span>
      </div>
      <ProjectRowPage project={props.project} open={false} />
    </div>
  )
}

export default ProjectRow
