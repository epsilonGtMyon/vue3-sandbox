export type ToastProp = {
  id: string;
  type: "primary" | "success" | "warning" | "danger";
  message: string;
  timeoutMills: number;
};
