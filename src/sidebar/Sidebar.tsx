import { IonIcon } from '@ionic/react'
import { 
  mailOutline,
  logoGithub, 
  logoGitlab,
  logoLinkedin,
  locateOutline
} from 'ionicons/icons'


export function SidebarInfo() {
  return (
    <div className="sidebar-info_more">

      <div className="separator"></div>

      <ul className="contacts-list">

        <li className="contact-item">

          <div className="icon-box">
            <IonIcon icon={mailOutline} />
          </div>

          <div className="contact-info">
            <p className="contact-title">Email</p>

            <a href="mailto:contact@knighthat.me" className="contact-link">contact@knighthat.me</a>
          </div>

        </li>

        <li className="contact-item">

          <div className="icon-box">
            <IonIcon icon={locateOutline} />
          </div>

          <div className="contact-info">
            <p className="contact-title">Location</p>

            <address>Houston, Texas, USA</address>
          </div>

        </li>

      </ul>

      <div className="separator"></div>

      <ul className="social-list">

        <li className="social-item">
          <a href="#" className="social-link">
            <IonIcon icon={logoGithub} />
          </a>
        </li>

        <li className="social-item">
          <a href="#" className="social-link">
            <IonIcon icon={logoGitlab} />
          </a>
        </li>

        <li className="social-item">
          <a href="https://www.linkedin.com/in/minh-tan-nguyen-010000228/" className="social-link">
            <IonIcon icon={logoLinkedin} />
          </a>
        </li>

      </ul>


      <div className="credit-section">
        <p className="credit-source">
          Powered by <a className="credit-link" href="https://github.com/codewithsadee/vcard-personal-portfolio">vCard</a>
        </p>
      </div>

    </div>
  )
}