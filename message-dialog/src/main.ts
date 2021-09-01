import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Dialog from "./components/dialog/Dialog.vue";
import { MessageDialog } from "./components/dialog/MessageDialog";
import { messageDialogKey } from "./components/dialog/messageDialogKey";

const app = createApp(App);
app.use(store);
app.use(router);
app.component(Dialog.name, Dialog);

//ここでnewしているが 別のところでnewしておくとコンポーネント外から呼ぶことができる。(良いか悪いかは別にして..)
const messageDialog = new MessageDialog();
//こうすることでコンポーネントツリーのどこからでもinjectできる。
app.provide(messageDialogKey, messageDialog);
//今回はOptions API使わないので こっちは見本、もし使うなら 型情報が必要
app.config.globalProperties.$messageDialog = messageDialog;

app.mount("#app");
