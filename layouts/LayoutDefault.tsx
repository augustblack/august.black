import "./tailwind.css";
import type { JSX } from "solid-js";
import { Component, Show, createSignal, createEffect, onMount, onCleanup } from "solid-js";
import Critical from "../components/critical";
import Nav from "../components/nav";
import { createZzz } from "../components/zzz";

const Slate = [
  "#f1f5f9", // 100
  "#e2e8f0", // 200
  "#cbd5e1", // 300
  "#94a3b8", // 400
  "#64748b", // 500
  "#475569", // 600
  "#334155", // 700
  "#1e293b", // 800
  "#0f172a", // 900
  "#020617", // 950
]

const Red = [
  "#fee2e2", // 100
  "#fecaca", // 200
  "#fca5a5", // 300
  "#f87171", // 400
  "#ef4444", // 500
  "#dc2626", // 600
  "#b91c1c", // 700
  "#991b1b", // 800
  "#7f1d1d", // 900
  "#450a0a", // 950
]

function getRandomColor(pos: number) {
  return Math.random() + pos > 1.25
    ? Red[Math.floor(Math.random() * Red.length)]
    : Slate[Math.floor(Math.random() * Slate.length)]
}

function getCriticalColor(pos: number) {
  return pos > 0.5
    ? Red[Math.floor(Red.length - 3 + Math.random() * 3)]
    : Slate[Math.floor(Slate.length - 3 + Math.random() * 3)]
}

// Draw MARPAT-like digital camo
function drawCamo(ctx: CanvasRenderingContext2D, width: number, height: number, runlen: number) {
  const timeSeg = 180 * 1000
  const pos = 1 - (Math.cos(((runlen % timeSeg) / timeSeg) * Math.PI * 2) * 0.5 + 0.5)

  // Clear canvas
  ctx.clearRect(0, 0, width, height)
  const tmp = Math.random()
  const bgcol = tmp + pos > 1.25
    ? Red[2]
    : Slate[2]
  ctx.fillStyle = bgcol
  ctx.fillRect(0, 0, width, height)

  const rectSize = 6 // Size of each "pixel" in the pattern
  const density = Math.min(1, 0.2 + pos) // Percentage of rectangles to draw

  for (let y = 0; y < height; y += rectSize) {
    for (let x = 0; x < width; x += rectSize) {
      if (Math.random() < density) {
        ctx.fillStyle = getRandomColor(pos)
        // Add small clusters by drawing several rectangles
        const clusterSize = Math.random() < 0.3 ? 3 : 2; // Single or double-sized clusters
        const clusterX = Math.random() < 0.5 ? rectSize : 0;
        const clusterY = Math.random() < 0.5 ? rectSize : 0;
        ctx.fillRect(x, y, rectSize * clusterSize, rectSize);
        ctx.fillRect(x + clusterX, y + clusterY, rectSize, rectSize * clusterSize);
      }
    }
  }
  return pos
}

const Page: Component<{ children?: JSX.Element; showNav: boolean }> = (props) => (
  <Show when={props.showNav}>
    {props.children}
  </Show>
)

export default function LayoutDefault(props: { children?: JSX.Element }) {
  const [showNav, setShowNav] = createSignal(true)
  const [fps, setFps] = createSignal(0.25)
  const [pos, setPos] = createSignal(0)
  const { setVol, resume, audioState, left, ctx } = createZzz()
  let canvRef: HTMLCanvasElement | undefined
  let af = 0

  createEffect(() => {
    if (!canvRef) return
    if (af) {
      cancelAnimationFrame(af)
    }

    const canvas = canvRef
    const context = canvas.getContext('2d', { alpha: false })
    if (!context) return

    let start: number
    let max: number
    let elapsed: number
    let then: number
    const fpsInterval = 1000 / fps()
    console.log('fpsInterval', fpsInterval)

    function onAnimate(timestamp: number) {
      if (start === undefined) {
        start = timestamp
        then = start
        max = 0
      }
      const len = 180 * 1000
      const runlen = timestamp - start
      elapsed = timestamp - then
      //console.log('start', start, "fpsInterval", fpsInterval, "elapsed", elapsed)
      if (max === 0 || elapsed > fpsInterval) {
        then = timestamp - (elapsed % fpsInterval);
        // runlen comes in as millisecons
        const mul = 1 - (Math.cos(((runlen % len) / len) * Math.PI * 2) * 0.5 + 0.5)
        max = Math.max(mul, max)

        const posValue = drawCamo(context, canvas.width, canvas.height, fps() > 1 ? (timestamp - start) : 0)
        setPos(fps() > 1 ? posValue : 0)
      }
      af = window.requestAnimationFrame(onAnimate)
    }

    af = window.requestAnimationFrame(onAnimate)
  })

  const toggle = () => {
    resume()
      .then((astate) => setShowNav(sn => {
        const play = sn && astate === 'running'
        if (play) {
          console.log('fast')
          setFps(15)
          const leftNode = left()
          const ctxNode = ctx()
          if (leftNode && ctxNode) {
            leftNode.frequency.setValueAtTime(220, ctxNode.currentTime)
            leftNode.frequency.linearRampToValueAtTime(210, ctxNode.currentTime + 3)
            leftNode.frequency.setValueAtTime(210, ctxNode.currentTime + 3.0001)
            leftNode.frequency.linearRampToValueAtTime(205, ctxNode.currentTime + 13)
            leftNode.frequency.setValueAtTime(205, ctxNode.currentTime + 13.0001)
            leftNode.frequency.linearRampToValueAtTime(225, ctxNode.currentTime + 60)
            leftNode.frequency.setValueAtTime(225, ctxNode.currentTime + 60.0001)
            leftNode.frequency.linearRampToValueAtTime(210, ctxNode.currentTime + 180)
            leftNode.frequency.setValueAtTime(225, ctxNode.currentTime + 180.0001)
            leftNode.frequency.linearRampToValueAtTime(220, ctxNode.currentTime + 360)
          }
          setVol(0.5)
          if (!document.fullscreenElement) {
            document.body.requestFullscreen().catch(console.log)
          }
        } else {
          console.log('slow')
          setFps(0.25)
          setPos(0)
          setVol(0.0)
          if (document.fullscreenElement) {
            document.exitFullscreen()
          }
        }

        return !sn
      }))
      .catch(console.error)
  }

  return (
    <>
      <canvas ref={canvRef} class="fixed left-0 top-0 -z-10 w-screen h-screen object-cover" width="800" height="800" />
      <Show when={pos() > 0.0001} >
        <div
          class="fixed top-0 left-0 w-screen h-screen p-4 -rotate-12 scale-90"
          style={{ color: getCriticalColor(pos()) }}
        >
          <Critical pos={pos() * 0.7} />
        </div>
      </Show>
      <div class="p0 lg:p-10 xl:p-12 flex flex-col">
        <Nav toggle={toggle} show={showNav()} canPlayAudio={audioState() === 'running'} />
        <Page showNav={showNav()}>
          {props.children}
        </Page>
      </div>
    </>
  )
}
