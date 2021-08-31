import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Dialog from './components/dialog/Dialog.vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.component(Dialog.name, Dialog)

app.mount('#app')
