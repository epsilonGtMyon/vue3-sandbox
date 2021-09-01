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

/** ダイアログを表示するためのパラメータ */
type DialogShowParam = {
  title: string;
  titleType: DialogType;
  message: string;
  actionButtons: DialogActionButton[];
  actionButtonHandler: DialogActionButtonHandler;
};

/** ダイアログの実体を操作するためのハンドル */
type DialogHandle = {
  show(param: DialogShowParam): void;
  close(): void;
};

export {
  DialogType,
  DialogActionButton,
  DialogActionButtonHandler,
  DialogShowParam,
  DialogHandle,
};
