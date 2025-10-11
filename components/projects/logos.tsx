import { Component, For } from 'solid-js'
import Image from "../image"

const Wavefarm = () => (
  <div class='w-20 h-20 sm:w-24 sm:h-24'>
    <a
      target="_blank"
      href="https://wavefarm.org"
    >
      <Image
        class="w-full relative dark:invert"
        draggable={false}
        src="img/wavefarm-logo.png"
        width={500}
        height={500}
        blurDataURL="data:image/webp;base64,UklGRpwAAABXRUJQVlA4WAoAAAAQAAAACQAACQAAQUxQSFwAAAABcCTbtunq2j9my2Nw+rbds+3k/EREQEWSKsBqF/H7I9sllZ3h8TrdlkPFDAAW8Mm8PSa99aBX/X2zm+kwNtuu//IDZGa5V2Vv8fgc6da1xGob8fuihwVQkaQyAFZQOCAaAAAAMAEAnQEqCgAKAAFAJiWkAANwAP79AZvOBAA="
        alt='wave farm logo'
      />
    </a>

  </div>
)
const Atlas = () => (
  <div class='flex-none w-20 h-20 sm:w-24 sm:h-24 flex place-items-center'><a target="_blank" href="https://www.colorado.edu/atlas/">
    <Image
      class="w-full relative dark:invert"
      draggable={false}
      alt='atlas logo'
      src="img/atlas-logo.svg"
      width={172}
      height={37}
      style={{ width: "172px" }} // needed for Firefox
      blurDataURL="data:image/webp;base64,UklGRlQAAABXRUJQVlA4WAoAAAAQAAAACQAAAQAAQUxQSBUAAAAADqNetIoAZVa5UG6maHKoVXuRk3wAVlA4IBgAAAAwAQCdASoKAAIAAUAmJaQAA3AA/v02aAA="
      srcset=""
    />
  </a></div>
)

const DCMP = () => (
  <div class="w-36 h-20 sm:h-24 sm:w-56 flex-none flex place-items-center">
    <a target="_blank" href="https://www.colorado.edu/cmci/dcmp">
      <Image
        class="w-full relative dark:invert"
        draggable={false}
        alt='DCMP logo'
        src="img/dcmp-logo.png"
        width={1036}
        height={199}
        blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4WAoAAAAQAAAACQAAAQAAQUxQSBUAAAAAJiolKigoHiEmJRMXERAUFRwoJAQAVlA4IBoAAAAwAQCdASoKAAIAAUAmJaQAA3AA/vrvxwrAAA=="
      />
    </a>

  </div>
)

type LogoNames = 'atlas' | 'dcmp' | 'wavefarm'

export const Logos: Component<{ logos: Array<LogoNames> }> = (props) => (
  <>
    <div class="font-bold">Supported by:</div>
    <div class="flex flex-wrap gap-2 sm:gap-4 md:gap-6 justify-start">
      <For each={props.logos}>
        {(l) => l === 'atlas'
          ? <Atlas />
          : l === 'dcmp'
            ? <DCMP />
            : l === 'wavefarm'
              ? <Wavefarm />
              : null
        }
      </For>
    </div>
  </>
)
