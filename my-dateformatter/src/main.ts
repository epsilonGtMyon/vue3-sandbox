import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { myDateFormater } from './lib/dateformat/vue/plugin'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(myDateFormater)

app.mount('#app')
