/**
 * 日付フォーマット文字列
 */
class DateFormatSource {
  /**
   * フォーマット文字列
   */
  source: string

  /**
   * 現在位置
   */
  currentPosition: number

  constructor(source: string) {
    this.source = source
    this.currentPosition = -1
  }

  /**
   * 現在位置を進め、次の文字列を返す
   *
   * @returns 次の文字列
   */
  nextChar(): string | undefined {
    this.currentPosition++
    return this.source[this.currentPosition]
  }

  /**
   * 次の文字列を返します。現在位置は進めません。
   *
   * @returns 次の文字列
   */
  peekNext(): string | undefined {
    return this.source[this.currentPosition + 1]
  }
}

export { DateFormatSource }
