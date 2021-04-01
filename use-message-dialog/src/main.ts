import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MessageDialog from '@/components/messagedialog/MessageDialog.vue'

const app = createApp(App).use(router);

app.component(MessageDialog.name, MessageDialog);
app.mount("#app");
