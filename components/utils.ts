// type EffectCallback = () => (void | (() => void | undefined))
// type DepndencyList = ReadonlyArray<any>

export const mainAudioId = 'befree'

export function swing(p: number): number {
  return 0.5 - Math.cos(p * Math.PI) / 2
}
export function fadeOutElement(
  element: HTMLMediaElement,
  newVolume: number,
  {
    duration = 1000,
    easing = swing,
    interval = 13
  }: {
    duration?: number,
    easing?: typeof swing,
    interval?: number
  } = {}
) {
  const originalVolume = element.volume
  const delta = newVolume - originalVolume
  if (!delta || !duration || !easing || !interval) {
    element.volume = newVolume
    return
  }
  const ticks = Math.floor(duration / interval)
  let tick = 1
  const timer = setInterval(() => {
    element.volume = originalVolume + (
      easing(tick / ticks) * delta
    )
    if (++tick === ticks) {
      clearInterval(timer)
      element.pause()
      element.volume = 1
    }
  }, interval)
}
