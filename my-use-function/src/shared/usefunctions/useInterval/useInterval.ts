import { onBeforeUnmount } from "vue";

/**
 * 自動廃棄付きタイマーユーティリティ
 * @returns
 */
function useInterval() {
  const ids = new Set<number>();

  const setMyInterval = (handler: TimerHandler, timeout?: number): number => {
    const id = setInterval(handler, timeout);
    ids.add(id);
    return id;
  };

  const clearMyInterval = (id: number) => {
    if (ids.has(id)) {
      clearInterval(id);
      ids.delete(id);
    }
  };

  onBeforeUnmount(() => {
    ids.forEach((id) => {
      clearMyInterval(id);
    });
  });

  return {
    setMyInterval,
    clearMyInterval,
  };
}

export { useInterval };
