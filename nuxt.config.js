
module.exports = {
    router: {
        middleware: ['sample']
    },
    mode: 'universal',
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
        '~/plugins/sample',
        "~/plugins/fireinit.js"
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/auth'
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    },
    auth: {
      strategies: {
        local: {
          endpoints: {
            login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
            logout: { url: '/api/auth/logout', method: 'post' },
            user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
          },
          // tokenRequired: true,
          // tokenType: 'bearer',
          // globalToken: true,
          // autoFetchUser: true
        },
          google: {
            client_id: '573201838098-c3vilqjopj4mj5ub1r2kctmf2a63jemc.apps.googleusercontent.com',
          },
        }
    }
}
