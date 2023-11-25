import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sandbox01',
      name: 'sandbox01',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/sandbox01/Sandbox01.vue')
    },
    {
      path: '/errorpage',
      name: 'errorpage',
      component: () => import('../views/errorpage/ErrorPage.vue')
    }
  ]
})

export default router
