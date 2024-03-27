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

import './header.css'

import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {GITHUB, CONTACT_EMAIL} from "../assets/js/global.jsx";

function Menu() {
  return (
      <nav id='header-menu'>
        <ul className={'roboto-regular'}>
          {
            window.location.pathname === '/'
                ? <></>
                : <li>
                  <Link to={'/'}>
                    <ion-icon name="home-sharp"></ion-icon>
                    Home
                  </Link>
                </li>
          }
          <li>
            <Link to={GITHUB}>
              <ion-icon name="logo-github"></ion-icon>
              Github
            </Link>
          </li>
          <li>
            <Link to={'mailto://' + CONTACT_EMAIL}>
              <ion-icon name="mail-sharp"></ion-icon>
              Contact
            </Link>
          </li>
          <li>
            <Link to={'/services'}>
              <ion-icon name="file-tray-stacked-sharp"></ion-icon>
              Services
            </Link>
          </li>
          <li>
            <Link to={'/health'}>
              <ion-icon name="checkmark-done-circle-sharp"></ion-icon>
              Health
            </Link>
          </li>
        </ul>
      </nav>
  )
}

function DesktopHeader() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {

    const handleScroll = () => setIsAtTop(window.scrollY === 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
      <div className={'desktop-menu' + (isAtTop ? '' : ' black')}>
        <Menu/>
      </div>
  )
}

function MobileDeader() {
  return (
      <>
        <label className={'header-hamburger-menu'}>
          <input type='checkbox'/>
        </label>
        <aside className='header-sidebar'>
          <Menu/>
        </aside>
      </>
  )
}

export default function Header() {
  const isDesktop = window.innerWidth >= 1280;

  return (
      <header id={isDesktop ? 'desktop' : 'mobile'}>
        {isDesktop ? <DesktopHeader/> : <MobileDeader/>}
      </header>
  )
}