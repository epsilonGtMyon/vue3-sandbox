import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/inputUser',
      name: 'inputUser',
      component: () => import('../pages/inputUser/InputUser.vue'),
    },
    {
      path: '/viewUser',
      name: 'viewUser',
      component: () => import('../pages/viewUser/ViewUser.vue'),
    },
  ],
})

export default router
