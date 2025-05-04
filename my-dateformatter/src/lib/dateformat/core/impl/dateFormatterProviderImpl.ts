import { createDatePartHandler } from '../createDatePartHandler'
import { DateFormatLexer } from '../dateFormatLexer'
import type { DateFormatter } from '../dateFormatter'
import type { DateFormatterProvider } from '../dateFormatterProvider'
import { DateFormatTokenType } from '../dateFormatTokenType'
import { DateFormatterImpl } from './dateFormatterImpl'

class DateFormatterProviderImpl implements DateFormatterProvider {
  cache: Map<string, DateFormatter> = new Map()

  get(format: string): DateFormatter {
    let formatter = this.cache.get(format)
    if (formatter == null) {
      formatter = this.createDateFormatter(format)
      this.cache.set(format, formatter)
    }

    return formatter
  }

  private createDateFormatter(format: string): DateFormatter {
    const lexer = new DateFormatLexer(format)

    const datePartHandlers = []
    while (true) {
      // フォーマット文字列を解析して各パート毎にトークンを生成
      const token = lexer.nextToken()
      if (token.tokenType === DateFormatTokenType.END) {
        break
      }
      datePartHandlers.push(createDatePartHandler(token))
    }

    return new DateFormatterImpl(datePartHandlers)
  }
}

export { DateFormatterProviderImpl }
