import type { JSX } from 'solid-js'
import { Component } from 'solid-js'
import { Project } from './types'
import { MediaProps } from '../media'
import { Logos } from './logos'

const media: MediaProps[] = [
  {
    kind: 'image',
    alt: 'conduction series logo',
    bg: 'dark:bg-slate-800 ',
    imgClass: 'object-contain dark:invert scale-75 w-full h-full',
    src: "conduction_series/logo/seed.png",
    width: 1017,
    height: 940,
    blurDataURL: "data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAACQAACAAAQUxQSFUAAAABcGPbtprcuLu7u6dKoKSjpWMx/5EwiIgIEGAkEABAQHPpP/n1HL8tCOD6ncPnbYNQjjnUYn3iUXS6w/t6VBB1bCukbvpVWPCqDFFTlSjSDAoQNckGAFZQOCAYAAAAMAEAnQEqCgAJAAFAJiWkAANwAP79NmgA"
  },
  {
    kind: 'image',
    src: "media/conduction_series/conduction_series_photo.jpg",
    alt: 'conduction series members',
    width: 1200,
    height: 1200,
    blurDataURL: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAQCdASoKAAoAAUAmJagCdADchoB5yUAA/urxl371RsrijmKNS/EWRkxTPpHYs/MtirMQmM71OjnRqcybo1eh2tn3/xkGxMneP38Pprzrv5i7zKT41equ19gsrCQGewd0/ZwylNyPd/MfMQAAAA==",
    caption: () => (<div class='text-xs'><span class='pr-2'>top:  Anna Friz, Florencia Curci, Virginia Mantinian</span>
      <span class='pr-2'>middle: Jimmy Garver,  August Black, Maximilian Goldfarb</span>
      <span class=''>bottom: Peter Courtemanche, Jeff Economy, Betsey Biggs</span></div>)
  },
  {
    kind: 'image',
    alt: 'conduction series members',
    src: "media/conduction_series/WhiteWashingMachines.jpg",
    width: 6000,
    height: 4000,
    blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADwAQCdASoKAAcAAUAmJQBOgCLZnXNVByAAzjN+H8LfnWDYovU+1Voco4ojHKUAj1vIdwGefF4MyR5RFzTt8ruU2s/3E5cSsmXoxkWxl3xgoW8Ndc8cIXt8+JRryCsju7pzi+jtqGDBpK3SAAA=",
    caption: () => (<div>April 4th, 2025 - Live washing machines for a show titled &ldquo;White Washing&rdquo;.<audio src="https://assets.august.black/conduction_series/recordings/2025_04_04-propagandaCan.mp3" controls class="h-8 outline-none mt-1" /></div>)
  },

  {
    kind: 'image',
    src: "media/conduction_series/bogota_planetario01.jpg",
    width: 1791,
    height: 1600,
    blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoKAAkAAUAmJbACw7EO/y2RAAD+/ojDNe+R8wPAGo2koBADo1JPSN/9h16l+m/v//iANZxmdZ0cRfcNYSAAAA==",
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full',
    alt: 'mezcal interface',
    caption: () => (<div>Dec. 1st, 2023 - Live from the Bogot&aacute; Planetario as part of the Domo Lleno Festival 2023. <audio src="https://assets.august.black/conduction_series/recordings/2023_12_01-the_sun.mp3" controls class="h-8 outline-none mt-1" /></div>)
  },
  {
    kind: 'image',
    src: "media/conduction_series/bogota_planetario02.jpg",
    width: 4080,
    height: 3072,
    blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoKAAgAAUAmJaACdEf/geiY567gAP7+cmsATa/+f8Dyo6NWUk4hLIf+Zz73W65T1R1UkqA1tYz/efo/+PGaQr0/3IV/+klVHtjsveDs0Uf4+f7TEt8PzgAA",
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full',
    alt: 'mezcal interface',
    caption: () => (<div>Dec. 1st, 2023 - Live from the Bogot&aacute; Planetario as part of the Domo Lleno Festival 2023.</div>)
  },
  {
    kind: 'image',
    src: "media/mezcal/mezcal_screen_clipped.png",
    width: 1158,
    height: 942,
    blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoKAAgAAUAmJZQCdAEQ/SwO0QAA/ug/Rdm8lvQE6qB15cVQt638eX7bXFdIBz4DO/jrXuZfVBMDHoUjoRyJFJXdFdOsBGllsAA=",
    bg: 'bg-black',
    imgClass: 'object-contain w-full h-full',
    alt: 'mezcal interface',
    caption: () => (<div>The mezcal interface as shown during the TSONAMI festival in Valparaiso, Chile 2022.</div>)
  },
  {
    kind: 'image',
    alt: 'conduction series logo (lungs)',
    bg: 'dark:bg-slate-800 ',
    imgClass: 'object-contain dark:invert scale-75 w-full h-full',
    src: "conduction_series/logo/lungs.png",
    width: 1014,
    height: 767,
    blurDataURL: "data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAQAAAACQAABwAAQUxQSE0AAAABcBhJtmlL2mfb9nvfTMA2EvgRESD5dmYyACCZ8/vApgDWq17rX2UCanE/iKf/XIEVtDaVrJ4dZ4cDGXY8XvquovLgTC8OTZYCQBtNCgBWUDggGAAAADABAJ0BKgoACAABQCYlpAADcAD+/TZoAA=="
  },

]

const page: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="">
      <a target="_blank" href='http://conduction.wavefarm.org'>The Conduction Series</a> is a collaborative live radio broadcast produced by sound and transmission artists across the Americas on <a target="_blank" href="https://wavefarm.org">Wave Farm’s</a> WGXC 90.7-FM Radio for Open Ears in New York’s Upper Hudson Valley. The collective comes together on the first Friday of every month at 3:02pm ET using the web platform <a href="/mezcal" >Mezcal</a>. Emphasizing LIVE interactivity and media archaeological methods, the series explores themes of migration, feedback, user participation, low-key and on-site interaction with mobile devices, and remote collaboration at scale.
    </div>
    <div>
      <a target="_blank" href='http://conduction.wavefarm.org'>http://conduction.wavefarm.org</a>
    </div>

    <Logos logos={['wavefarm']} />

    <div class="font-bold">Syndicated by:</div>
    <ul>
      <li><a target="_blank" href="https://radiomonteaudio.org/">Radio MonteAudio</a> in Montevideo, Uruguay</li>
      <li><a target="_blank" href="https://tsonami.cl/">Radio Tsonami</a> in Valpara&iacute;so, Chile</li>
      <li><a target="_blank" href="https://www.citr.ca/">CITR FM</a> in Vancouver, Canada</li>
      <li><a target="_blank" href="https://naisa.ca/">New Adventures in Sound Art</a> in Ontario, Canada.</li>
    </ul>
    {props.children}
  </>
)

const longy: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="">
      <a target="_blank" href='http://conduction.wavefarm.org'>The Conduction Series</a> is a monthly live collaborative radio series airing on Wave Farm’s WGXC 90.7-FM Radio for Open Ears in New York’s Upper Hudson Valley.  It consists of a core group of sound and transmission artists from various locations who come together with other remote participants to perform a kind of live media archeaology together.
    </div>
    <div><a target="_blank" href='http://conduction.wavefarm.org'>http://conduction.wavefarm.org</a></div>
    <Logos logos={['wavefarm']} />
    {props.children}
  </>
)


const ConductionSeries: Project = {
  kind: ['performance', 'radio'],
  aspect: "aspect-5/4",
  key: 'conduction',
  date: '2021 - ∞',
  title: 'The Conduction Series',
  shortDesc: "monthly collaborative radio",
  place: 'various',
  info: {
    long: longy,
    page
  },
  media
}

export default ConductionSeries
