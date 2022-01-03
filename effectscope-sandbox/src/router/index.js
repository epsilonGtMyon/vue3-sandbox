import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home/Home.vue";
import Sandbox01 from "../views/sandbox01/Sandbox01.vue";
import Sandbox02 from "../views/sandbox02/Sandbox02.vue";

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/sandbox01",
    name: "sandbox01",
    component: Sandbox01,
  },
  {
    path: "/sandbox02",
    name: "sandbox02",
    component: Sandbox02,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export { router };
