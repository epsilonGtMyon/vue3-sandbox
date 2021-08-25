import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/counter",
    name: "Counter",
    component: () =>
      import(/* webpackChunkName: "counter" */ "@/pages/counter/Counter.vue"),
  },
  {
    path: "/mouseposition",
    name: "MousePosition",
    component: () =>
      import(
        /* webpackChunkName: "mouseposition" */ "@/pages/mouseposition/MousePosition.vue"
      ),
  },
  {
    path: "/interval",
    name: "Interval",
    component: () =>
      import(
        /* webpackChunkName: "interval" */ "@/pages/interval/Interval.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
