import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",

    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/sandbox01",
    name: "Sandbox01",
    component: () =>
      import(
        /* webpackChunkName: "sandbox01" */ "../views/sandbox01/Sandbox01.vue"
      ),
    props: (route) => {
      return {
        text01: route.query.text01,
        num01:
          route.query.num01 == null || route.query.num01 === ""
            ? undefined
            : Number(route.query.num01),
      };
    },
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
