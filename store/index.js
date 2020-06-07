// store/index.js
import Vuex from 'vuex'
import firebase, {auth, GoogleProvider} from '~/plugins/fireinit.js'

const store = () => new Vuex.Store({
    state: {
        user: '',
    },
    mutations: {
        setUser(state, data) {
            state.user = data;
        },
    },
    getters: {
        getUser: (state, getters) => {
            return state.user
        }
    },
    actions: {
        nuxtServerInit(vueContext, serverContext) {
            if(serverContext.req.session.sample) {
                vueContext.commit('sample/setData', serverContext.req.session.sample)
            }
        },
        signInWithGoogle({commit}){
            return new Promise((resolve, reject) => {
                auth.signInWithPopup(GoogleProvider)
                resolve()
            })
        },
        checkUserStatus({ commit, state }) {
            return new Promise((resolve, reject) => {
              firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                  commit('setUser', user);
                  resolve(user);
                } else {
                  reject('User is not logged in.');
                }
              });
            });
        },
        signOut({commit}){
            auth.signOut().then(() => {
                commit('setUser', null)
            }).catch(error => console.error(error))
        }
    }
})

export default store