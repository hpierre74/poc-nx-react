import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './app/app';

const server = express();

server
  .disable('x-powered-by')
  .get('/*', (req, res) => {
      const markup = renderToString(
        // <StaticRouter location={req.url} context={context}>
          <App />
        // </StaticRouter>
      );

      res.status(200).send(
      `<!doctype html>
      <html>
        <head>
        </head>
        <body>
          <div id="root">${markup}</div>
          <script>
        </script>
        </body>
      </html>
    `);
    }
  );

export default server;
