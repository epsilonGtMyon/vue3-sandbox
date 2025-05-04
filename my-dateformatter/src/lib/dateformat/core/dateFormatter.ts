interface DateFormatter {
  format(date: Date): string
  format(date: Date | null | undefined): string | null | undefined
}

export type { DateFormatter }
