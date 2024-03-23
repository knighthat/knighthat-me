import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/global.css'
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