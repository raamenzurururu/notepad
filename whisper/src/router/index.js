import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import User from '@/views/User.vue' 

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/user/:uid',
      name: 'user',
      component: User
    },
    
    {
      path: '/about',
      name: 'about',
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
