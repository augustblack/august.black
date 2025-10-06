import { Component, For, createSignal } from 'solid-js'

import ProjectRow from './project'
import ProjectPage from './page'

import Pulse from './pulse'
import Compost from './compost'

import { Project } from './types'

export const projects: Project[] = [
  Pulse,
  Compost
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