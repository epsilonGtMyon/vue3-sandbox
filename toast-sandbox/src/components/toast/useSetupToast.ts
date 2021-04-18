import { provide, readonly, ref } from "vue";
import { ToastPublisher, toastPublisherKey } from "./ToastPublisher";
import { ToastProp } from "./type/ToastProp";

function useSetupToast() {
  const toasts = ref<ToastProp[]>([]);

  const toastPublisher = new ToastPublisher(toasts);
  provide(toastPublisherKey, toastPublisher);
  
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
