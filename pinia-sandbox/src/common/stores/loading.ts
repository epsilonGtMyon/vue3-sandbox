import { ref, computed, readonly } from "vue";
import { defineStore } from "pinia";

/**
 * ローディング用の状態
 * 
 * showと同じ回数だけhideをすると消える
 */
const useLoadingStore = defineStore("loading", () => {
  // setup関数の形式で書くことができる

  const loadingCounter = ref(0);

  /**
   * 表示状態
   */
  const isShown = computed(() => loadingCounter.value > 0);

  /**
   * ローディングを表示します。
   */
  function show() {
    loadingCounter.value++;
  }

  /**
   * ローディングを隠します。
   */
  function hide() {
    if (loadingCounter.value > 0) {
      loadingCounter.value--;
    }
  }

  /**
   * 表示回数によらず
   * ローディングを隠します。
   */
  function hideForce() {
    loadingCounter.value = 0;
  }

  return {
    // 変更されないようにreadonly(この方法はドキュメントには書いてないが...)
    loadingCounter: readonly(loadingCounter),
    
    show,
    hide,
    hideForce,
    isShown
  }
});

export { useLoadingStore };
