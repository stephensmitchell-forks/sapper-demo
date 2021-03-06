//import sirv from 'sirv';
//import polka from 'polka';

import express from 'express';

import compression from 'compression';
import * as sapper from '@sapper/server';

//const {PORT, NODE_ENV} = process.env;
//const dev = NODE_ENV === 'development';
const {PORT} = process.env;

//polka() // You can also use Express
const app = express();
app
  .use(
    compression({threshold: 0}),

    //sirv('static', { dev }),
    express.static('static'),
    express.json(),

    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });
