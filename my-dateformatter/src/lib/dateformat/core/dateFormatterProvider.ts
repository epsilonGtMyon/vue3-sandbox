import type { DateFormatter } from './dateFormatter'

interface DateFormatterProvider {
  get(format: string): DateFormatter
}

export type { DateFormatterProvider }
