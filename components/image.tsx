import { type Component } from "solid-js"

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
  let done = false

  const onLoad = () => {
    imgRef.classList.remove('blur')
    imgRef.style = ""
  }

  return (
    <img
      loading="lazy"
      ref={imgRef}
      onload={onLoad}
      style={props.blurDataURL
        ? `background-image: url('${props.blurDataURL}'); background-repeat: no-repeat; background-size: cover; background-position: center center;`
        : ""}
      src={src}
      srcset={props.srcset || getSrcSet(props.src, props.width)}
      draggable={props.draggable}
      alt={props.alt}
      width={props.width}
      height={props.height}
      class={props.class + " blur transition-filter"}
    />
  )
}

export default Img
