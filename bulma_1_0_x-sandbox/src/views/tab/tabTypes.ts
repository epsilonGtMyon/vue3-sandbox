import type { Slot } from 'vue'

type TabItemType = {
  tabId: string
  label?: string
  order: number | string
  tabTitleSlot?: Slot
}

export { type TabItemType }
