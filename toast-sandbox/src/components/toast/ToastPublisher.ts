import { InjectionKey, Ref } from "vue";
import { ToastParam } from "./type/ToastParam";
import { ToastPosition } from "./type/ToastPosition";

/**
 * トーストの発行を行う
 */
class ToastPublisher {
  private id = -1;
  constructor(private toasts: Ref<ToastParam[]>) {}

  /**
   * primaryレベルのトーストを出す
   * @param message 
   * @param position 
   */
  public primary(message: string, position?: ToastPosition): void {
    this.publish({
      type: "primary",
      message,
      position,
      timeoutMills: 3000,
    });
  }

  /**
   * warningレベルのトーストを出す
   * @param message 
   * @param position 
   */
  public warning(message: string, position?: ToastPosition): void {
    this.publish({
      type: "warning",
      message,
      position,
      timeoutMills: 10000,
    });
  }

  /**
   * dangerレベルのトーストを出す
   * @param message 
   * @param position 
   */
  public danger(message: string, position?: ToastPosition): void {
    this.publish({
      type: "danger",
      message,
      position,
      timeoutMills: -1,
    });
  }

  /**
   * toastを出す(汎用)
   * @param param 
   */
  public publish(param: Partial<ToastParam>): void {
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

/**
 * provide/inject用のキー
 */
const toastPublisherKey: InjectionKey<ToastPublisher> = Symbol(
  "ToastPublisher"
);

export { ToastPublisher, toastPublisherKey };
