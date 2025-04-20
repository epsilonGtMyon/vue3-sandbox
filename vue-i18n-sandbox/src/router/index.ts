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
    {
      path: '/sandbox04',
      name: 'sandbox04',
      component: () => import('../views/sandbox04/Sandbox04.vue'),
    },
    {
      path: '/sandbox05',
      name: 'sandbox05',
      component: () => import('../views/sandbox05/Sandbox05.vue'),
    },
  ],
})

export default router
