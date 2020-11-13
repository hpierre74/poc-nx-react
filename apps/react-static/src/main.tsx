import React from 'react';
import { render, hydrate } from 'react-dom';

// import { BrowserRouter } from 'react-router-dom';
const renderMethod = module.hot ? render : hydrate;

import App from './app/app';

renderMethod(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);
