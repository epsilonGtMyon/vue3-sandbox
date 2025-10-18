import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/menu/MenuView.vue'),
    },
    {
      path: '/tab',
      name: 'tab',
      component: () => import('../views/tab/TabView.vue'),
    },
  ],
})

export default router
