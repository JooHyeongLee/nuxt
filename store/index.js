export const state = () => ({
})
  
export const mutations = {

}

export const actions = {
    nuxtServerInit(vueContext, serverContext) {
        if(serverContext.req.session.sample) {
            vueContext.commit('sample/setData', serverContext.req.session.sample)
        }
    }
}