import { DialogHandle, DialogShowParam } from "./DialogTypes";
import { MessageDialogAbortError } from "./MessageDialogAbortError";

/**
 * メッセージダイアログを操作するクラス
 */
class MessageDialog {
  /**
   * ダイアログの実体
   */
  private handle?: DialogHandle;

  /**
   * 実体を置換します。
   * @param handle ダイアログの実体ハンドル
   */
  public replaceHandle(handle: DialogHandle): void {
    this.handle = handle;
  }

  /**
   * ダイアログを表示します。
   * 内部から呼び出すための共通メソッド
   * @param param パラメータ
   * @returns
   */
  private show(
    param: Omit<DialogShowParam, "actionButtonHandler" | "abortHandler">
  ): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      if (this.handle == undefined) {
        throw new Error("handle is null or undefined");
      }

      const showParam: DialogShowParam = {
        ...param,
        actionButtonHandler: resolve,
        abortHandler: reject,
      };
      this.handle.show(showParam);
    });
  }

  /**
   * 情報ダイアログを表示
   * @param message メッセージ
   * @returns
   */
  public info(message: string): Promise<boolean> {
    return this.show({
      title: "情報",
      titleType: "is-primary",
      message,
      actionButtons: [
        {
          text: "OK",
          buttonType: "is-primary",
        },
      ],
    }).then((x) => x === 0);
  }

  /**
   * 確認ダイアログを表示
   * @param message メッセージ
   * @returns
   */
  public confirm(message: string): Promise<boolean> {
    return this.show({
      title: "確認",
      titleType: "is-info",
      message,
      actionButtons: [
        {
          text: "OK",
          buttonType: "is-info",
        },
        {
          text: "Cancel",
          buttonType: "is-info",
          outline: true,
        },
      ],
    }).then((x) => x === 0);
  }

  /**
   * エラーダイアログを表示
   * @param message メッセージ
   * @returns
   */
  public error(message: string): Promise<boolean> {
    return this.show({
      title: "エラー",
      titleType: "is-danger",
      message,
      actionButtons: [
        {
          text: "OK",
          buttonType: "is-danger",
        },
      ],
    }).then((x) => x === 0);
  }

  /**
   * もし開いてたらアボートする
   * @returns
   */
  public abortIfVisible(): void {
    if (this.handle == undefined) {
      return;
    }
    this.handle.abort(new MessageDialogAbortError("DialogAbort"));
  }
}

export { MessageDialog };
