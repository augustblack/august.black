import { MediaGroup, MediaGrid, MediaProps } from '../../components/media'
import Socials from '../../components/socials'
import { Link } from '../../components/link'

const media: MediaProps[] = [
  {
    kind: 'image',
    alt: 'August Black headshot in stereo-ish',
    src: "img/august_stereo_2024.jpg",
    width: 4007,
    height: 3098,
    blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAADwAQCdASoKAAgAAUAmJQBOgCLQM8yrv/QA/vb/38KDYH8f/KEg6/R8v5Z147/Pb4S10FCvw9x5P+dni58px6P8vQii2q/WCudOsg4/07nP41Y6CIbxtdmlA9ArTSU5zxkFkt4/0HjKqN/k7686zC+W/1AAAA==",
    caption: () => (
      <div>
        Office portrait in stereo, summer 2024. <small>Squint and concentrate your vision on the center to see a 3D image pop-out.</small>
      </div>
    )
  },

  {
    kind: 'image',
    src: "img/whitebox_ai_mcluhan.jpg",
    width: 4200,
    height: 3569,
    blurDataURL: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAwAgCdASoKAAgAAUAmJQBOgMVG7YOomfigAAD+sgeyyK3HSof+AGPyTOjfIT0f4nCWkXJ5v5GBdTA0CsJej1qUxeFxMCayJZd8vW8rQJH7tMWxSomIvnx4X/Bu/KAAAAA=",
    alt: 'August Black presenting art papers at SIGGRPAH 2024 in Denver, Colorado.',
    bg: 'bg-slate-800',
    caption: () => (
      <div>
        August Black presenting a talk on "AI and Acoustic Space" at the <Link href="https://ima.or.at/de/projekt/reenacting_dartmouth/" external>Prolog Re-Enacting Dartmouth</Link> conference in St.Poelten, Austria. September 2025. <span class='text-xs'>photo by <Link href="https://www.avitalmeshi.com/" external>Avital Meshi</Link></span>
      </div>
    ),
  },
  {
    kind: 'image',
    src: "img/conduction_portugal.jpg",
    width: 1920,
    height: 1080,
    blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAQCdASoKAAYAAUAmJYwCdAEfaX6nIQAA4n/BzE9guGVSwzsxVBsT5OLWQAwgxEnbPG7sNbPd8htJP8womxGGNYQQP0If63Kocoa5HXHW57wd87DVl8bnr5ZAAA==",
    alt: 'August Black presenting The Conduction Series in Coimbra, Portugal.',
    bg: 'bg-slate-800',
    caption: () => (
      <div>
        August Black presenting "The Conduction Series" at the <Link href="https://audiomostly.com/" external>Audio Mostly 2025</Link> conference in Coimbra, Portugal. July 2025. <span class='text-xs'>photo by <Link href="https://jwirfs-brock.github.io/JWB_website/" external>Jordan Wirfs-Brock</Link></span>
      </div>
    ),
  },

  {

    kind: 'image',
    src: "img/AugustBlack_Siggraph2024.jpg",
    width: 6143,
    height: 4100,
    blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADQAQCdASoKAAcAAUAmJQBdgBupULEIQAD+/l9uMdP/fY7IVSm7bs8t3gbxdjyioq4arkV7Cyvjp8y332n+To6CH2SNdUNxgW4RYXHHKjWNr6Y49cAAAA==",
    alt: 'August Black presenting art papers at SIGGRPAH 2024 in Denver, Colorado.',
    bg: 'bg-slate-800',
    caption: () => (
      <div>
        August Black presenting the Art Papers @ SIGGRAPH 2024, Denver Colorado. <span class='text-xs'>photo by John Fujii © 2024 ACM SIGGRAPH</span>
      </div>
    ),
  },

  {
    kind: 'image',
    src: "img/august_endofus_oct2024.jpg",
    width: 1600,
    height: 1200,
    blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAQAgCdASoKAAgAAUAmJYwCdAEVu5bTLGsAAPw+WHft8E+1o18Sb9l5d276owj/Er8h8V/vZCtYkdxB2HvgXjKewBXvZ0dQtOx/AO88ehxPgVXA1eAAAA==",
    bg: 'bg-slate-800',
    alt: 'August Black in white protective suit standing in front of a large white table with lights on it and a project of superworms behind him.',
    caption: () => (
      <div>
        August Black in residency @ Evans School October 2024, Denver Colorado. <div class='text-xs'>photo by Nima Bahrehmand © 2024</div>
      </div>
    ),

  },
  /*
{
  kind: "image",
  alt: 'August Black and Nima Bahrehmand in "team critcal" custom made athletic jerseys with camo print.',
  src: "img/team_critical01.jpg",
  width: 4111,
  height: 3138,
  imgClass: "object-cover object-top",
  blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADwAQCdASoKAAgAAUAmJZwCw7Ddhzn3qWgA/q2aK/9fyNDl3Acp+bkTk/Liy3f/gEPDmMehg21frzOmlMKWnxIB8ysDUJWPaxHrvS00jp0azi1sWpEAAA==",
  caption: () => (
    <div>
      August Black and his first PhD advisee, <Link external href="https://nimabahrehmand.com/">Nima Bahrehmand</Link>,on &quot;team critical&quot; outside the offices of DCMP (and the ROTC), under the football stadium bleachers (July 5, 2023).
    </div>
  )
},
*/

  {
    kind: 'image',
    src: "img/august_ars_acustica_2022.png",
    width: 2312,
    height: 1734,
    blurDataURL: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADwAQCdASoKAAcAAUAmJYwCdADdpwoP7AAA+yOJSVd6FXg0z7oNW3cPPAojOEjyUNJlRmo5S0p7YSs32NxDC/Hfc6EWXd9wzC0gLh+a5uT91bmAxQJ0Uuu31IP0a0s4AAA=",
    alt: 'August Black presenting Mezcal via video link to the Ars Acoustica group o the European Broadcasting Union.',
    bg: 'bg-slate-800',
    caption: () => (
      <div>
        August Black presenting his radio work via video link to the Ars Acoustica
        group of the European Broadcasting Union. Geneva, Switzerland 2022.
      </div>
    ),
  },
  /*
  {
    kind: 'image',
    src: "img/august_2022.jpg",
    width: 3240,
    height: 2160,
    blurDataURL: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAABQAgCdASoKAAcAAUAmJbACdH8D2HQZ1PUF+eAA+ELeeltOyBbz350zveri/uS+5rKwCkEt/Mh3xkiWVupH/bhbRkF5drrwLa4IAR3MDMeEqbWoeHl3ELoBSt+LDIah6vLalStZhBAvyeWRLycVBrfFAAA=",
    bg: 'bg-slate-800',
    imgClass: 'object-contain',
    alt: 'Two photos of August Black, one in gray long sleeve shirt with blue sky behind, another portrait shot from below and looking upwards with T-shirt that says &lsquo;resist&rsquo;',
    caption: () => (<div>Left: California, 2022.  Right: PIF Camp, Slovenia 2022.</div>)
  },
  {
    kind: 'image',
    src: "media/mezcal/mezcal_pifcamp2022.jpg",
    width: 1200,
    height: 719,
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQAgCdASoKAAYAAUAmJYgCdAD5j2Pt9LQAAP7psLLhv5X+5lxpCHOz+6LL+TqEd5dVa/gY3imOsRUfABTQk3RB1wqyvOeEXYMY1RKK827wcx7eBovl5xN98C3LsW/F1G20csAA",
    bg: 'bg-slate-800',
    alt: 'Photo of August Black from behind with blue shirt and dark pants, talking to a group seated on benches under a red tent.',
    caption: () => (<div>August Black conducting a mezcal workshop at PIF Camp 2022 in Soča, Slovenia</div>)
  },
  {
    kind: 'image',
    src: "img/august_fancy_bathrooms.jpg",
    width: 3240,
    height: 2160,
    blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoKAAcAAUAmJbACdLoAAv4pEYaAAP6JlDuiD9pacpuAwicLG/vQrmp52Q/U6z+Mkbpvqx78wdLAXEMiXbj+mFqYzDH1iOMn/8m3AS28G3bejNfJpTPfjgAA",
    imgClass: "object-contain bg-black",
    bg: 'bg-slate-800',
    alt: 'self-portraits in two separate fancy bathrooms',
    caption: () => (<div>I have a fondness for self-portraits in fancy bathrooms.</div>)
  },
  {
    kind: 'image',
    src: "img/august_2015_17.jpg",
    width: 1920,
    height: 1080,
    blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAABQAgCdASoKAAYAAUAmJYwCdG1/DxwNX619+QAA/u5cK/iFtsE16mP8eT4j+54msq/F82imzsPEBY3wL+GQoi9n+1rWXfkF6h270RYVKh9xJBSTeX2ZdA+fLyMxRmogFmxnR/Cuo16KRbX14AA=",
    imgClass: 'object-contain',
    bg: 'bg-slate-800',
    alt: 'Three photos of August Black, one in an art museaum dressing black, another portrait with fava beans in mouth looking like a smile, a third with his face showing through an elephant stick mask.',
    caption: () => (<div>Left: lookin&apos; at aaaaaart, 2017.  Middle: Our Fava Who Art in Heaven, 2015. Right: Let&apos;s talk about this elephant in the room, 2017.</div>)
  }
  */
]
const About = () => (
  <>
    <div class="font-medium w-full text-nowrap bg-primary text-primary-content flex flex-row uppercase">
      <div class="w-32 hidden lg:block align-middle p-4 whitespace-no-wrap uppercase select-none">1975 - ∞</div>
      <div class="w-74 whitespace-no-wrap align-middle p-4 tracking-wider uppercase select-none">ABOUT</div>
      <div class="hidden md:inline  align-middle p-4 uppercase select-none">August Black</div>

    </div>

    <div class="p-4 flex-1 bg-linear-to-b from-primary/100 via-base-100/100 to-base-100/10 space-y-4 text-base-content">
      <div class="flex flex-row gap-4 place-items-start">
        <a href="/">
          <svg class="w-10 md:w-12 lg:w-24" fill="currentcolor" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g><path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z" /></g></svg>
        </a>
        <div class="flex flex-col lg:flex-row gap-4">
          <div class="flex-1 leading-relaxed sm:text-sm md:text-lg lg:text-xl space-y-4">
            <div class="">
              Hi, I&lsquo;m August Black. I&lsquo;m a hybrid practitioner of art, design, and
              engineering that critically engages with techno-social systems in playful and evocative ways.
              I create software, systems, and spaces through experimental
              research in the overlapping areas of new formats, network dynamics, and virtual
              architectures with a focus on audio and transmission. My activities tend to evoke
              themes of power, migration, play, noise, chance, and operate under methods of collaboration,
              commons-building, and communal interaction.
            </div>
            <div class="">
              My past work focused on live networked audio, mixing FM radio with user input through
              online software. I&apos;m currently investigating novel ways to use global networking
              for local and hyper-local real-time communication.
            </div>
            <div class="">
              I&lsquo;ve earned a living at various points in time as an artist, producer,
              graphic designer, software engineer, and educator. I&lsquo;ve had the pleasure
              of working at places like the{' '}
              <Link external href="http://kunstradio.at">
                ORF Kunstradio
              </Link>
              , the{' '}
              <Link external href="http://aec.at/futurelab">
                Ars Electronica Futurelab
              </Link>
              , the UCSB BioImaging Lab, and{' '}
              <Link external href="https://cycling74.com">
                Cycling &rsquo;74
              </Link>{' '}
              - the makers of Max/MSP. As an educator, I&lsquo;ve taught media-art classes
              at University of California Santa Barbara, University of San Francisco, and Colorado University Boulder.
            </div>
            <div class="">
              I hold a Phd in{' '}
              <Link external href="http://mat.ucsb.edu">
                Media, Arts, & Technology
              </Link>{' '}
              from the University of California, Santa Barbara, and am currently an
              Assistant Professor at Colorado University Boulder in the department of{' '}
              <Link external href="https://www.colorado.edu/cmci/dcmp">
                Critical Media Practices
              </Link>
              .
            </div>
            <div class="text-xs">
              I&apos;m a bit old-school and am just learning to participate in the instagoogle socials and whatnot (...I know, I know), so I offer here a few serious and semi-serious images as a consolation.
            </div>
            <div class="flex flex-row gap-4">
              <Socials />
            </div>
          </div>

        </div>

      </div>
    </div>
    <MediaGrid aspect="aspect-video" media={media} />
  </>
)

export default About
