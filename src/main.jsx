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

import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/global.css'
import './assets/css/fonts.css'

import Err404 from "./template/404/404.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./template/homepage/homepage.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='*' element={<Err404/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
)