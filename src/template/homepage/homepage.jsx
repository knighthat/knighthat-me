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

import {Footer} from "../footer.jsx";

export function HomePage() {

  const gotoPage = () => {
    window.location.href = 'https://inv.knighthat.me';
  }

  return (
      <>
        <div id={"header-background"}></div>
        <div className={"logo-section flex-row-wrap-center"}>
          <div className={"flex-row-wrap-center logo-container"}>
            <span
                id={"logo"}
                className={"pure-menu-heading overflow-wrap"}>KNIGHT HAT</span>
          </div>
        </div>
        <div className={"features-section flex-row-wrap-center"}>
          <div className={"cards-layout"}>
            <div className={"feature-card pure-u-1"}>
              <div className={"feature-card-background"} onClick={gotoPage}>
                <img className={"feature-card-icon"} src='/invidious-192x192.png' alt={"invidious logo"}/>
                <div className={"feature-card-description"}>
                  <h2 className={"feature-card-description-title"}>Invidious</h2>
                  <p className={"feature-card-description-description"}>Privacy focused front-end for Youtube</p>
                </div>
              </div>
            </div>
            <div className={"feature-card pure-u-1"}>
              <div className={"feature-card-background"} onClick={gotoPage}>
                <img className={"feature-card-icon"} src='/invidious-192x192.png' alt={"invidious logo"}/>
                <div className={"feature-card-description"}>
                  <h2 className={"feature-card-description-title"}>Invidious</h2>
                  <p className={"feature-card-description-description"}>Privacy focused front-end for Youtube</p>
                </div>
              </div>
            </div>
            <div className={"feature-card pure-u-1"}>
              <div className={"feature-card-background"} onClick={gotoPage}>
                <img className={"feature-card-icon"} src='/invidious-192x192.png' alt={"invidious logo"}/>
                <div className={"feature-card-description"}>
                  <h2 className={"feature-card-description-title"}>Invidious</h2>
                  <p className={"feature-card-description-description"}>Privacy focused front-end for Youtube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
  )
}