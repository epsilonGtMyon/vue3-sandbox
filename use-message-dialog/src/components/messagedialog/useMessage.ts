import { inject, onBeforeUnmount } from 'vue'
import { messageDialogKey, MessageDialogKeyType } from './types/MessageDialogKeyTypes'
import { Message } from './Message'

function useMessage() {
  //ここらへんの型がイケてない
  const dialog = inject<MessageDialogKeyType>(messageDialogKey)!
  const message = new Message(dialog as any)

  onBeforeUnmount(() => {
    message.destroy()
  })

  return message
}

export { useMessage }
