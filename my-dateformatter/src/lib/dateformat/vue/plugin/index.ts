import type { App, ObjectPlugin } from 'vue'
import { dateFormatterProviderKey } from '../composition/dateFormatterProviderKey'
import { DateFormatterProviderImpl } from '../../core/impl/dateFormatterProviderImpl'

// グローバルにプロパティを追加するときはこういう風にするらしい
declare module 'vue' {
  interface ComponentCustomProperties {
    /**
     * 日付フォーマット
     *
     * @param date 日付
     * @param format フォーマット
     * @returns フォーマット済みの文字列
     */
    $mydf: (date: Date | null | undefined, format: string) => string
  }
}

const myDateFormater: ObjectPlugin = {
  install(app: App, ...options: unknown[]): void {
    const dateFormatterProvider = new DateFormatterProviderImpl()
    app.provide(dateFormatterProviderKey, dateFormatterProvider)

    // レンダリングの都度実行されるがパフォーマンスはどうなんだろうか
    app.config.globalProperties.$mydf = (date: Date | null | undefined, format: string): string => {
      if (date == null) {
        return ''
      }
      return dateFormatterProvider.get(format).format(date)
    }
  },
}

export { myDateFormater }
