import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sandbox01',
      name: 'sandbox01',
      // route level code-splitting
      // this generates a separate chunk (Sandbox01.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/sandbox01/Sandbox01.vue'),
    },
    {
      path: '/sandbox02',
      name: 'sandbox02',
      component: () => import('../views/sandbox02/Sandbox02.vue'),
    },
    {
      path: '/sandbox03',
      name: 'sandbox03',
      component: () => import('../views/sandbox03/Sandbox03.vue'),
    },
  ],
})

export default router
