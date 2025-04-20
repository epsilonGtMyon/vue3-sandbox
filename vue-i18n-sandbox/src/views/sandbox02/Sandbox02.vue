<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const nowDate = ref(new Date()) // もしくはDate.now()でも可

const formats = ref(['short', 'long'])
</script>

<template>
  <div>
    <h1>Sandbox02</h1>

    <table>
      <tbody>
        <tr>
          <td></td>
          <td>{{ $d(nowDate) }}</td>
        </tr>
        <template v-for="format of formats" :key="format">
          <tr>
            <td>{{ format }}</td>
            <td>{{ $d(nowDate, format) }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
