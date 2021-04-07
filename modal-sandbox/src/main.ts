import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Modal from "@/components/modal/Modal.vue";

import "@/assets/style.scss";

const app = createApp(App)
  .use(store)
  .use(router);

app.component(Modal.name, Modal);

app.mount("#app");
