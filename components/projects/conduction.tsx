import type { JSX } from 'solid-js'
import { Component } from 'solid-js'
import { Project } from './types'
import { Link, LinkPlain } from '../link'
import { MediaProps } from '../media'
import Image from '../image'
import { Logos } from './logos'

const Paper = () => (
  <div class="pt-4 flex max-w-md">
    <div class='flex-none'>
      <Image
        class="w-32 h-48"
        width={500}
        height={646}
        draggable={false}
        alt="pdf icon"
        src="media/conduction_series/conduction_paper.jpg"
        blurDataURL="data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoKAA0AAUAmJaQAAxf/BGBuQAD+/sfcrwBNubLhdhfu8BDvyqltWSWhwY+lwxLWIyccuvJtjQ+LmY6X7xlAAA=="
      />
    </div>
    <div class="text-xs pl-4">Black, A. et al, The Conduction Series: Live Collaborative Transmission Art
      across Borders, 20th International Audio Mostly Conference - June 30-July 04, 2025 - Coimbra, Portugal. DOI: 10.1145/3771594.3771612, ISBN:979-8-4007-2065-9/25/06 (Forthcoming Dec. 2025)</div>
  </div>
)

const media: MediaProps[] = [
  /*
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
  */

  {
    kind: 'image',
    alt: 'conduction series logo',
    src: "media/conduction_series/conduction_web_2025.jpg",
    width: 2125,
    height: 1773,
    blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAAAwAQCdASoKAAgAAUAmJaQAA3AA/vwfOPcl2H7gHODDkXwwu84gHgAA"
  },
  {
    kind: 'image',
    src: "media/conduction_series/ConductionGroup2025.jpg",
    alt: 'conduction series members as of 2024',
    imgClass: 'object-contain w-full h-full bg-black',
    width: 6000,
    height: 6000,
    blurDataURL: "data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAACQAgCdASoKAAoAAUAmJYgCdAaXfnac2LroOY8mgAD+4leOF/V1stkr/JbqvquR19se3qwKedLTmzYhWwidSi+791c9a6Ih5eb+ayMiff7QWecb74PjW0K34RuPWKd7TVUiMtrwkS8CyG5Gkd4OAQqWkTZfWxkBcRN39+tNdhoMAAAA"
  },
  {
    kind: 'image',
    alt: 'August Black and Anna Friz at the RP2 studio of the Austrian Funkhaus, shown at a table in front view',
    src: "media/conduction_series/termites_august_anna_front.jpg",
    width: 4080,
    height: 3060,
    caption: () => (<div>Live from RP2 studio of the Austrian Funkhaus - Sept. 25th, 2025,   &ldquo;Audio Termites&rdquo;.</div>),
    blurDataURL: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADQAQCdASoKAAcAAUAmJQBOgBupE3v4gAD+44nESjS4gxcjY54cgzy72OiKTnnef/NCvFnw5t79Qjenjs/JuIACEaMvIRXNtwEKWdN6GPyp3iJgmnDeNV0riNabH9YAAAA="
  },
  {
    kind: 'image',
    alt: 'August Black and Anna Friz at the RP2 studio of the Austrian Funkhaus, shown at a table from behind looking at laptops running mezcal software',
    src: "media/conduction_series/termites_august_anna_back.jpg",
    width: 4080,
    height: 3060,
    caption: () => (<div>Live from RP2 studio of the Austrian Funkhaus - Sept. 25th, 2025,   &ldquo;Audio Termites&rdquo;.</div>),
    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAQCdASoKAAcAAUAmJQBOgCLQM9kbj3gA/vXwL8TAW20LTfbMD+Cdfx866479f059EJ2NP9CXV92Hvv9ZxSpv1h0Cj71acIF7mb4ElMwb7g/gm2VzfWVnADwGUqZcLxAAprZ+AAA="
  },
  {
    kind: 'image',
    alt: 'Three views of August Black and Anna Friz at the RP2 studio of the Austrian Funkhaus, shown from afar',
    src: "media/conduction_series/termites_three.jpg",
    width: 2906,
    height: 2683,
    caption: () => (<div>Live from RP2 studio of the Austrian Funkhaus - Sept. 25th, 2025,   &ldquo;Audio Termites&rdquo;.</div>),
    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAQCdASoKAAkAAUAmJYgCdAEUoU2hutAA/vTAVRm/IK05aW+kpkTSpFP3yIRRCmLzOat/DC/l2B+zFqtL5bwoh/nRwUqoSIinW3N0eAI5J204p7EvVTL66fWyXx+AlCnTQXb6gAA="
  },
  {
    kind: 'image',
    alt: 'three images of washing machines with microphones attached or pointed at the machines.',
    src: "media/conduction_series/WhiteWashingMachines.jpg",
    width: 6000,
    height: 4000,
    blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADwAQCdASoKAAcAAUAmJQBOgCLZnXNVByAAzjN+H8LfnWDYovU+1Voco4ojHKUAj1vIdwGefF4MyR5RFzTt8ruU2s/3E5cSsmXoxkWxl3xgoW8Ndc8cIXt8+JRryCsju7pzi+jtqGDBpK3SAAA=",
    caption: () => (<div>April 4th, 2025 - Live washing machines for a show titled &ldquo;White Washing&rdquo;.<audio src="https://assets.august.black/conduction_series/recordings/2025_04_04-propagandaCan.mp3" controls class="h-8 outline-none mt-1" /></div>)
  },
  {
    kind: 'image',
    alt: 'screenshot showing two input tracks for recording the White Washing show',
    src: "media/conduction_series/screen2025_04_04.jpg",
    imgClass: 'object-cover object-top-left w-full h-full bg-black',
    width: 3020,
    height: 1876,
    blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoKAAYAAUAmJQBOgBujioycAP73UvoV1S31/SoZ02gaHImRTpfGI6oWjbgBOEjxM2DVe+J+HDu+vBfJIONAAA==",
    caption: () => (<div>Screenshot from April 4th, 2025 - Live washing machines for a show titled &ldquo;White Washing&rdquo;.</div>)
  },
  {
    kind: 'image',
    src: "media/conduction_series/bogota_planetario01.jpg",
    width: 1791,
    height: 1600,
    blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoKAAkAAUAmJbACw7EO/y2RAAD+/ojDNe+R8wPAGo2koBADo1JPSN/9h16l+m/v//iANZxmdZ0cRfcNYSAAAA==",
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
    imgClass: 'object-conver object-bottom w-full h-full',
    alt: 'mezcal interface',
    caption: () => (<div>Dec. 1st, 2023 - Live from the Bogot&aacute; Planetario as part of the Domo Lleno Festival 2023.</div>)
  },

  {
    kind: 'image',
    src: "media/conduction_series/conduction_series_photo.jpg",
    imgClass: 'object-contain w-full h-full bg-black',
    alt: 'conduction series members 2021',
    width: 1200,
    height: 1200,
    blurDataURL: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAQCdASoKAAoAAUAmJagCdADchoB5yUAA/urxl371RsrijmKNS/EWRkxTPpHYs/MtirMQmM71OjnRqcybo1eh2tn3/xkGxMneP38Pprzrv5i7zKT41equ19gsrCQGewd0/ZwylNyPd/MfMQAAAA==",
    caption: () => (<div class='text-xs hidden lg:block'><span class='pr-2'>top:  Anna Friz, Florencia Curci, Virginia Mantinian</span>
      <span class='pr-2'>middle: Jimmy Garver,  August Black, Maximilian Goldfarb</span>
      <span class=''>bottom: Peter Courtemanche, Jeff Economy, Betsey Biggs</span></div>)
  },

  {
    kind: 'image',
    src: "media/mezcal/mezcal_screen_clipped.png",
    width: 1158,
    height: 942,
    blurDataURL: "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoKAAgAAUAmJZQCdAEQ/SwO0QAA/ug/Rdm8lvQE6qB15cVQt638eX7bXFdIBz4DO/jrXuZfVBMDHoUjoRyJFJXdFdOsBGllsAA=",
    bg: 'bg-black',
    imgClass: 'object-cover object-top-left w-full h-full',
    alt: 'mezcal interface',
    caption: () => (<div>The mezcal interface as shown during the TSONAMI festival in Valparaiso, Chile 2022.</div>)
  },
  {
    kind: 'image',
    alt: 'block print of conduction series logo',
    src: "media/conduction_series/logo_block.jpg",
    imgClass: 'object-contain w-full h-full bg-white dark:invert',
    width: 2330,
    height: 1188,
    blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAACwAQCdASoKAAUAAUAmJaQAAsZ5atcAAP7oqNc1jnnnL1o/nKqbURGNNWUm2V7+V/bYnwT2b/2gkeA5Hp6WWNczEJ+aZH+86E9iveSmt9PNBKAAAAA=",
    caption: () => (<div>Our logo speaks to our polar modes of breathful listening and outward propagation. We sometimes operate under the motto "There can be no conspiracy without shared breath".</div>)
  },
  /*
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
  */

]

const page: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="flex flex-col gap-4">
      <div class="flex-1">
        <span class="font-stretch-expanded">The Conduction Series</span> is a collaborative live radio broadcast produced by sound and transmission artists across the Americas on <Link external href="https://wavefarm.org">Wave Farm’s</Link> WGXC 90.7-FM Radio for Open Ears in New York’s Upper Hudson Valley. The collective comes together on the first Friday of every month at 3:02pm ET using the web platform <Link href="/mezcal" >Mezcal</Link>. Emphasizing live radio, interactivity, and media archaeological methods, the series explores themes of migration, noise, feedback, speculative fiction, transmissive theatrics, and recreational aesthetics.
      </div>
      <div class="flex-1">
        <span class="font-stretch-expanded">The Conduction Series</span> <span class=""> is syndicated on <Link href="https://radiomonteaudio.org/" external>Radio MonteAudio</Link> in Montevideo, Uruguay, <Link href="https://tsonami.cl/" external >Radio Tsonami</Link> in Valpara&iacute;so, Chile,  <Link href="https://centrodeartesonoro.cultura.gob.ar/info/radio-caso/" external >Radio CASo</Link> in Buenos Aires, Argentina, <Link href="https://www.citr.ca/" external >CITR FM</Link> in Vancouver, Canada, <Link href="https://naisa.ca/naisa-radio/#conduction" external>New Adventures in Sound Art</Link> in Ontario, Canada, and on <Link href="https://1190.radio/" external >Radio 1190</Link> in Boulder/Denver, Colorado.</span>
      </div>
      <div class="flex-1">
        <span class="font-stretch-expanded">The Conduction Series</span> members are Betsey Biggs (US), August Black (US), Peter Courtemanche (CA), Florencia Curci (AR), Jeff Economy (USA), Anna Friz (CA/DK), Jimmy Garver (US), Maximilian Goldfarb (US), Virginia Mantinian(AR), and Rodrigo R\u00edos Zunino (CL).
      </div>
    </div>
    <div>
      <Link external href='http://conduction.wavefarm.org'>http://conduction.wavefarm.org</Link>
    </div>
    <Logos logos={['wavefarm']} />
    {props.children}
    <Paper />
  </>
)

const longy: Component<{ children?: JSX.Element }> = (props) => (
  <>
    <div class="">
      <Link external href='http://conduction.wavefarm.org'>The Conduction Series</Link> is a monthly live collaborative radio series airing on Wave Farm’s WGXC 90.7-FM Radio for Open Ears in New York’s Upper Hudson Valley.  It consists of a core group of sound and transmission artists from various locations who come together with other remote participants to perform a kind of live media archeaology together.
    </div>
    <div><Link external href='http://conduction.wavefarm.org'>http://conduction.wavefarm.org</Link></div>
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
