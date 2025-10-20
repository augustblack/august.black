import { createSignal, onMount, onCleanup } from 'solid-js'

type AudioState = 'suspended' | 'running' | 'closed' | 'interrupted'

type ZzzStore = {
  setVol: (vol: number) => void,
  resume: () => Promise<AudioState>
  audioState: () => AudioState
  left: () => OscillatorNode | null
  ctx: () => AudioContext | null
}

export const createZzz = (): ZzzStore => {
  const [audioState, setAudioState] = createSignal<AudioState>('suspended')
  const [audioCtx, setAudioCtx] = createSignal<AudioContext | null>(null)
  const [leftOsc, setLeftOsc] = createSignal<OscillatorNode | null>(null)

  let refs = {
    ctx: null as AudioContext | null,
    gain: null as GainNode | null,
    left: null as OscillatorNode | null,
    right: null as OscillatorNode | null,
    merger: null as ChannelMergerNode | null,
    noise: null as AudioBufferSourceNode | null,
    noiseG: null as GainNode | null
  }

  onMount(() => {
    const ctx = new ((window as any).AudioContext || (window as any).webkitAudioContext)()

    const gain = ctx.createGain()
    const left = ctx.createOscillator()
    const right = ctx.createOscillator()
    const merger = ctx.createChannelMerger()
    const noise = ctx.createBufferSource()
    const noiseG = ctx.createGain()

    noise.buffer = ctx.createBuffer(1, 2 * ctx.sampleRate, ctx.sampleRate)
    const channelArray = noise.buffer.getChannelData(0)
    for (let i = 0; i < 131072; i++) {
      channelArray[i] = (Math.random() * 2) - 1
    }
    noise.loop = true

    refs = {
      ctx,
      gain,
      left,
      right,
      merger,
      noise,
      noiseG
    }

    left.connect(merger, 0, 0)
    right.connect(merger, 0, 1)
    noise.connect(noiseG)

    merger.connect(gain)
    noiseG.connect(gain)
    gain.connect(ctx.destination)

    left.frequency.value = 220
    right.frequency.value = 200

    noiseG.gain.value = 0.03

    gain.gain.setValueAtTime(0, ctx.currentTime)

    noise.start(0)
    left.start(0)
    right.start(0)

    setAudioState(ctx.state)
    setAudioCtx(ctx)
    setLeftOsc(left)
  })

  onCleanup(() => {
    if (refs.gain) refs.gain.disconnect()
    if (refs.merger) refs.merger.disconnect()
    if (refs.right) refs.right.disconnect()
    if (refs.left) refs.left.disconnect()
  })

  const setVol = (vol: number) => {
    if (vol >= 0 && vol < 1 && refs.gain && refs.ctx) {
      refs.gain.gain.setValueAtTime(refs.gain.gain.value, refs.ctx.currentTime)
      refs.gain.gain.linearRampToValueAtTime(vol, refs.ctx.currentTime + 0.53)
    }
  }

  const resume = (): Promise<AudioState> => {
    return refs.ctx
      ? refs.ctx.resume().then(() => {
        const state = refs.ctx!.state
        setAudioState(state)
        return state
      })
      : Promise.resolve('suspended')
  }

  return {
    setVol,
    resume,
    audioState,
    left: () => refs.left,
    ctx: () => refs.ctx
  }
}
