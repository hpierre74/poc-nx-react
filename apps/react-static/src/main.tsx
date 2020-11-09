import React from 'react';
import { hydrate } from 'react-dom';

// import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

hydrate(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);
