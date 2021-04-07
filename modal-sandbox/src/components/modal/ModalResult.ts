/**
 * モーダルの結果
 */
class ModalResult<T> {
  constructor(
    public readonly destroyed: boolean,
    public readonly canceled: boolean,
    public readonly result: T | null
  ) {}

  public isCompleted() {
    if (this.destroyed || this.canceled) {
      return false
    }
    return true
  }

  public isNotCompleted() {
    return !this.isCompleted()
  }

  public completeResult() {
    if (this.isCompleted()) {
      return this.result!
    }
    throw new Error('not complete')
  }

  //------------------
  //factory methods

  /**
   * 画面遷移などによりモーダルが廃棄されたことを表す結果を返す
   * @returns 
   */
  public static destroyedResult() {
    return new ModalResult<null>(true, false, null)
  }

  /**
   * キャンセルされた結果を返す
   * @returns 
   */
  public static canceledResult() {
    return new ModalResult<null>(false, true, null)
  }

  /**
   * 正常終了の結果を返す
   * @param result 結果
   * @returns 
   */
  public static completeResult<T>(result: T) {
    return new ModalResult<T>(false, false, result)
  }
}

export { ModalResult }
