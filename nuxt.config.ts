import fs from 'fs';

// api 목록 추출
let routes: Array<any> = [];
fs.readdir('./server/api/', async(err, apis)=>{
  for(let i=0; i<apis.length; i++) {
    let api = await import(`./server/api/${apis[i]}`);
    await routes.push({path: '/api', handler: api.handler})
  }
})

module.exports = {
  // api 로드
  serverMiddleware: routes,
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // 모듈 설정
    baseURL: 'http://localhost:3000'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config: any, ctx: any) {
    }
  }
}
