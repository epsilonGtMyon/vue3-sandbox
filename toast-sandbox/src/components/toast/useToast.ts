import { inject } from "@vue/runtime-core";
import { toastPublisherKey } from "./ToastPublisher";

function useToast() {
  const toastPublisher = inject(toastPublisherKey);
  if (toastPublisher == null) {
    throw new Error("toastPublisher is null");
  }
  return toastPublisher;
}

export { useToast };
