import { ToastPosition } from "./ToastPosition";

export type ToastProp = {
  id: string;
  type: "primary" | "success" | "warning" | "danger";
  message: string;
  position: ToastPosition;
  timeoutMills: number;
};
