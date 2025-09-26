import { IonIcon } from "@ionic/react";
import { eyeOutline } from "ionicons/icons";


export default function Portfolio() {
  return (
    <section className="projects">

      <ul className="project-list">

        <li className="project-item  active">
          <a href="https://github.com/knighthat/Kreate">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <IonIcon icon={eyeOutline} />
              </div>

              <img src="/project-kreate.webp" alt="kreate" loading="lazy" />
            </figure>

            <h3 className="project-title">Kreate</h3>

            <p className="project-category">Android application</p>

          </a>
        </li>

        <li className="project-item  active">
          <a href="https://gitlab.com/tannguyen047/string-modifier">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <IonIcon icon={eyeOutline} />
              </div>

              <img src="/project-string-modifier.webp" alt="string-modifier" loading="lazy" />
            </figure>

            <h3 className="project-title">String modifier</h3>

            <p className="project-category">Automation</p>

          </a>
        </li>

        <li className="project-item  active">
          <a href="https://github.com/knighthat/InteractiveDeck-Desktop">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <IonIcon icon={eyeOutline} />
              </div>

              <img src="/project-interactive-deck.webp" alt="interactive-deck" loading="lazy" />
            </figure>

            <h3 className="project-title">Interactive Deck</h3>

            <p className="project-category">Multiplatform application</p>

          </a>
        </li>

      </ul>

    </section>
  )
}