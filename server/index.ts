import express from 'express';
import { Consola } from 'consola';
import { Nuxt, Builder } from '~/types/nuxt';
const app = express()
// Import and Set Nuxt.js options
import * as config from '../nuxt.config';

let env: string = 'development';
if(process.env.NODE_ENV === 'production') {
  env = 'production';
}

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (env === 'development') {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)
  
  // Listen the server
  app.listen(port, host)
  /* new Consola()
  new Consola().ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  }) */
}
start()
