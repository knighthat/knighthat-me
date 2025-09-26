import { IonIcon } from "@ionic/react";
import { mailOutline, locationOutline } from "ionicons/icons";
import type React from "react";


type ContactItemProps = {
  title: string
  icon: string
  children: React.ReactNode
}

function ContactItem({ title, icon, children }: ContactItemProps) {
  return (
    <li className="contact-item">
      <div className="icon-box">
        <IonIcon icon={icon} />
      </div>
      <div className="contact-info">
        <p className="contact-title">{title}</p>
        {children}
      </div>
    </li>
  )
}

export default function Contacts() {
  return (
    <ul className="contacts-list">
      <ContactItem title='Email' icon={mailOutline}>
        <a href="mailto:contact@knighthat.me" className="contact-link">contact@knighthat.me</a>
      </ContactItem>
      <ContactItem title='Location' icon={locationOutline}>
        <address>Houston, Texas, USA</address>
      </ContactItem>
      </ul>
  )
}