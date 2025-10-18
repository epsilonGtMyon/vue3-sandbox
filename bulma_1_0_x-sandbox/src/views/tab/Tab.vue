<script setup lang="ts">
import { onMounted, watch } from 'vue'
import type { TabItemType } from './tabTypes'
import { useTab } from './useTab'

type Props = {
  headerClass?: string | string[] | Record<string, boolean>
  bodyClass?: string | string[] | Record<string, boolean>
}
const props = defineProps<Props>()

// 外部からv-modelで連動できるようにする。実際は内部のactiveTabIdを使うが
const modelValue = defineModel<string>()

const { sortedTabs, activateTab, activeTabId } = useTab()

/**
 * タブ選択時
 *
 * @param tab 選択されたタブ
 */
const selected = (tab: TabItemType) => {
  // 内部のアクティブ状態に反映
  activateTab(tab.tabId)
  // しつつv-modelにも反映
  modelValue.value = tab.tabId
}

// v-model変更時は内部の値に同期
watch(
  () => modelValue.value,
  (newValue, _oldValue) => {
    if (newValue != null) {
      activateTab(newValue)
    }
  },
)

onMounted(() => {
  if (modelValue.value == null || modelValue.value === '') {
    // 指定がないときは内部の値をv-modelに連動
    modelValue.value = activeTabId.value
  } else {
    activateTab(modelValue.value)
  }
})
</script>

<template>
  <div class="Tab">
    <nav class="Tab-header tabs" :class="headerClass">
      <ul>
        <template v-for="tab in sortedTabs" :key="tab.tabId">
          <li :class="{ 'is-active': activeTabId === tab.tabId }">
            <a @click="selected(tab)">
              <template v-if="tab.tabTitleSlot">
                <component :is="tab.tabTitleSlot"></component>
              </template>
              <template v-else>
                {{ tab.label }}
              </template>
            </a>
          </li>
        </template>
      </ul>
    </nav>
    <section class="Tab-body" :class="bodyClass">
      <slot></slot>
    </section>
  </div>
</template>

<style lang="css" scoped>
.Tab-header {
  margin-bottom: 0;
}
</style>
