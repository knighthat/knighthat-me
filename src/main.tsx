import { createRoot } from 'react-dom/client'
import Services from './about/Services'
import AboutMe from './about/AboutMe'
import { Experience, Projects, Skills } from './resume/Resume'
import Portfolio from './portfolio/Portfolio'
import { SidebarInfo } from './sidebar/Sidebar'


createRoot(document.getElementById('sidebar-info')!).render(
  <SidebarInfo />
)

createRoot(document.getElementById('services')!).render(
  <Services />
)

createRoot(document.getElementById('about-me')!).render(
  <AboutMe />
)

createRoot(document.getElementById('experience-timeline')!).render(
  <Experience />
)

createRoot(document.getElementById('projects-timeline')!).render(
  <Projects />
)

createRoot(document.getElementById('skills')!).render(
  <Skills />
)

createRoot(document.getElementById('portfolio')!).render(
  <Portfolio />
)