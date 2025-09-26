import { IonIcon } from "@ionic/react";
import { logoGithub, logoGitlab, logoLinkedin } from "ionicons/icons";


type SocialItemProps = {
  url: string
  icon: string
}

function SocialItem({ url, icon }: SocialItemProps) {
  return (
    <li className="social-item">
      <a href={url} className="social-link clickable">
        <IonIcon icon={icon} />
      </a>
    </li>
  )
}

export default function Socials() {
  return (
    <ul className="social-list">
      <SocialItem url='https://github.com/knighthat' icon={logoGithub} />
      <SocialItem url='https://gitlab.com/tannguyen047' icon={logoGitlab} />
      <SocialItem url='https://www.linkedin.com/in/minh-tan-nguyen-010000228/' icon={logoLinkedin} />
    </ul>
  )
}