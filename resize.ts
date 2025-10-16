import sharp from 'sharp'
import type { Sharp, Metadata } from 'sharp'

const resizeIfSmaller = (base: string, img: Sharp, meta: Metadata, width: number) => width < meta.width
  ? img
    .resize(width)
    .toFile(`${base}-${width}.webp`)
  : Promise.resolve()

const convert = (name: string) => {
  if (!name) {
    return Promise.reject(new Error('usage: node resize.js <filename>'))
  }
  const base = name.split('.').slice(0, -1)[0]
  const img = sharp(name)
  return img.metadata()
    .then(meta => Promise.all([
      Promise.resolve(base),
      Promise.resolve(meta),
      img
        .resize(10)
        .webp()
        .toBuffer()
        .then(buf => `data:image/webp;base64,${buf.toString('base64')}`)
      , resizeIfSmaller(base, img, meta, 64)
      , resizeIfSmaller(base, img, meta, 256)
      , resizeIfSmaller(base, img, meta, 640)
      , resizeIfSmaller(base, img, meta, 840)
      , resizeIfSmaller(base, img, meta, 1080)
      , resizeIfSmaller(base, img, meta, 1200)
      , resizeIfSmaller(base, img, meta, 2048)
    ])
    )
}
console.log(process.argv)
convert(process.argv[2])
  .then(([src, meta, base64]) => console.log(`{\n\tsrc: "${src}",\n\twidth: ${meta.width},\n\theight: ${meta.height},\n\tblurDataURL: "${base64}"\n}`))
  .catch(console.error)
