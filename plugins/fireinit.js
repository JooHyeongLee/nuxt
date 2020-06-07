import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
const config = require('../config/key')

if (!firebase.apps.length){
    firebase.initializeApp({
        apiKey: config.key.apiKey,
        authDomain: config.key.authDomain,
        databaseURL: config.key.databaseURL,
        projectId: config.key.projectId,
        storageBucket: config.key.storageBucket,
        messagingSenderId: config.key.messagingSenderId,
        appId: config.key.appId,
        measurementId: ""
    })
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase