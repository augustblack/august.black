import { MediaGroup, MediaProps } from '../../components/media'

const media: MediaProps[] = [

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
    kind: "image",
    alt: 'August Black and Nima Bahrehmand in "team critcal" custom made athletic jerseys with camo print.',
    src: "img/team_critical01.jpg",
    width: 4111,
    height: 3138,
    imgClass: "object-cover object-top",
    blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADwAQCdASoKAAgAAUAmJZwCw7Ddhzn3qWgA/q2aK/9fyNDl3Acp+bkTk/Liy3f/gEPDmMehg21frzOmlMKWnxIB8ysDUJWPaxHrvS00jp0azi1sWpEAAA==",
    caption: () => (
      <div>
        August Black and his first PhD advisee, <a target="_blank" href="https://nimabahrehmand.com/">Nima Bahrehmand</a>,on &quot;team critical&quot; outside the offices of DCMP (and the ROTC), under the football stadium bleachers (July 5, 2023).
      </div>
    )
  },

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
]

const About = () => (
  <div class="bg-slate-300 text-slate-900  dark:bg-slate-800 dark:text-slate-300 flex flex-col sm:flex-row m-0 p-0 w-full">
    <div class="flex flex-col w-full md:w-1/2 flex-none">
      <div class="w-full flex-none aspect-1.5">
        <MediaGroup media={media} />
      </div>
    </div>
    <div class="flex-1 p-4 md:p-8 leading-relaxed sm:text-sm md:text-lg lg:text-xl space-y-4">
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
        <a target="_blank" href="http://kunstradio.at">
          ORF Kunstradio
        </a>
        , the{' '}
        <a target="_blank" href="http://aec.at/futurelab">
          Ars Electronica Futurelab
        </a>
        , the UCSB BioImaging Lab, and{' '}
        <a target="_blank" href="https://cycling74.com">
          Cycling &rsquo;74
        </a>{' '}
        - the makers of Max/MSP. As an educator, I&lsquo;ve taught media-art classes
        at University of California Santa Barbara, University of San Francisco, and Colorado University Boulder.
      </div>
      <div class="">
        I hold a Phd in{' '}
        <a target="_blank" href="http://mat.ucsb.edu">
          Media, Arts, & Technology
        </a>{' '}
        from the University of California, Santa Barbara, and am currently an
        Assistant Professor at Colorado University Boulder in the department of{' '}
        <a target="_blank" href="https://www.colorado.edu/cmci/dcmp">
          Critical Media Practices
        </a>
        .
      </div>
      <div class="text-xs">
        I&apos;m a bit old-school and am just learning to participate in the instagoogle socials and whatnot (...I know, I know), so I offer here a few serious and semi-serious images as a consolation.
      </div>
      <div class="flex flex-row gap-4">
        <a href="https://www.instagram.com/gustlschwartz/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
        </svg></a>
        <a href="https://github.com/augustblack" target="_blank" rel="noreferrer"><svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f" /></svg></a>
      </div>
    </div>
  </div>
)

export default About
