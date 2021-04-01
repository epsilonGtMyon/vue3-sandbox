type MessageDialogType = 'primary' | 'black' | 'warning' | 'danger'

interface MessageDialogAction {
  text: string
  buttonType?: MessageDialogType
}

interface MessageDialogParam {
  messageType: MessageDialogType
  title: string
  body: string
  actions: MessageDialogAction[]
  resolve: (buttonIndex: number) => void
}

export { MessageDialogType, MessageDialogAction, MessageDialogParam }
