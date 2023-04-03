import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/common/router'

import { MyPlugin } from '@/common/stores/plugins/myplugin/MyPlugin'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(MyPlugin)

app.use(pinia)
app.use(router)

app.mount('#app')
