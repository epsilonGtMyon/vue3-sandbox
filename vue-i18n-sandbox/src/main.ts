import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'ja',
  // メッセージ
  messages: {
    en: {
      global: {
        message: {
          hello: 'hello world',
          confirm: 'Do you {0} ?',
        },
        word: {
          register: 'Register',
          login: 'Login',
        },
      },
      local: {},
    },
    ja: {
      global: {
        message: {
          hello: 'こんにちは、世界',
          confirm: '{0} しますか?',
        },
        word: {
          register: '登録',
          login: 'ログイン',
        },
      },
      local: {},
    },
  },
  // 日付フォーマット
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
    ja: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      },
    },
  },
})

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')

// GitHub Pages用
const subProjectPagePath = sessionStorage.getItem('subProjectPagePath')
if (subProjectPagePath != null) {
  sessionStorage.removeItem('subProjectPagePath')
  router.replace(`/${subProjectPagePath}`)
}
