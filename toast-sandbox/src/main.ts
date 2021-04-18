import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/style.scss";

import ToastContainer from "@/components/toast/ToastContainer.vue";

const app = createApp(App)
  .use(store)
  .use(router);

app.component(ToastContainer.name, ToastContainer);

app.mount("#app");
