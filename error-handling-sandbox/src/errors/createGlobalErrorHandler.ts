import type { AppConfig } from "vue";
import type { Router } from "vue-router";
import { ApplicationError } from "./ApplicationError";

const createGlobalErrorHandler = (router: Router) => {
  // エラーハンドラーの中ではuseRouterとかが使えないので
  // 引数で渡すようにする。
  // いろいろやりたくなるが、エラーハンドラなので最小限にしておいたほうがいいかな...

  const handleGlobalError: AppConfig["errorHandler"] = (
    err,
    instance,
    info
  ) => {
    console.log("==handleGlobalError==");
    console.log("err", err);
    console.log("instance", instance);
    console.log("info", info);

    if (err instanceof Error) {
      if (err instanceof ApplicationError) {
        console.log("ApplicationError です。");
        if (err.handleGlobal) {
          console.log("handled");
          // 何も返さなければハンドル完了
          router.push("/errorpage");
          return;
        }
      }

      // 再スローしても 無限ループにはならない
      // window.onerrorとかでハンドリングしてたらそこにたどり着く
      throw err;
    }
  };

  return handleGlobalError;
};

export { createGlobalErrorHandler };
