<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, useSlots, type VNode } from 'vue'
import type { TabItemType } from './tabTypes'
import { useTabItem } from './useTab'

type Props = Pick<TabItemType, 'tabId' | 'label' | 'order'>

const props = withDefaults(defineProps<Props>(), {
  label: '',
})

const slots = defineSlots<{
  default: (props: any) => VNode[]
  tabTitle?: (props: any) => VNode[]
}>()

const tabItemSupport = useTabItem()

const visibleTabItem = computed(() => tabItemSupport.activeTabId.value === props.tabId)

onMounted(() => {
  tabItemSupport.addTab({
    tabId: props.tabId,
    label: props.label,
    order: props.order,
    tabTitleSlot: slots.tabTitle,
  })
})

onBeforeUnmount(() => {
  tabItemSupport.removeTab(props.tabId)
})
</script>

<template>
  <template v-if="visibleTabItem">
    <slot></slot>
  </template>
</template>
