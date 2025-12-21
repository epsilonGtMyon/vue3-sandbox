import { ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

type GuardFunction = () => boolean;

// [あればいいかも] Promise対応とか

/**
 * ページ遷移のガード判定のためのコンポジション
 * @param guardFunction ガード判定関数
 * @returns
 */
function useGuardLeavingPage(guardFunction: GuardFunction) {
  const pausedGuard = ref(false);

  onBeforeRouteLeave((to, from) => {
    if (pausedGuard.value) {
      // 判断停止中
      return;
    }

    const shouldGuard = guardFunction();
    if (!shouldGuard) {
      // ガード不要
      return;
    }

    const allowLeave = window.confirm("ページを離れていいですか?");
    if (!allowLeave) {
      // ページ遷移してはいけない
      return false;
    }
  });

  /**
   * ガード処理の一時停止
   */
  function pauseGuard() {
    pausedGuard.value = true;
  }

  /**
   * ガード処理の再開
   */
  function resumeGuard() {
    pausedGuard.value = false;
  }

  return {
    pauseGuard,
    resumeGuard,
  };
}

export { useGuardLeavingPage };
