import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "../store";
import Home from "../views/home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",

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
  {
    path: "/sandbox02a",
    name: "Sandbox02A",
    component: () =>
      import(
        /* webpackChunkName: "sandbox02a" */ "../views/sandbox02/Sandbox02A.vue"
      ),
  },
  {
    path: "/sandbox02b",
    name: "Sandbox02B",
    component: () =>
      import(
        /* webpackChunkName: "sandbox02b" */ "../views/sandbox02/Sandbox02B.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  //たとえばこんなこととか
  if (to.meta.requiresAuth === true) {
    return store.state.logined;
  }
});

export default router;
