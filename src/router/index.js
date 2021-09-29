import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
 {
  path:'/services',
  name:'services',
  component: () => import(/* webpackChunkName: "about" */ '../views/Services.vue')
 },
 {
   path: '/fotos/:id',
   name: 'fotos',
   component: () => import(/* webpackChunkName: "about" */ '../views/Fotos.vue')
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
