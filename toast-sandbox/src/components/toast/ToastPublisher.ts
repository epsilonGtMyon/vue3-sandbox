import { InjectionKey, Ref } from "vue";
import { ToastProp } from "./type/ToastProp";

class ToastPublisher {
  private id = -1;
  constructor(private toasts: Ref<ToastProp[]>) {}

  public primary(message: string, position?: ToastProp["position"]): void {
    this.publish({
      type: "primary",
      message,
      position,
      timeoutMills: 1000,
    });
  }

  public warning(message: string, position?: ToastProp["position"]): void {
    this.publish({
      type: "warning",
      message,
      position,
      timeoutMills: 5000,
    });
  }

  public danger(message: string, position?: ToastProp["position"]): void {
    this.publish({
      type: "danger",
      message,
      position,
      timeoutMills: -1,
    });
  }

  public publish(param: Partial<ToastProp>): void {
    this.id++;
    this.toasts.value.push({
      id: String(this.id),
      type: param.type != null ? param.type : "primary",
      message: param.message || "",
      position: param.position != null ? param.position : "is-top-right",
      timeoutMills: param.timeoutMills || 3000,
    });
  }

  public clear(): void {
    this.toasts.value = [];
  }
}

const toastPublisherKey: InjectionKey<ToastPublisher> = Symbol(
  "ToastPublisher"
);

export { ToastPublisher, toastPublisherKey };
