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
      component: () => import('../views/sandbox01/Sandbox01.vue'),
    },
    {
      path: '/sandbox02',
      name: 'sandbox02',
      component: () => import('../views/sandbox02/Sandbox02.vue'),
    },
  ],
})

export default router
