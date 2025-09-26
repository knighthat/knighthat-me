import { IonIcon } from "@ionic/react";
import { eyeOutline } from "ionicons/icons";


type ProjectProps = {
  title: string
  category: string
  url:string
  imgSrc: string
}

function Project({ title, category, url, imgSrc }: ProjectProps) {
  return (
    <li className="project-item active">
      <a href={url}>
        <figure className="project-img">
          <div className="project-item-icon-box">
            <IonIcon icon={eyeOutline} />
          </div>

          <img src={imgSrc} alt={title} loading="lazy" />
        </figure>
        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </a>
    </li>
  )
}

export default function Portfolio() {
  return (
    <section className="projects">
      <ul className="project-list">
        <Project 
          title='Kreate' 
          category='Android application' 
          url='https://github.com/knighthat/Kreate' 
          imgSrc='/project-kreate.webp'/>
        <Project 
          title='String modifier' 
          category='Automation' 
          url='https://gitlab.com/tannguyen047/string-modifier' 
          imgSrc='/project-string-modifier.webp'/>
        <Project 
          title='Interactive Deck' 
          category='Multiplatform application' 
          url='https://github.com/knighthat/InteractiveDeck-Desktop' 
          imgSrc='/project-interactive-deck.webp'/>
      </ul>
    </section>
  )
}