import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { createGlobalErrorHandler } from "./errors/createGlobalErrorHandler";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// グローバルなエラーハンドラはapp.config.errorHandlerで設定
// エラーハンドラーが作動するためにはemitやwatchなどのvueのライフサイクルから例外をスローする必要があり、
// setTimeoutや直接domにイベントハンドラをアタッチしてそこから例外がスローされた場合は作動しない。
// エラーハンドラーの仕組みは有用ではあるが、正常にハンドリングしてもらうためにはこういった注意が必要
// 実際のところライフサイクル外のところからハンドリングしてほしいところも出てきそうだから、
// エラーハンドラは汎用的なモノを別で作っておいて、それをライフサイクル内/外両方から使えるようにしておいたほうがよさそう
app.config.errorHandler = createGlobalErrorHandler(router);

app.mount("#app");
