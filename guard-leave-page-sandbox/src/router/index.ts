import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sandbox01",
      name: "sandbox01",
      component: () => import("../views/sandbox01/Sandbox01.vue"),
    },
    {
      path: "/sandbox02",
      name: "sandbox02",
      component: () => import("../views/sandbox02/Sandbox02.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  console.log("[global]router.beforeEach")
  if (from.name === "sandbox01") {
    if (!window.confirm("[global]移動しますか?")) {
      return false;
    }
  }
});


// グローバルとローカルのすべてのナビゲーションガードが終わって
// 今からコンポーネント解決するときに呼ばれる。
router.beforeResolve((to, from) => {
  const nextName = to.name?.toString() ?? ""
  console.log(`[global]router.beforeResolve next=${nextName}`)
  document.title = nextName
});

export default router;
