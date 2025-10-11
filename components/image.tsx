import { onMount, type Component } from "solid-js"

const getSrcSet = (src: string, width: number) => {
  const name = src.split('.').slice(0, -1).join(".")
  if (name.length) {
    const srcset = [64, 256, 640, 840, 1080, 1200, 2048]
      .concat(width)
      .sort((a, b) => a - b)
      .reduce((acc, w) => w < width
        ? acc.concat(`https://assets.august.black/${name}-${w}.webp ${w}w`)
        : w === width
          ? acc.concat(`https://assets.august.black/${src} ${w}w`)
          : acc
        , [])
    return srcset.join(',')
  }
  return ""
}


type ImageProps = {
  src: string
  srcset?: string
  blurDataURL?: string
  alt: string
  draggable?: boolean
  class?: string
  style?: Partial<CSSStyleDeclaration>
  width: number
  height: number
}

const Img: Component<ImageProps> = (props) => {
  let imgRef !: HTMLImageElement
  const src = props.src.slice(0, 4) === 'http'
    ? props.src
    : 'https://assets.august.black/' + props.src

  onMount(() => {
    imgRef.loading = "lazy"
    imgRef.src = src
    imgRef.srcset = props.srcset || getSrcSet(props.src, props.width)
  })

  return (
    <img
      ref={imgRef}
      src={props.blurDataURL || props.src}
      draggable={props.draggable}
      alt={props.alt}
      width={props.width}
      height={props.height}
      class={props.class || ""}
    />
  )
}

export default Img
