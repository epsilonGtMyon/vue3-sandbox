import { computed, inject, provide, readonly, ref, type InjectionKey, type Ref } from 'vue'
import { type TabItemType } from './tabTypes'

type TabItemSupport = {
  addTab: (tab: TabItemType) => void
  removeTab: (tabId: TabItemType['tabId']) => void
  activeTabId: Readonly<Ref<string>>
}

const injectionkey: InjectionKey<TabItemSupport> = Symbol('TabItemSupport')

function useTab() {
  const tabs = ref<TabItemType[]>([])
  const internalActiveTabId = ref('')

  const sortedTabs = computed(() =>
    [...tabs.value].sort((a, b) => Number(a.order) - Number(b.order)),
  )

  /**
   * タブの追加
   * @param tab タブ
   */
  function addTab(tab: TabItemType) {
    tabs.value.push(tab)
    if (internalActiveTabId.value === '') {
      activateTab(tab.tabId)
    }
  }

  /**
   * タブの削除
   * @param tabId 削除するタブのID
   */
  function removeTab(tabId: TabItemType['tabId']) {
    tabs.value = tabs.value.filter((t) => t.tabId !== tabId)
  }

  /**
   * タブの有効化
   * @param tabId 有効化対象のタブID
   */
  function activateTab(tabId: TabItemType['tabId']) {
    if (tabs.value.some((t) => t.tabId === tabId)) {
      internalActiveTabId.value = tabId
    } else {
      console.warn(`tabId ${tabId} not found.`)
    }
  }

  provide(injectionkey, {
    addTab,
    removeTab,
    activeTabId: readonly(internalActiveTabId),
  })

  return {
    tabs,
    sortedTabs,
    activeTabId: readonly(internalActiveTabId),
    activateTab,
    addTab,
    removeTab,
  }
}

function useTabItem() {
  const tabItemSupport = inject(injectionkey)
  if (tabItemSupport == null) {
    throw new Error(`${String(injectionkey)} not found`)
  }

  return {
    ...tabItemSupport,
  }
}

export { useTab, useTabItem }
