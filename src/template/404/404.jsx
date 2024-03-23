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

import './404.css'

function Footer() {
  return (
      <footer className={"notfound-err-footer"}>
        Content is a modified version of <a href="https://colorlib.com/wp/template/colorlib-error-404-8/">Colorlib Error
        404 V8</a>
      </footer>
  )
}

export default function Err404() {
  return (
      <>
        <div id={"notfound-board"}>
          <div>
            <div className={"pure-u-1"}>
              <div className={"pure-menu-heading notfound-error-code"}>
                <h1>4<span>0</span>4</h1>
              </div>
            </div>
            <div className={"pure-u-1"}>
              <div className={"pure-u-1 notfound-error-description"}>
                <p>The page you are looking for might have been removed had its name changed or is temporarily
                  unavailable.</p>
              </div>
            </div>
            <div className={"pure-u-1 notfound-homepage-button-container"}>
              <a href='/'>home page</a>
            </div>
          </div>
        </div>
        <Footer/>
      </>
  )
}