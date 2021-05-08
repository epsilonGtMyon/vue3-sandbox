import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home.vue";
import Sandbox01 from "../views/sandbox01/Sandbox01.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/sandbox01",
    name: "Sandbox01",
    component: Sandbox01,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
