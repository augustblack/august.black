import { Component, JSX } from "solid-js";
import { Project } from './types'
import { MediaProps } from '../media'

const media: MediaProps[] = [
  {
    kind: 'image',
    src: "media/lechero/leche-gusto-all-3.jpg",
    width: 1536,
    height: 1152,
    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAQCdASoKAAgAAUAmJYwCdAEPCUGN7wAA/vbj/+O0hJev/R1EgDXVAEA0Z9/mPL8Io335T702aEgaEu45/0AR/rh9VdLITep+x3h+/eiYZKdAAk64BrqCE/6vyi2BiAR/5MlwAAA=",
    alt: 'combined 3 images of august playing the lechero'
  },
  {
    kind: 'image',
    src: "media/lechero/lechero01b.png",
    width: 698,
    height: 526,
    blurDataURL: "data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAACQAABwAAQUxQSCQAAAABL0CYbfQa4fmrXDUiIvAFhWwkQfsRrMmanD/SEUT0P1LsXgBWUDggLAAAANABAJ0BKgoACAABQCYlpAADF/W19UYAAP7+w9yXQbZ4Cec2jFli/AFLAAAA",
    alt: 'pencil technical drawing of lechero',
    caption: () => (<div>A pre-arduino, custom instrument in wood and electronics.</div>)
  },
  {
    kind: 'image',
    src: "media/lechero/lechero02.jpg",
    width: 512,
    height: 384,
    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAQCdASoKAAgAAUAmJYwCdAD7KCL6BIAA/uDOvHUjbt02wfqzjCqz9Yg43CH+967Tnw3cec+c9zULlslxz59OKcbr0P+J2GQD2cH/SToHrYs7NkUpyFT9M97SyYQT6JInRhzGAAA=",
    alt: 'all parts of the lechero laid out on table'
  },
  {
    kind: 'image',
    src: "media/lechero/lechero03.jpg",
    width: 512,
    height: 384,
    blurDataURL: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAQAgCdASoKAAgAAUAmJYwCdAYrxqeaQSyAAP5hSLsbve+/J+d2AquxlLb19tj6M1BYONsz7sZ79iTV6oK/QZbq0WqKPJdUmm+Z1Y1ptJqT5SzBAvNCQq14tiz9kWbUAAA=",
    alt: 'all parts of the lechero laid out on table'
  },
  {
    kind: 'image',
    src: "media/lechero/lechero04.jpg",
    width: 512,
    height: 384,
    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAQAgCdASoKAAgAAUAmJZQCw7EedjFvozJ4AP7eP4lEML2DYIcLpV/82vyv/6EzNCV/sIW8Pv9C33V4v5Atxmj8Dl/HurFsvvj59aB0VmXljhOjr5KtaikupX4kHXbnYAAAAA==",
    alt: 'open lechero revealing electronics inside'
  },
  {
    kind: 'image',
    src: "media/lechero/lechero11.jpg",
    width: 512,
    height: 384,
    blurDataURL: "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAABQAgCdASoKAAgAAUAmJYwCdDBACIZK1WKILgAA/vip2TS1rVuPT1CYWv42iCHvE+P4FduRWLJGZRD7ftAd5G9223ZuH75iKkdz26PmKckWsrvnO93FbVCogMCNZzCOvO+wzLLjNcAAAA==",
    alt: 'lechero electronics close up'
  },
  {
    kind: 'image',
    src: "media/lechero/lechero08.jpg",
    width: 512,
    height: 384,
    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADQAQCdASoKAAgAAUAmJQBOj+ACa5EsgAD+mESP+9KG59+UJZ7pZjTMnyM5AbopDo4JAF9WDbmxumNQNqHGc2DJJI7dlTggHXOlM8NorwnkcaL83wS72PaXkgYAAA==",
    alt: 'lechero rotating joint close up'
  },
  {
    kind: 'image',
    src: "media/lechero/lechero09.jpg",
    width: 512,
    height: 384,
    blurDataURL: "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAAAwAgCdASoKAAgAAUAmJZACdAYY6WclzWUawAD+5vyWO87zWJAmN5s8kKUBcwXbxWuC/uW3t8Qs4yH/RzHz/TrABMILwA/YGkQUX62QWUCZ4ZknbEkH/IlZKJcs2NT0fUvjKYPixCOaNoeLqgTOcoAA",
    alt: 'lechero rotating joint close up'
  },
  {
    kind: 'image',
    src: "media/lechero/lechero14.jpg",
    width: 512,
    height: 384,
    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAQCdASoKAAgAAUAmJbACdAD8LPhhsDAA/BCyhA2JrDIL6tM2N9FZe+iateS5jAk3rAlfHKK0WNJGBscAbBZs2/aAlRADuwGbQgyKev901fXCK06N+bH/4JCU3fJ5Ukw4//NVAAA=",
    alt: 'lechero sitting on yellow table with blue USB cable'
  },
  {
    kind: 'image',
    src: "media/lechero/lechero13.jpg",
    width: 512,
    height: 384,
    blurDataURL: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAAAQAgCdASoKAAgAAUAmJZgCdAYsPa9LmVYAAPa6nYKmgIHoBcKGgM+t5Zy+SOvdwMtP+Y3d0GRCSD33gcauOWYOJ73QdtrYIl+360A6fsx38JhCw0hAYMfHqSDU5Qv9zXpQN2R5Il8kn4OQ6uhyCIpYgAA=",
    alt: 'lechero sitting on yellow table with blue USB cable'
  }
]
const longy: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="pb-4"><em><i>El lechero</i></em> is a custom computer controler made of wood, metal, and electronics. Connected to a computer through a single USB cable, it is an instrument for music and real-time digital control of audio/video synthesis.</div>
    {props.children}
  </>
)

const Lechero: Project = {
  kind: ['performance', 'software', 'hardware'],
  key: 'lechero',
  aspect: "aspect-512/384",
  date: '2004',
  title: 'Lechero',
  shortDesc: "electro-mechanical audio instrument",
  place: 'various',
  info: {
    long: longy,
    page: longy
  },
  media
}

export default Lechero
