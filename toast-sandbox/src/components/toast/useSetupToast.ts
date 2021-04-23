import { provide, readonly, ref } from "vue";
import { ToastPublisher, toastPublisherKey } from "./ToastPublisher";
import { ToastParam } from "./type/ToastParam";

function useSetupToast() {
  /**
   * 現在表示中のtoastの状態
   */
  const toasts = ref<ToastParam[]>([]);

  const toastPublisher = new ToastPublisher(toasts);
  provide(toastPublisherKey, toastPublisher);

  /**
   * idを指定してtoastを削除する。
   * @param id 
   */
  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter((x) => x.id !== id);
  };

  return {
    //触られたくないので readonlyにしておく
    toasts: readonly(toasts),
    removeToast,
  };
}

export { useSetupToast };
