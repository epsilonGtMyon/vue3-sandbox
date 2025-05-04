import type { InjectionKey } from 'vue'
import type { DateFormatterProvider } from '../../core/dateFormatterProvider'

/**
 * provide/inject用のキー
 */
const dateFormatterProviderKey = Symbol(
  'DateFormatterProvider',
) as InjectionKey<DateFormatterProvider>

export { dateFormatterProviderKey }
