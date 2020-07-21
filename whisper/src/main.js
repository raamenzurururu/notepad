import Vue from 'vue'
import App from './App.vue'
import router from './router'


import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)


// ここから追加
import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyB-c11iYJhEvtYPEE10Z-dyW51wGRDwu1Y",
  authDomain: "bassgoboom-52b93.firebaseapp.com",
  databaseURL: "https://bassgoboom-52b93.firebaseio.com",
  projectId: "bassgoboom-52b93",
  storageBucket: "bassgoboom-52b93.appspot.com",
  messagingSenderId: "649591462566",
  appId: "1:649591462566:web:70373ae45ca799a9397267",
  measurementId: "G-GTRCM515Q7"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
