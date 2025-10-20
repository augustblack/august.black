import { Component } from 'solid-js'
import { MediaGrid } from '../media'

import { ShortProps } from './project'
import { Project } from './types'

const ProjectRowPage: Component<ShortProps> = (props) => {
  return (
    <>
      <div class="p-4 flex-1 bg-linear-to-b from-primary/100 via-base-100/100 to-base-100/10 space-y-4 text-base-content font-light">
        <div class="flex flex-row gap-4 place-items-start">
          <a href="/">
            <svg class="w-10 md:w-12 lg:w-24" fill="currentcolor" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g><path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z" /></g></svg>
          </a>
          <div class="flex flex-col gap-2 md:gap-4">
            <props.project.info.page />
          </div>
        </div>
      </div>
      < MediaGrid media={props.project.media} aspect={props.project.aspect} />
    </>
  )
}

const ProjectRow: Component<{ project: Project }> = (props) => {
  return (
    <>
      <div class="font-medium w-full text-nowrap bg-primary text-primary-content flex flex-row">
        <div class="w-32 hidden lg:block align-middle p-4 whitespace-no-wrap uppercase select-none">{props.project.date}</div>
        <div class="w-74 whitespace-no-wrap align-middle p-4 tracking-wider uppercase select-none">{props.project.title}</div>
        <div class="hidden md:inline  align-middle p-4 uppercase select-none">{props.project.shortDesc}</div>
      </div>
      <ProjectRowPage project={props.project} open={false} />
    </>
  )
}

export default ProjectRow
