import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./common/router";

import "./assets/main.css";

import { inputFiltersKey } from "@/common/components/strictinput/inputfilter/inputFiltersKey";
import { createInputFilterMap } from "@/common/components/strictinput/inputfilter/createInputFilterMap";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const inputFilters = createInputFilterMap();
app.provide(inputFiltersKey, inputFilters);

app.mount("#app");


const subProjectPagePath = sessionStorage.getItem("subProjectPagePath")
if (subProjectPagePath != null) {
  sessionStorage.removeItem("subProjectPagePath");
  router.push(`/${subProjectPagePath}`)
}
