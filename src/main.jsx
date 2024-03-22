import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/global.css'
import {Footer} from "./template/footer.jsx";
import {HomePage} from "./template/homepage/homepage.jsx";


ReactDOM.createRoot(document.body).render(
    <React.StrictMode>
      <HomePage/>
      <Footer/>
    </React.StrictMode>
)