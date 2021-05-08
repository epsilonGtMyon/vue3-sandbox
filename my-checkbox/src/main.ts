import { createApp } from "vue";
import router from "./router";

//-----
import MyCheckbox from "./components/checkbox/MyCheckbox.vue";

import App from "./App.vue";

import "./assets/style.scss"

const app = createApp(App);
app.use(router);

app.component(MyCheckbox.name, MyCheckbox);

app.mount("#app");
