import { useState } from "react"

import AboutMe from "./about/AboutMe"
import Services from "./about/Services"
import Portfolio from "./portfolio/Portfolio"
import { Experience, Projects, Skills } from "./resume/Resume"


export default function MainContent() {
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