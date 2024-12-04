import "../assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { provideLogic1 } from "@/lib/logic/logic1/logic1Di";
import { provideService1 } from "@/lib/service/service1/service1Di";
import { provideCounter } from "@/lib/composition/counter/counterDi";
import { provideAppLogic1 } from "./logic/logic1/appLogic1Di";
import { provideAppCounter } from "./composition/counter/useAppCounterDi";

const app = createApp(App);

app.use(createPinia());
app.use(router);

provideLogic1(app);
provideService1(app);
provideCounter(app);

// -------
// 部品を上書き
provideAppLogic1(app)
provideAppCounter(app)

app.mount("#app");
