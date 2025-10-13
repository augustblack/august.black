import { Component, createSignal, createEffect, onMount, onCleanup, For, Show } from 'solid-js'

const links = [
  { href: '/', label: 'projects', key: 'nav-index' },
  { href: '/about', label: 'about', key: 'nav-about' }
]

type NavProps = {
  toggle: (e: MouseEvent) => void
}

type NoNavProps = NavProps & {
  canPlayAudio: boolean
}

const FullNav: Component<NavProps> = (props) => (
  <ul id="navigation" class="w-full top-0 right-0 flex bg-slate-900 text-slate-200">
    <For each={links}>
      {(link) => (
        <li class="flex-none block-inline p-4 uppercase select-none">
          <a href={link.href}>{link.label}</a>
        </li>
      )}
    </For>
    <li class="flex-grow p-4 uppercase relative">
      <div class="absolute right-0 top-0 p-4 font-bold cursor-pointer select-none" onClick={props.toggle}>X</div>
    </li>
  </ul>
)

const X: Component<{ canPlayAudio: boolean }> = (props) =>
  props.canPlayAudio
    ? <span class="cursor-pointer select-none">&#9776;</span>
    : <span class="cursor-pointer select-none">click me</span>

const NoNav: Component<NoNavProps> = (props) => {
  let divRef: HTMLDivElement | undefined
  const [state, setState] = createSignal({
    top: '150px',
    right: '50%'
  })

  const resize = () => {
    if (!divRef) return
    const w = window.innerWidth
    const h = window.innerHeight
    const d = divRef.getBoundingClientRect()
    const right = Math.floor(w / 2 - d.width / 2) + 'px'
    const top = Math.floor(h / 2 - d.height / 2) + 'px'
    setState({ top, right })
  }

  onMount(() => {
    resize()
    window.addEventListener('resize', resize)
  })

  onCleanup(() => {
    window.removeEventListener('resize', resize)
  })

  return (
    <ul id="navigation" class="w-full top-0 right-0 flex text-slate-100">
      <li class="flex-grow p-4 uppercase relative">
        <div
          ref={divRef}
          class="absolute p-4 font-bold bg-slate-900 cursor-pointer"
          style={{
            top: (props.canPlayAudio ? '0' : state().top),
            right: (props.canPlayAudio ? '0' : state().right),
            transition: 'all 1s ease'
          }}
          onClick={props.toggle}
        >
          <X canPlayAudio={props.canPlayAudio} />
        </div>
      </li>
    </ul>
  )
}

const Nav: Component<NoNavProps & { show: boolean }> = (props) => (
  <Show
    when={props.show}
    fallback={<NoNav toggle={props.toggle} canPlayAudio={props.canPlayAudio} />}
  >
    <FullNav toggle={props.toggle} />
  </Show>
)

export default Nav
