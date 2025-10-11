import { Component, For } from 'solid-js'

import ProjectRow from './project'
import ProjectPage from './page'

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
        <For each={projects}>
          {(p) => <ProjectRow pid={props.pid} project={p} open={props.pid === p.key} />}
        </For>
      </>
    )
}

export default Proyectos
