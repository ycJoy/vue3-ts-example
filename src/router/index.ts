import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/tree',
    name: 'Tree',
    component: () => import(/* webpackChunkName: "Tree" */ '../views/Tree/index.vue')
  },
  {
    path: '/todo',
    name: 'TodoMvc',
    component: () => import(/* webpackChunkName: "TodoMVC" */ '../views/TodoMvc/index.vue')
  },
  {
    path: '/vantTest',
    name: 'VantTest',
    component: () => import(/* webpackChunkName: "TodoMVC" */ '../views/VantTest/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
