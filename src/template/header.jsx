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

import {GITHUB} from "../assets/js/global.jsx";
import {useEffect, useState} from "react";

function Menu() {
  return (
      <nav id='header-menu'>
        <ul className={'roboto-regular'}>
          {
            window.location.pathname === '/'
                ? <></>
                : <li>
                  <a href="/">
                    <ion-icon name="home-sharp"></ion-icon>
                    Home
                  </a>
                </li>
          }
          <li>
            <a href={GITHUB}>
              <ion-icon name="logo-github"></ion-icon>
              Github
            </a>
          </li>
          <li>
            <a href="mailto://contact@knighthat.me">
              <ion-icon name="mail-sharp"></ion-icon>
              Contact
            </a>
          </li>
          <li>
            <a href='/services'>
              <ion-icon name="file-tray-stacked-sharp"></ion-icon>
              Services
            </a>
          </li>
          <li>
            <a href='/health'>
              <ion-icon name="checkmark-done-circle-sharp"></ion-icon>
              Health
            </a>
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