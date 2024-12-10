import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sandbox01',
      name: 'sandbox01',
      component: () => import('../../views/sandbox01/Sandbox01.vue'),
    },
  ],
})

export default router
