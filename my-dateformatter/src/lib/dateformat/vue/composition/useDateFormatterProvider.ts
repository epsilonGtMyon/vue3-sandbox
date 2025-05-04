import { inject } from 'vue'
import type { DateFormatterProvider } from '../../core/dateFormatterProvider'
import { dateFormatterProviderKey } from './dateFormatterProviderKey'

/**
 * 日付フォーマッターのプロバイダを提供するコンポジション関数
 *
 *
 * @returns 日付フォーマッターのプロバイダー
 */
function useDateFormatterProvider(): DateFormatterProvider {
  const provider = inject(dateFormatterProviderKey)
  if (provider == null) {
    throw new Error('DateFormatterProvider not found')
  }
  return provider
}

export { useDateFormatterProvider }
