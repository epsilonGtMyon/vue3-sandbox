import { onBeforeUnmount, onMounted, readonly, ref } from "@vue/runtime-core";

/**
 * マウスポインタの位置を返す関数
 * @returns 位置情報
 */
function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function mousemoveHandler(ev: MouseEvent) {
    x.value = ev.clientX;
    y.value = ev.clientY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", mousemoveHandler);
  });
  onBeforeUnmount(() => {
    window.addEventListener("mousemove", mousemoveHandler);
  });

  //変更できないようにするためにreadonlyをつけた
  return {
    x: readonly(x),
    y: readonly(y),
  };
}

export { useMousePosition };
