import React, { useState } from "react"

import AboutMe from "./about/AboutMe"
import Services from "./about/Services"
import Portfolio from "./portfolio/Portfolio"
import { Experience, Projects } from "./resume/Experience"
import { Skills } from "./resume/Skills"


type Tab = 'about' | 'resume' | 'portfolio'

type ArticleProps = {
  title: string
  className: Tab
  page: Tab
  children: React.ReactNode
}
type BtnProps = {
  title: string
  className: Tab
  page: Tab
  setPage: (newPage: Tab) => void
}

function NavBtn({ title, className, page, setPage }: BtnProps) {
  return (
    <li className="navbar-item">
      <button 
        className={`navbar-link ${page == className ? 'active' : ''}`}
        onClick={ () => setPage(className) }
      >{title}</button>
    </li>
  )
}
function Article({ className, title, page, children }: ArticleProps) {
  return (
    <article className={`${className} ${page == className ? 'active' : ''}`}>

      <header>
        <h2 className="h2 article-title">{title}</h2>
      </header>

      {children}

    </article>
  )
}

export default function MainContent() {
  const [page, setPage] = useState<Tab>('about')

  return (
    <div className='main-content'>  
      <nav className="navbar">
        <ul className="navbar-list">

        <NavBtn title='About' className='about' page={page} setPage={setPage} />
        <NavBtn title='Resume' className='resume' page={page} setPage={setPage} />
        <NavBtn title='Portfolio' className='portfolio' page={page} setPage={setPage} />
        </ul>
      </nav>

      <Article title="About me" className='about' page={page}>
        <AboutMe />
        <Services />
      </Article>

      <Article title="Resume" className='resume' page={page}>
        <Experience />
        <Projects />
        <Skills />
      </Article>

      <Article title="Portfolio" className='portfolio' page={page}>
        <Portfolio />
      </Article>
    </div>
  )
}