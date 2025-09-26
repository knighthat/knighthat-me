import { IonIcon } from '@ionic/react'
import { chevronDown, } from 'ionicons/icons'
import { useState } from 'react'

import Contacts from './Contacts'
import Socials from './Socials'


export function SidebarInfo() {
  return (
    <div className="sidebar-info_more">
      <div className="separator"></div>
      <Contacts />
      <div className="separator"></div>
      <Socials />
    </div>
  )
}

export default function Sidebar() {
  const [active, setActive] = useState(false)

  return (
    <aside className={`sidebar ${active ? "active" : ""}`}>

      <div className="sidebar-info">

        <div className="info-content">
          <h1 className="name" title="James Nguyen">James Nguyen</h1>

          <p className="title">Software developer</p>
        </div>

        <button className="info_more-btn" onClick={ () => setActive(prev => !prev) }>
          <span>Show Contacts</span>

          <IonIcon icon={chevronDown} />
        </button>

      </div>

      <SidebarInfo />

    </aside>
  )
}