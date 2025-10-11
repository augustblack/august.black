import { Component, JSX } from "solid-js"
import Image from '../image'
import { Project } from './types'
import { MediaProps } from '../media'

const media: MediaProps[] = [
  {
    kind: 'image',
    src: "media/underweb/un.png",
    width: 583,
    height: 458,
    blurDataURL: "data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAACQAABwAAQUxQSDsAAAABYFTbtpLzPzryGTXc2nhVKhDAQzgdImIC+JS8rSwMEC9/mkcbAZjHebYoIKjPc0AFBM1cIQEECr+CNwBWUDggXgAAAPABAJ0BKgoACAABQCYlpAAPgBF/Z/WLAAD9xp3u//W//4NWgNZVqrctbsXkx/GjP5O28fom2CqdcN8Jt1tvyXKq8P3MR7If/NNJkonmr8IAUo/rfD6Rio1BiKvAAAA=",
    alt: 'underweb logo, two letter in black and white spelling Un',
  },
  {
    kind: 'image',
    src: "media/underweb/libmentiras_shape03.jpg",
    width: 802,
    height: 630,
    blurDataURL: "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAQAgCdASoKAAgAAUAmJYwCdH8AGBqe3iQAAP765Zuf4OOLbCh4NiwTdO9YIfuuDr94fibocExK51bU3Jg5ozI7sn1mrxTkP0KKJzmmDf3F4Cb8SZ/6reVlif+ffv+6wH8Lv+GrLAAAAA==",
    alt: 'three different shapes, red, green, and blue',
    caption: () => (<span>Shapes in the Underweb are a collection of points (bezier or linear), a surface, and text.  Surfaces may be defined by color, image, or procedure. Texts may be defined inline or loaded from a foreign server, and may be wrapped in a rectangular bounding box or within the bounds of the shape itself.</span>)
  },
  {
    kind: 'image',
    src: "media/underweb/libmentiras_06image.jpg",
    width: 802,
    height: 630,
    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAwAgCdASoKAAgAAUAmJQBWANFmLSnmCNEINADOP3XL+kyT/2lFul/cqiN/iu2D5ncX7onpOS/e032fPpuXTv9cGQ2mEBqV1L/0NvbEh/bmaYrObzBnACkNefHvixwgxUl8QObwAAA=",
    alt: 'two images with sine patterns from yellow to green',
    caption: () => (<span>The &ldquo;surface&rdquo; of a shape is only a chunk of memory. It may be written to as an image file or alternatively procedurally generated.</span>)
  },
  {
    kind: 'image',
    src: "media/underweb/underweb_gui.jpg",
    width: 802,
    height: 630,
    blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoKAAgAAUAmJaQAAud9rfcAAP79TaUTZHGdwVeYZWrrSwAA",
    alt: 'example of gui layout',
    caption: () => (<span>The Underweb provides easy to use GUI widgets from the GTK+ toolkit.</span>)
  },
  {
    kind: 'image',
    src: "media/underweb/libmentiras_09widgets_full.jpg",
    width: 900,
    height: 506,
    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAwAgCdASoKAAYAAUAmJaACdDBHQZ1SY1uV8AD+/Mk9uG+MnguZ1xA3xP9IyI4KxuBB0YsLMKGubPbbjfGJd8TsNWqiJ0Rn5M1O5TlTkT5FL5nKl/0GmMn9+clAAA==",
    alt: 'example of gui layout with transparent background revealing desktop',
    caption: () => (<span>Users may mix widgets and graphical components together.  The background of the Underweb browser may also be transparent.</span>)
  },
  {
    kind: 'image',
    src: "media/underweb/libmentiras_08drawcb02.jpg",
    width: 802,
    height: 630,
    blurDataURL: "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAADQAgCdASoKAAgAAUAmJbACdLoAkwDnAPQABr/ts+TAAP70oX+asMq1MB9CNMD3YfnNi3VXLgyQWP/pYdCVuf+1+PNhxD/8Zv/qn/GBb/k3/9xDzYX1a3+jjfkzHRf3IrViOKX9fZwXAbeS/l+fRbQA",
    alt: 'sinusoidal layout of repeating blue shapes on red',
    caption: () => (<span>Shapes in the Underweb may provide their own drawing callback functions for animated displays.</span>)
  },
  {
    kind: 'image',
    src: "media/underweb/libmentiras_12videoencode.jpg",
    width: 802,
    height: 630,
    blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAAAQAgCdASoKAAgAAUAmJZwC7AEXxBf9zyQAAP7gjxJ9e59V+Lswd+pRYVhnXnBb8qTgWsWLS8GngKE/8Al8+hhM3x/iYf7wHRMAAA==",
    alt: '2 web camera images of a person demonstrating video capabilities',
    caption: () => (<span>Full audio video capabilities are included in the Underweb, including the ability to not only read audio and video, but encode and stream it as well. Above is a screen grab of an Underweb application document streaming live video to a server on the left and displaying the receiving stream on the right.</span>)
  },
  {
    kind: 'image',
    src: "media/underweb/libmentiras_11audio02.jpg",
    width: 802,
    height: 630,
    blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAQAgCdASoKAAgAAUAmJagCdLoAAwh3h5oAAPliolU68h7ACPc9G7LGsJbbtzOGyekwhTv5HYS/64R7/+Zp//ycmf2b+jJDgK87/TywAAA=",
    alt: 'audio waveforms',
    caption: () => (<span>The Underweb has a very simple built-in audio api. More complex signal processing can be done by writing puredata patches and controlling them vie the Underweb.  The Underweb uses libpd to enable this. The above shows the graphical display of an audio buffer while playing.</span>)
  },
  {
    kind: 'image',
    src: "media/underweb/libmentiras_editing.jpg",
    width: 900,
    height: 506,
    blurDataURL: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADQAQCdASoKAAYAAUAmJZQCdADZmNcMIAD++DD/X+7SH3qX/quuJ+pIakrwvpcBsf7hH+6XfMK+V51vzZ4f/3TuUVvPF4w4jWW2uAdZTD5NBveQDFCHvRgAAAA=",
    alt: 'bezier editing of GUI shapes',
    caption: () => (<span>All shapes and media content are editable inline in the Undereweb.</span>)
  },
  {
    kind: 'image',
    src: "media/underweb/underweb_14browser.jpg",
    width: 802,
    height: 630,
    blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoKAAgAAUAmJaQAAueMDKPxQAD+lQ/zV//LIddE+wjh4BC6GbONjjf5qE7/ISSimhxtBvke5EF7E4gquAX0K80NiUAEAA==",
    alt: 'website of UCSB&apos;s MAT program loaded in the underweb',
    caption: () => (<span>Using the webkit and mozdev APIs, the Underweb can also view standard WWW content.</span>)
  }

]


const Pdf = () => (
  <div class="flex max-w-md pt-4" >
    <div class='flex-none mr-4'>
      <a target="_blank" href="https://assets.august.black/media/underweb/underweb.pdf">
        <Image
          class="w-32 h-48 p-0 m-0"
          width={644}
          height={832}
          alt="pdf icon"
          src="media/underweb/underweb_pdf.png"
          blurDataURL="data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoKAA0AAUAmJaQAAtz/vN3wAAD+/srQa7WBDlzb1RaL6DtM2INsC4YGA4EE+lts948BBf6H1AKAAA=="
        />

      </a>
    </div>
    <div class="text-xs pl-4">August Black, Marko Peljhan. 2011. <a target="_blank" href="/media/underweb/underweb.pdf">Underweb.</a> Submitted to ACM WWW &lsquo;12, but rejected</div>
  </div>
)

const longy: Component<{ children?: JSX.Element }> = (props) => (
  <div class='space-y-4 pl-4'>
    <div>
      The Underweb was a research project, started in 2007, that looked at how the web was changing from a text-formated document reader into a full-blown application space that appears to be on a trajectory to overlay the desktop.  Part of this research studied the history of IETF and W3C and sought to describe how technical standards, protocols, and API&apos;s shape the aesthetic, functional, and affective nature of the WWW.
    </div>
    <div>
      The Underweb was a two-part project. One part examined the politically charged and contentious battle over this extremely significant window on designed information.  A second part sought to build a working alternative browser that would challenge basic assumptions of the then-current web browser. I called it the underweb because, in essence, what I did was expose the underlaying C api&apos;s.
    </div>
    {props.children}
    <Pdf />
  </div>
)

const page = () => (
  <div class='space-y-4 pl-4'>
    <div>
      My dissertation (2007-2011), titled <b>&ldquo;Re-Framing the World Wide Web&rdquo;</b>, studies
      and describes how technical standards, protocols, and API&apos;s shape the
      aesthetic, functional, and affective nature of our most dominant mode
      of communication, the WWW.   Furthermore, it examines the politically
      charged and contentious battle over the most important window on
      designed and de-signified information.  As a remedy and way to catalyze
      the already non-linear development dynamic of this amorphous electronic
      infrastructure my dissertation proposes an alternative browser
      prototype and framework.  I provide both written and practical
      portions, arguing a need for more user-oriented technologies that
      equally emphasize the ability to read, write, and publish in the
      internet without third-party involvement.
    </div>

    <div class="lg:float-right lg:max-w-sm lg:pl-4 relative">
      <Image
        alt="screenshot of the Underweb showing two video surfaces playing while editing their shapes to be non-rectangular"
        src="media/underweb/underweb_videoencodedemo.jpg"
        width={812}
        height={635}
        blurDataURL="data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADQAQCdASoKAAgAAUAmJZwAAuX2FGpOAAD+4o2whwXxr+cXf+xJH1Ph3pP5X/o6GOxwHtl/9fe9iQp/4xE83KSJHkP+/0ufzPiklGwWyo9QSm9rgbMplJQAAAA="
      />

      <div class="pt-2 pb-2 text-xs">
        Underweb browser showing video encoding and streaming to an icecast
        server.  The left image shows the streaming video.  The right image
        shows a video player that is re-playing the live video from the server
        in an edited shape.
      </div>
    </div>

    <div>
      The written portion of the dissertation provides a critical analysis
      of the technological space of the WWW.  I analyze the history of the
      WorldWideWeb as it has evolved in piecemeal fashion from a single
      ascii-based file format made for a single browser into a dynamic and
      interlinked software environment.  I analyze the big changes that are
      on the horizon with HTML5 and how the new so-called standards tend
      towards a more centralized web experience, pushing more and more
      personal user data into private data clouds.  I show that previous
      additions to the web infrastructure were all implemented in
      retrospect, and how a recent push towards standardization at the
      application layer of online communication may not be necessary or
      even practical considering the possibilities afforded by free and
      libre software development methods.  Moreover, I consider what is
      lost in the simple, uniform, and effective communication format of
      HTML version 3, as well as the social and artistic significance of
      software methodologies that exist in a public sphere such as the WWW.
    </div>

    <div>
      For the practical portion of this dissertation, I introduce a
      proof-of-concept browser-like media and communication application
      environment called the Underweb.  Unlike the contemporary WWW, who&apos;s
      aesthetic and functional ideology is geared towards rectangular
      newspaper-like layout, single page-based interaction, and consumption of
      data,  the Underweb aims to provide the user with more general layout
      mechanisms, dynamic interaction, and tools for writing and publishing of
      data.   The Underweb can decode as well as encode audio-video streams on
      the net.  It contains potential support for multiple markup languages,
      and includes an API for developing simple non-rectangular container
      shapes.  It uses and exposes to the developer the lower level free
      software technologies that are employed, but concealed, by other
      contemporary browsers such as firefox, safarai and chrome.
    </div>

    <div class="lg:float-left lg:max-w-sm lg:pr-4">
      <Image
        src="media/underweb/libmentiras_editing.jpg"
        alt="screenshot of the Underweb showing two video surfaces playing while editing their shapes to be non-rectangular"
        width={900}
        height={506}
        blurDataURL="data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADQAQCdASoKAAYAAUAmJZQCdADZmNcMIAD++DD/X+7SH3qX/quuJ+pIakrwvpcBsf7hH+6XfMK+V51vzZ4f/3TuUVvPF4w4jWW2uAdZTD5NBveQDFCHvRgAAAA="
      />
      <div class="pt-2 pb-2 text-xs">
        Underweb browser in edit mode where users can directly edit shapes, texts, colors, and layouts inline.
      </div>
    </div>

    <div>
      These API&apos;s come from the free software libraries of glib, gtk+, cairo
      and pango.  It includes direct support for reading and writing of files,
      albeit with no current security model or sandbox strategy.  Underweb
      &ldquo;pages&rdquo; can be written in C, vala, javascript and python, but could
      potentially support other languages automatically through GOBject
      introspection.  It also includes support for decoding many multimedia
      formats that are currently unsupported by standard browsers, as well as a
      simple software hook to internally embed other browser engines such as
      Safari&apos;s webkit.  Furthermore, the Underweb browser also includes full
      socket support so that the browser is not only a client on the WWW, but
      also potentially the server.
    </div>
    <div class='clear-both' />
    <Pdf />
  </div>
)

const Underweb: Project = {
  kind: ['software', 'systems', 'highlight'],
  aspect: "aspect-802/630",
  key: 'underweb',
  date: '2007-2011',
  title: 'The Underweb',
  shortDesc: "alternative World Wide Web",
  place: 'the internet',
  info: {
    long: longy,
    page
  },
  media
}

export default Underweb
