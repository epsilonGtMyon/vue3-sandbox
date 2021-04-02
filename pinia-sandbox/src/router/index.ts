import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sandbox01",
    name: "Sandbox01",
    component: () =>
      import(
        /* webpackChunkName: "sandbox01" */ "../views/sandbox01/Sandbox01.vue"
      ),
  },
  {
    path: "/sandbox02",
    name: "Sandbox02",
    component: () =>
      import(
        /* webpackChunkName: "sandbox02" */ "../views/sandbox02/Sandbox02.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
