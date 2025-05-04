<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useDateFormatterProvider } from '../composition/useDateFormatterProvider'

const props = defineProps({
  /**
   * @description 日付を指定します。
   * @type {Date}
   */
  date: {
    type: Object as PropType<Date>,
  },
  /**
   * @description 日付のフォーマットを指定します。
   * @type {string}
   * @default 'YYYY-MM-DD'
   */
  format: {
    type: String,
    required: true,
    default: 'YYYY-MM-DD',
  },
})

const dateFormatterProvider = useDateFormatterProvider()

// computedが効くのでパフォーマンスはよさそう
const formattedDate = computed(() => {
  return dateFormatterProvider.get(props.format).format(props.date)
})
</script>

<template>
  <slot :formattedDate>
    {{ formattedDate }}
  </slot>
</template>
