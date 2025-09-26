import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import MainContent from './MainContent'
import Sidebar from './sidebar/Sidebar'


createRoot(document.getElementsByTagName('main')[0]!).render(
  <StrictMode>
    <Sidebar />
    <MainContent />
  </StrictMode>
)