import type { JSX, Component } from 'solid-js'
import { For } from 'solid-js'
import Menu from './menu'
import { Link } from './link'

type PaperEntry = {
  type: 'header' | 'paper'
  title?: string
  citation?: () => JSX.Element
  year?: number
}

type PaperSection = {
  title: string
  entries: PaperEntry[]
}

const paperData: PaperSection[] = [
  {
    title: "Publications",
    entries: [
      {
        type: 'header',
        title: 'Proceedings'
      },
      {
        type: 'paper',
        year: 2026,
        citation: () => <>Black, A. <i>Mezcal: A Collaborative Transmission Art Instrument</i> <i>Proceedings of the International Conference on New Interfaces for Musical Expression (NIME '26)</i>, June 23–26, 2026, London, UK. <span class="text-xs">(DOI forthcoming June 2026)</span></>
      },
      {
        type: 'paper',
        year: 2025,
        citation: () => <>Black, A. <i>Audio Compost: a collaborative virtual frippertronic loop</i> <i>Proceedings of the ACM International Conference on Web Audio.</i> Nov 19-21, 2025, Paris, France. <Link external href="https://wac-2025.ircam.fr/award.html"><b>BEST PAPER AWARD</b></Link>. <Link external href="https://doi.org/10.5281/zenodo.17642103">https://doi.org/10.5281/zenodo.17642103</Link> </>
      },
      {
        type: 'paper',
        year: 2025,
        citation: () => <>Lettang, J., Black, A. <i>Aquapella: Gestural Interactions with Liquid Turbulence as Musical Expression</i> <i>Proceedings of the ACM International Conference on New Interfaces for Musical Expression.</i> June 24-27, 2025, Canberra, Australia. <Link external href="https://doi.org/10.5281/zenodo.15699626">https://doi.org/10.5281/zenodo.15699626</Link> </>
      },
      {
        type: 'paper',
        year: 2025,
        citation: () => <>Black, A. et al. <i>The Conduction Series: Live Collaborative Transmission Art Across Borders</i> <i>Proceedings of the 20th International Audio Mostly Conference on Interactive Audio.</i> July 3-7, 2025, Coimbra, Portugal. <Link external href="https://doi.org/10.1145/3771594.3771612">https://doi.org/10.1145/3771594.3771612</Link></>
      },
      {
        type: 'paper',
        year: 2025,
        citation: () => <>Black, A. <i>Boutique Permasoftware: micro-cultures of care and stewardship in software ecologies</i> <i>Politics of the Machine.</i> <Link external href="http://doi.org/10.14236/ewic/POM24.33">http://doi.org/10.14236/ewic/POM24.33</Link> </>
      },
      {
        type: 'paper',
        year: 2024,
        citation: () => <>Vann, B., Molina-Garcia, J., Black, A. <i>Pulse Memorial: A web broadcasted multichannel sound installation exploring queer grief through audience participation</i> <i>Proceedings of the ACM on Computer Graphics and Interactive Techniques SIGGRAPH Asia</i>. <Link external href="https://doi.org/10.1145/3680530.3695450">https://doi.org/10.1145/3680530.3695450</Link> </>
      },
      {
        type: 'paper',
        year: 2024,
        citation: () => <>Black, A. <i>Editor for Art Papers</i> <i>Proceedings of the ACM on Computer Graphics and Interactive Techniques</i>. <Link external href="https://dl.acm.org/toc/pacmcgit/2024/7/4">https://dl.acm.org/toc/pacmcgit/2024/7/4</Link></>
      },
      {
        type: 'paper',
        year: 2017,
        citation: () => <>Black, A. <i>Hear-Here: a choreographed peer-to-peer network for live participation on the radio</i> <i>Proceedings of the 12th International Audio Mostly Conference on Augmented and Participatory Sound and Music Experiences</i>, London, United Kingdom. ISBN: 978-1-4503-5373-1 <Link external href="https://doi.org/10.1145/3123514.3123552">https://doi.org/10.1145/3123514.3123552</Link></>
      },
      {
        type: 'paper',
        year: 2004,
        citation: () => <>Black, A. <i>Userradio</i> <i>Proceedings of the 12th annual ACM international conference on Multimedia</i>, New York, NY. ISBN: 1-58113-893-8 <Link external href="https://doi.org/10.1145/1027527.1027570">https://doi.org/10.1145/1027527.1027570</Link></>
      },
      {
        type: 'header',
        title: 'Journals'
      },
      {
        type: 'paper',
        year: 2025,
        citation: () => <>Bahrehmand, N., Black, A. <i>The Feeders</i> <i>Sightlines Journal Issue 7</i>, Australian Screen Production Education and Research Association. ISSN: 2653-1801 (Online). <Link external href="https://doi.org/10.64139/sightlines.2025.007.005">https://doi.org/10.64139/sightlines.2025.007.005</Link></>
      },
      {
        type: 'paper',
        year: 2022,
        citation: () => <>Biggs, E., Black, A. <i>We Are Here FM</i> <i>The Digital Review</i>, September 01, 2022. <Link external href="https://doi.org/10.7273/fxjt-f515">https://doi.org/10.7273/fxjt-f515</Link></>
      },
      {
        type: 'paper',
        year: 2014,
        citation: () => <>Beas-Luna, R.,Novak, M.,Carr, M., Tinker, M., Black, A.,Caselle, J., Hoban, .M, Malone, D.,Iles, A. <i>An online database for informing ecological network models: kelpforest.ucsc.edu</i> <i>PLoS One</i>, Oct 24;9(10):e109356. <Link external href="https://doi.org/10.1371/journal.pone.0109356">https://doi.org/10.1371/journal.pone.0109356</Link> </>
      },
      {
        type: 'header',
        title: 'Book Chapters'
      },
      {
        type: 'paper',
        year: 2011,
        citation: () => <>Black, A. <i>Userradio</i> In <i>Transmission Arts: Artists & Airwaves</i>, New York 2011, PAJ, ISBN 978-1-55554-151-4</>
      },
      {
        type: 'paper',
        year: 2008,
        citation: () => <>Black, A. <i>An Anatomy of Radio</i> In <i>Re-Inventing Radio: Aspects of Radio as Art</i>, Frankfurt/Main 2008, Revolver, ISBN 978-3-86588-453-4</>
      },
      {
        type: 'paper',
        year: 2008,
        citation: () => <>Black, A. <i>Blindsight is 20/20</i> In <i>Re-Inventing Radio: Aspects of Radio as Art</i>, Frankfurt/Main 2008, Revolver, ISBN 978-3-86588-453-4</>
      }
    ]
  }
]

const Papers: Component = () => (
  <>
    <Menu />
    <div class="w-full p-0 lg:p-4 items-center justify-center flex flex-col gap-4 lg:gap-8">
      <For each={paperData}>
        {(section) => (
          <div class="w-full flex flex-row gap-2">
            <div class="w-0 hidden lg:flex lg:w-1/6" />
            <div class="w-full lg:w-2/3 px-4 lg:px-0 prose prose-lg text-base-content font-light">
              <div class="font-medium uppercase text-3xl mb-6 text-center tracking-widest">{section.title}</div>
              <div class="flex flex-col gap-3">
                <For each={section.entries}>
                  {(entry) => (
                    <>
                      {entry.type === 'header' && (
                        <div class="font-medium text-lg mt-6 mb-2 uppercase tracking-wide">{entry.title}</div>
                      )}
                      {entry.type === 'paper' && (
                        <div class="pl-4 text-sm leading-relaxed">
                          {entry.citation && entry.citation()}
                        </div>
                      )}
                    </>
                  )}
                </For>
              </div>
            </div>
            <div class="w-0 hidden lg:flex lg:w-1/6" />
          </div>
        )}
      </For>
    </div>
  </>
)

export default Papers 
