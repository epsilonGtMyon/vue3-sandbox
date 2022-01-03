import { ref, readonly, onScopeDispose } from "vue";

/**
 * windowのリサイズを監視し、ウィンドウサイズを返すuse
 * 
 * これ自体は普通のuseと大差ないのがポイント
 */
function useWindowSize() {
  const width = ref(0);
  const height = ref(0);

  const onResize = (ev) => {
    const t = ev.target;
    width.value = t.innerWidth;
    height.value = t.innerHeight;

    console.log(`resize(${width.value}, ${height.value})`);
  };
  
  // 初期値
  width.value = window.innerWidth;
  height.value = window.innerHeight;

  // リスナー登録
  window.addEventListener("resize", onResize);

  // 解除はonScopeDispose で行う
  onScopeDispose(() => {
    window.removeEventListener("resize", onResize);
  });

  return {
    width: readonly(width),
    height: readonly(height),
  };
}


export {
  useWindowSize
}