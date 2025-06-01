import type { MyValidationErrorMessage } from '@/common/validation/type'
import { provide, type Ref } from 'vue'

type MyComponentValidation = {
  reset: () => void
  execute: () => void
  errors: Ref<MyValidationErrorMessage[]>
}

class MyValidationController {
  private validations: Map<string, MyComponentValidation>

  constructor() {
    this.validations = new Map()
  }

  /**
   * バリデーションの実行
   * @param id コンポーネントを一意に識別するためのID
   * @param validation バリデーション
   */
  put(id: string, validation: MyComponentValidation) {
    this.validations.set(id, validation)
  }

  /**
   * バリデーションの削除
   * @param id コンポーネントを一意に識別するためのID
   */
  remove(id: string) {
    this.validations.delete(id)
  }

  /**
   * バリデーションの結果のリセット
   */
  reset() {
    for (const [_id, validation] of this.validations.entries()) {
      validation.reset()
    }
  }

  /**
   * 配下のバリデーションを実行
   * @returns 検証結果
   */
  validate() {
    let isError = false
    for (const [_id, validation] of this.validations.entries()) {
      validation.execute()

      if (!isError) {
        isError = validation.errors.value.length > 0
      }
    }

    return isError
  }
}

function useMyValidationController() {
  const constroller = new MyValidationController()

  // provideすることで、useを呼んだコンポーネント配下のバリデーションを制御する。
  provide('MyValidationController', constroller)

  return constroller
}

export { useMyValidationController, MyValidationController }
