import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/global.css'
import {HomePage} from "./template/homepage/homepage.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <HomePage/>
    </React.StrictMode>
)