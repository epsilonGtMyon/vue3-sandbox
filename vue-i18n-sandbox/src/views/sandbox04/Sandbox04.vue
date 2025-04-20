<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

onMounted(() => {
  setTimeout(() => {
    i18n.mergeLocaleMessage('ja', {
      global: {
        message: {
          yahoo: 'やほー!',
        },
      },
    })

    i18n.mergeLocaleMessage('en', {
      global: {
        message: {
          yahoo: 'Yahoo!',
        },
      },
    })
  }, 2000)
})

function printLocaleOnConsole() {
  const getLocaleMessageJa = i18n.getLocaleMessage('ja')
  console.log('getLocaleMessageJa', JSON.parse(JSON.stringify(getLocaleMessageJa)))

  const messages = i18n.messages.value
  console.log('messages', JSON.parse(JSON.stringify(messages)))
}
</script>

<template>
  <div>
    <h1>Sandbox04</h1>
    <div>mergeLocaleMessageだと上手い事マージされてる。</div>
    <div>{{ $t('global.message.hello') }}</div>
    <div>{{ $t('global.message.yahoo') }}</div>
    <hr />
    <button @click="printLocaleOnConsole">console</button>
  </div>
</template>
