import { InjectionKey, Ref } from 'vue'

//unknownはいけてないな...
type MessageDialogKeyType = Ref<unknown>

const messageDialogKey: InjectionKey<MessageDialogKeyType> = Symbol()

export { MessageDialogKeyType, messageDialogKey }
