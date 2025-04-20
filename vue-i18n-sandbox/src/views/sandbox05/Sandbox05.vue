<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

onMounted(() => {
  setTimeout(() => {
    const getLocaleMessageJa = i18n.getLocaleMessage('ja') as any
    if (getLocaleMessageJa?.local?.message?.sandbox05) {
      // 既に読み込まれているかの判定に使える？
      console.log('メッセージがすでにある')
      return
    }

    i18n.mergeLocaleMessage('ja', {
      local: {
        message: {
          sandbox05: {
            mes01: 'サンドボックス05メッセージ',
          },
        },
      },
    })

    i18n.mergeLocaleMessage('en', {
      local: {
        message: {
          sandbox05: {
            mes01: 'Sandbox05 message',
          },
        },
      },
    })
    // --
    // 別のページの情報をセットしてもlocal.message.sandbox05が消えないか確認

    i18n.mergeLocaleMessage('ja', {
      local: {
        message: {
          sandbox05x: {
            mes01: 'サンドボックス05xメッセージ',
          },
        },
      },
    })

    i18n.mergeLocaleMessage('en', {
      local: {
        message: {
          sandbox05x: {
            mes01: 'Sandbox05x message',
          },
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
    <h1>Sandbox05</h1>
    <div>mergeLocaleMessageでローカルメッセージを追加</div>
    <div>{{ $t('global.message.hello') }}</div>
    <div>{{ $t('local.message.sandbox05.mes01') }}</div>
    <div>{{ $t('local.message.sandbox05x.mes01') }}</div>
    <hr />
    <button @click="printLocaleOnConsole">console</button>
  </div>
</template>
