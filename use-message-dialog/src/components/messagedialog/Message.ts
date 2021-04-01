import { Ref } from "vue";
import {
  MessageDialogType,
  MessageDialogAction,
  MessageDialogParam,
} from "./types/MessageDialogTypes";

type MessageDialogInstance = {
  show(param: MessageDialogParam): void;
  clicked(buttonIndex: number): void;
};

/**
 * メッセージ表示をするためのもの
 */
class Message {
  constructor(private messageDialog: Ref<MessageDialogInstance>) {}

  public error(message: string) {
    return this.showInternal("danger", "警告", message, [{ text: "OK" }]).then(
      (idx) => idx >= 0
    );
  }

  public confirm(message: string) {
    return this.showInternal("primary", "確認", message, [
      { text: "Yes" },
      { text: "No" },
    ]).then((idx) => idx === 0);
  }

  //これでいいものか..
  public destroy() {
    this.messageDialog.value.clicked(-1);
  }

  private showInternal(
    messageType: MessageDialogType,
    title: string,
    body: string,
    actions: MessageDialogAction[]
  ): Promise<number> {
    return new Promise<number>((resolve) => {
      const param: MessageDialogParam = {
        messageType,
        title,
        body,
        actions,
        resolve,
      };
      this.messageDialog.value.show(param);
    });
  }
}

export { Message };
