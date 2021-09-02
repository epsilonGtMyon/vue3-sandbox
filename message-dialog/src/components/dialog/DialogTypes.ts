/**
 * ダイアログのタイトルやボタンの種類
 */
type DialogType = "is-primary" | "is-info" | "is-danger";

/**
 * ダイアログのボタンのパターン
 */
type DialogActionButton = {
  /** ボタンのテキスト */
  text: string;
  /** ボタンの種類 */
  buttonType: DialogType;
  /** アウトライン形式か？ */
  outline?: boolean;
};

/** ダイアログのボタンをクリックしたときのハンドラ */
type DialogActionButtonHandler = (index: number) => void;
/** 中止のハンドラ(rejectする) */
type DialogAbortHandler = <T extends Error>(error: T) => void;

/** ダイアログを表示するためのパラメータ */
type DialogShowParam = {
  title: string;
  titleType: DialogType;
  message: string;
  actionButtons: DialogActionButton[];
  actionButtonHandler: DialogActionButtonHandler;
  abortHandler: DialogAbortHandler;
};

/** ダイアログの実体を操作するためのハンドル */
type DialogHandle = {
  show(param: DialogShowParam): void;
  abort<T extends Error>(error: T): void;
};

export {
  DialogType,
  DialogActionButton,
  DialogActionButtonHandler,
  DialogAbortHandler,
  DialogShowParam,
  DialogHandle,
};
