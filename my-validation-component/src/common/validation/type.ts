/**
 * バリデーション解析悔過
 */
type MyValidationParseResult = {
  /** バリデーション名 */
  validationName: string
  /** 引数 */
  args: string[]
}

/**
 * バリデーションコンテキスト
 */
type MyValidationContext = MyValidationParseResult | Record<string, any>

/**
 * バリデーションエラー内容
 */
type MyValidationErrorMessage = string

/**
 * バリデーション本体
 */
type MyValidationCore = {
  /** バリデーション関数 */
  validate: (value: any, context: MyValidationContext) => boolean
  /** バリデーションエラー時のメッセージ取得関数 */
  // TODO 多分この関数は外部に切り出したほうがいいだろうね
  getMessage: (value: any, context: MyValidationContext) => MyValidationErrorMessage
}

/**
 * バリデーター
 */
type MyValidator = {
  validate: (value: any) => MyValidationErrorMessage | null
}

export {
  type MyValidationParseResult,
  type MyValidationContext,
  type MyValidationCore,
  type MyValidationErrorMessage,
  type MyValidator,
}
