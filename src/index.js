import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './header/header';
import Content from './content/content';

ReactDOM.createRoot(document.getElementById('knight-hat-gaming-home-page')).render(
  <div>
    <Header />
    <Content />
  </div>
);