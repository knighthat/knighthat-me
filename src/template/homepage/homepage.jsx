/*
 * Copyright (c) 2024 KnightHat. All right reserves
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import './homepage.css'

import {Link} from "react-router-dom";

import Footer from "../footer.jsx";
import Header from "../header.jsx";


function FeatureCard({icon_path, icon_alt, title, description, destination}) {
  return (
      <div className={'pure-u-1 pure-u-xl-1-3'}>
        <div className={'feature-card-margin'}>
          <div className={'feature-card'}>
            <Link to={destination}>
              <div className={'feature-card-icon'}>
                <img src={'/' + icon_path} alt={icon_alt}/>
              </div>
              <div className={'feature-card-description'}>
                <h2 className={"feature-card-description-title"}>{title}</h2>
                <p className={"feature-card-description-description"}>{description}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default function HomePage() {
  return (
      <>
        <Header/>
        <div id={"header-background"}></div>
        <div className={"logo-section flex-row-wrap-center"}>
          <div className={"flex-row-wrap-center logo-container"}>
             <span
                 id={"logo"}
                 className={"pure-menu-heading overflow-wrap"}
             >
               KNIGHT HAT
             </span>
          </div>
        </div>
        <div className={'pure-g features-section'}>
          <div className={'feature-cards-container'}>
            <div className={'pure-g'}>
              <div className={'pure-u-1 pure-u-xl-1-3'}></div>
              <FeatureCard
                  icon_path='invidious-192x192.png'
                  icon_alt='Invidious logo'
                  title='Invidious'
                  description='Privacy focused front-end for Youtube'
                  destination='https://inv.knighthat.me'
              />
              <div className={'pure-u-1 pure-u-xl-1-3'}></div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
  )
}