import './main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')

// GitHub Pages用
const subProjectPagePath = sessionStorage.getItem('subProjectPagePath')
if (subProjectPagePath != null) {
  sessionStorage.removeItem('subProjectPagePath')
  router.replace(`/${subProjectPagePath}`)
}
