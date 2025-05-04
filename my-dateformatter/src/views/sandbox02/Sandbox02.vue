<script setup lang="ts">
import { useCurrentDate } from '@/lib/currentdate/useCurrentDate'
import MyDateFormat from '@/lib/dateformat/vue/component/MyDateFormat.vue'
import { ref } from 'vue'

const { currentDate } = useCurrentDate()
const dateFormat = ref(['yyyy/MM/dd', 'yyyy/M/d', 'yyyy/MM/dd HH:mm:ss', 'yyyy/MM/dd HH:mm:ss.SSS'])
</script>

<template>
  <div>
    <h1>Sandbox02</h1>
    <p>日付フォーマット用のコンポーネントMyDateFormatを作成</p>

    <table>
      <thead>
        <tr>
          <th>フォーマット</th>
          <th>コンポーネントそのまま</th>
          <th>コンポーネントからフォーマット済みテキスト受け取る</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="df of dateFormat" :key="df">
          <tr>
            <td>{{ df }}</td>
            <td><MyDateFormat :date="currentDate" :format="df" /></td>
            <td>
              <MyDateFormat :date="currentDate" :format="df" v-slot="{ formattedDate }">
                <span style="color: red">{{ formattedDate }}</span>
              </MyDateFormat>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
