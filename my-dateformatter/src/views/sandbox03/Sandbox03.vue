<script setup lang="ts">
import { useCurrentDate } from '@/lib/currentdate/useCurrentDate'
import { ref } from 'vue'

const { currentDate } = useCurrentDate()
const dateFormats = ref([
  'yyyy/MM/dd',
  'yyyy/M/d',
  'yyyy/MM/dd HH:mm:ss',
  'yyyy/MM/dd HH:mm:ss.SSS',
])
</script>

<template>
  <div>
    <h1>Sandbox03</h1>
    <p>globalPropertiesに$mydfというプロパティを追加し、テンプレート上でフォーマットを実行</p>

    <table>
      <thead>
        <tr>
          <th>フォーマット</th>
          <th>フォーマット済みテキスト</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="df of dateFormats" :key="df">
          <tr>
            <td>{{ df }}</td>
            <td>
              <span style="color: red">{{ $mydf(currentDate, df) }}</span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
