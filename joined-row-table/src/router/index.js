import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rendersandbox01',
      name: 'rendersandbox01',
      component: () => import('../views/rendersandbox01/RenderSandbox01.vue')
    },

    {
      path: '/sandbox01',
      name: 'sandbox01',
      component: () => import('../views/sandbox01/Sandbox01.vue')
    },
    {
      path: '/sandbox02',
      name: 'sandbox02',
      component: () => import('../views/sandbox02/Sandbox02.vue')
    },
    {
      path: '/sandbox03',
      name: 'sandbox03',
      component: () => import('../views/sandbox03/Sandbox03.vue')
    }
  ]
})

export default router
