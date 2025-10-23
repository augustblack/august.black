import { Component, For, createEffect, useContext } from 'solid-js'
import { MainContext } from '../zzz'

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
const Sun: Component<{ on: boolean }> = (props) => (
  <svg
    class={props.on
      ? "swap-on h-10 w-10 fill-current"
      : "swap-off h-10 w-10 fill-current"
    }
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>
)

const Moon: Component<{ on: boolean }> = (props) => (
  < svg
    class={props.on
      ? "swap-on h-10 w-10 fill-current"
      : "swap-off h-10 w-10 fill-current"
    }
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24" >
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg >
)

const Proyectos: Component<{ pid: string }> = (props) => {
  const { state, setState } = useContext(MainContext)
  let labelRef !: HTMLLabelElement

  const project = () => projects.find(p => p.key === props.pid)
  const toggleDark = () => setState("theme", (st: string) => st === "dark" ? "light" : "dark")

  createEffect(() => {
    if (state.theme === "light") {
      labelRef.classList.add("swap-active")
    } else {
      labelRef.classList.remove("swap-active")
    }
  })

  return project() && project()!.key
    ? (<ProjectPage project={project()!} />)
    : (
      <>
        <div class="p-4 md:p-6 lg:p-10 uppercase leading-[1.6] text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-base-content text-shadow-lg ">I'm August Black. I investigate mediated modes of collectivity and togetherness. My research is a mixture of applied conceptual art, critical design, community activism, and expanded engineering. I write software, organize collectives, build instrumentation, and construct new formats for real-time interactive performance.
          <div class="flex flex-row gap-4 py-2 align-middle place-items-center"><Socials />
            <label ref={labelRef} class="swap swap-rotate" onclick={toggleDark}>
              <Sun on={true} />
              <Moon on={false} />
            </label>
            <a class='btn btn-md md:btn-lg btn-ghost btn-primary font-light lowercase' href='/about'>...more</a>
          </div>
        </div>
        <For each={projects}>
          {(p) => <ProjectRow pid={props.pid} project={p} open={props.pid === p.key} />}
        </For>
      </>
    )
}

export default Proyectos
