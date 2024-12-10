import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './common/router'
import { setContainer, SimpleContainer } from './common/di/simpleContainer'
import { keyLogic1, registerLogic1 } from './common/bl/logic/logic1/logic1'
import { registerService1 } from './common/bl/service/service1/service1'
import { AppLogic1 } from './common/bl/logic/logic1/appLogic1'


// ----
const container = new SimpleContainer()
setContainer(container)

registerService1(container)
registerLogic1(container)

// --
// 上書き
container.register(keyLogic1, () => new AppLogic1())

// ----


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')