<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

function showAlert() {
  // Composition APIで使う
  alert(i18n.t('global.message.confirm', [i18n.t('global.word.register')]))
}
</script>

<template>
  <div>
    <h1>Sandbox01</h1>
    <div>{{ $t('global.message.hello') }}</div>
    <button @click="showAlert">メッセージ</button>
  </div>
</template>
