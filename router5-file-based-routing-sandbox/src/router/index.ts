import { useAuthStore } from "@/stores/auth";
import { createRouter, createWebHistory } from "vue-router";

// 追加
import { routes, handleHotUpdate } from "vue-router/auto-routes";
// ここのroutes に対して書き換えることもできるが、childrenなども見る必要があるので注意

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 追加
if (import.meta.hot) {
  handleHotUpdate(router);
}

router.beforeEach((to, from) => {
  console.log("[global]router.beforeEach", { to, from });
});

router.beforeEach((to, _from) => {
  const auth = useAuthStore();

  if (to.meta.allowAnonymous === true) {
    if (auth.authenticated) {
      // ログイン済みユーザーがログインページにアクセスした場合は、ホームにリダイレクトする
      return "/basic";
    }
  } else {
    // 認証必要なページ
    if (!auth.authenticated) {
      // ログインしていないユーザーが認証必要なページにアクセスした場合は、ログインページにリダイレクトする

      console.warn("認証が必要なのでリダイレクトします");
      return "/auth/login";
    }
  }
});

export default router;
