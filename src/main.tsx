import { createRoot } from 'react-dom/client'
import { StrictMode, useState } from 'react'

import Services from './about/Services'
import AboutMe from './about/AboutMe'
import { Experience, Projects, Skills } from './resume/Resume'
import Portfolio from './portfolio/Portfolio'
import Sidebar from './sidebar/Sidebar'


function MainContent() {
  const [page, setPage] = useState('about')

  return (
    <div className='main-content'>
      <nav className="navbar">
        <ul className="navbar-list">

          <li className="navbar-item">
            <button 
              className={`navbar-link ${page == 'about' ? 'active' : ''}`}
              onClick={ () => setPage('about') }
            >About</button>
          </li>

          <li className="navbar-item">
            <button 
              className={`navbar-link ${page == 'resume' ? 'active' : ''}`}
              onClick={ () => setPage('resume') }
            >Resume</button>
          </li>

          <li className="navbar-item">
            <button 
              className={`navbar-link ${page == 'portfolio' ? 'active' : ''}`}
              onClick={ () => setPage('portfolio') }
            >Portfolio</button>
          </li>

        </ul>
      </nav>

      <article className={`about ${page == 'about' ? 'active' : ''}`}>

        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <AboutMe />
        <Services />

      </article>

      <article className={`resume ${page == 'resume' ? 'active' : ''}`}>

        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <Experience />
        <Projects />
        <Skills />
      </article>

      <article className={`portfolio ${page == 'portfolio' ? 'active' : ''}`}>

        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <Portfolio />
      </article>
    </div>
  )
}

createRoot(document.getElementsByTagName('main')[0]!).render(
  <StrictMode>
    <Sidebar />
    <MainContent />
  </StrictMode>
)