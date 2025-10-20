import { Component, For } from 'solid-js'

import ProjectRow from './project'
import ProjectPage from './page'
import Socials from '../socials'

import Pulse from './pulse'
import Compost from './compost'
import WeAreHere from './wearehere'
import Conduction from './conduction'
import Mezcal from './mezcal'
import HearHere from './hearhere'
import Underweb from './underweb'
import Userradio from './userradio'
import Lechero from './lechero'
import DataDada from './datadada'
import Standup from './standup'
import Funda from './fundamental'

import { Project } from './types'

export const projects: Project[] = [
  Pulse,
  Compost,
  Conduction,
  WeAreHere,
  Mezcal,
  HearHere,
  Underweb,
  Userradio,
  Lechero,
  DataDada,
  Standup,
  Funda
]

const Proyectos: Component<{ pid: string }> = (props) => {
  const project = () => projects.find(p => p.key === props.pid)

  return project() && project()!.key
    ? (<ProjectPage project={project()!} />)
    : (
      <>
        <div class="p-4 md:p-6 lg:p-10 uppercase leading-[1.6] text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-base-content text-shadow-lg ">I'm August Black. I investigate mediated modes of collectivity and togetherness. My research is a mixture of applied conceptual art, critical design, community activism, and expanded engineering. I write software, organize collectives, build instrumentation, and construct new formats for real-time interactive performance.
          <div class="flex flex-row gap-4 py-2 align-middle place-items-center"><Socials />
            <a class='btn btn-md md:btn-lg btn-primary font-light lowercase' href='/about'>more</a>
          </div>
        </div>
        <For each={projects}>
          {(p) => <ProjectRow pid={props.pid} project={p} open={props.pid === p.key} />}
        </For>
      </>
    )
}

export default Proyectos
