/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';


import App from '@';

const server = express();

server
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


const app = express();

app.get('*', (req, res) => {
  const htmlString = "<p>foo</p>"
  res.send(htmlString);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
