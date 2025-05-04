<script setup lang="ts">
import { useCurrentDate } from '@/lib/currentdate/useCurrentDate'
import { useDateFormatterProvider } from '@/lib/dateformat/vue/composition/useDateFormatterProvider'
import { computed, ref } from 'vue'

const { currentDate } = useCurrentDate()
const dateFormatterProvider = useDateFormatterProvider()

const dateFormat = ref(['yyyy/MM/dd', 'yyyy/M/d', 'yyyy/MM/dd HH:mm:ss', 'yyyy/MM/dd HH:mm:ss.SSS'])

const formattedDates = computed(() => {
  return dateFormat.value.map((format) => {
    return { format, dateText: dateFormatterProvider.get(format).format(currentDate.value) }
  })
})
</script>

<template>
  <div>
    <h1>Sandbox01</h1>
    <p>このコンポーネント内部で日付のフォーマットを実行</p>

    <table>
      <thead>
        <tr>
          <th>フォーマット</th>
          <th>フォーマット済みテキスト</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="d of formattedDates" :key="d.format">
          <tr>
            <td>{{ d.format }}</td>
            <td>{{ d.dateText }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
