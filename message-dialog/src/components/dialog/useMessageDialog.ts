import { inject, onBeforeUnmount } from "vue";
import { MessageDialog } from "./MessageDialog";
import { messageDialogKey } from "./messageDialogKey";

/**
 * メッセージダイアログを使用します。
 * @param closeWhenUnmount 使用するコンポーネントが廃棄されるときにダイアログを閉じるか？
 * @returns メッセージダイアログ
 */
function useMessageDialog(closeWhenUnmount = true): MessageDialog {
  const messageDialog = inject(messageDialogKey);
  if (messageDialog == undefined) {
    throw new Error(`messageDialog is not found`);
  }

  if (closeWhenUnmount) {
    //ダイアログが表示されているコンポーネントが廃棄されるときにダイアログが表示されていれば、ダイアログも閉じる
    onBeforeUnmount(() => {
      messageDialog.closeIfVisible();
    });
  }

  return messageDialog;
}

export { useMessageDialog };
