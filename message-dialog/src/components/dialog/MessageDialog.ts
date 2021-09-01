import { DialogHandle, DialogShowParam } from "./DialogTypes";

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
    param: Omit<DialogShowParam, "actionButtonHandler">
  ): Promise<number> {
    return new Promise<number>((resolve) => {
      if (this.handle == undefined) {
        throw new Error("handle is null or undefined");
      }

      const showParam: DialogShowParam = {
        ...param,
        actionButtonHandler: resolve,
      };
      this.handle.show(showParam);
    });
  }

  /**
   * 情報ダイアログを表示
   * @param message メッセージ
   * @returns
   */
  public info(message: string): Promise<unknown> {
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
    });
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
  public error(message: string): Promise<unknown> {
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
    });
  }

  //ここの作りこみが甘いね..
  /**
   * もし開いてたら閉じる
   * @returns
   */
  public closeIfVisible(): void {
    if (this.handle == undefined) {
      return;
    }
    this.handle.close();
  }
}

export { MessageDialog };
