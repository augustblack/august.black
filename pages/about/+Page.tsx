import AboutProject from '../../components/projects/about'
import { ProjectPage, ProjectCarousel } from '../../components/projects/page'
import { recent, older } from '../../components/projects/index'
import Menu from '../../components/menu'

const About = () => (
  <>
    <Menu />
    <ProjectPage project={AboutProject} />
    <ProjectCarousel current="about" recent={recent} older={older} />
  </>
)

export default About
