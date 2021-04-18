export type ToastProp = {
  id: string;
  type: "primary" | "success" | "warning" | "danger";
  message: string;
  position:
    | "is-top-right"
    | "is-top-left"
    | "is-top-center"
    | "is-bottom-right"
    | "is-bottom-left"
    | "is-bottom-center";
  timeoutMills: number;
};
