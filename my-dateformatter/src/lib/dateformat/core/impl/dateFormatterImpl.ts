import type { DateFormatter } from '../dateFormatter'

class DateFormatterImpl implements DateFormatter {
  datePartHandlers: ((date: Date) => string)[] = []

  constructor(datePartHandlers: ((date: Date) => string)[]) {
    this.datePartHandlers = datePartHandlers
  }

  format(date: Date): string
  format(date: Date | null | undefined): string | null | undefined {
    if (date == null) {
      return date
    }
    return this.datePartHandlers.map((handler) => handler(date)).join('')
  }
}

export { DateFormatterImpl }
