import * as express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as path from 'path';
import * as fs from 'fs';
import { ServerStyleSheet } from 'styled-components';

import App from '../../react-static/src/app/app';

const app = express();

app.use(
  express.static(path.resolve(__dirname, '../../../dist/apps/react-static'))
);

app.get('*', (req, res) => {
  const sheet = new ServerStyleSheet();
  try {
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    const app = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  } catch (error) {
    console.error('render to string error');
  } finally {
    sheet.seal();
  }
  const indexFile = path.resolve(
    __dirname,
    '../../../dist/apps/react-static/index.html'
  );

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    res.header('Content-Type', 'text/html');
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

server.on('error', console.error);
