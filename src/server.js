import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';

import template from './app/bootstrap/html.template';

import Layout from './app/components/layout';
import HomePage from './app/pages/home';

import manifest from './manifest.json';

const PORT = process.env.PORT || 5075;
const server = express();
const assets = {
  css: process.env.NODE_ENV === 'production' ? '/' + manifest['main.css'] : 'http://localhost:5062/build/bundle.css',
  js: process.env.NODE_ENV === 'production' ? '/' + manifest['main.js'] : 'http://localhost:5062/build/bundle.js',
}

server.use(express.static(path.join(__dirname, '../build')));
server.get('/', (request,response) => {
  const html = renderToString(
    <Layout>
      <HomePage/>
    </Layout>
  );

  response.send(template({
    title: 'Квест - перфоманс "Хостел"',
    body: html,
    cssPath: assets.css,
    jsPath: assets.js
  }));
});

server.listen(PORT, () => {
  console.log(`Server started on:${PORT}`);
});
