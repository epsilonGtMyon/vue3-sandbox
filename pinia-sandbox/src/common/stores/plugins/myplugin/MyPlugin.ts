import type { PiniaPluginContext } from "pinia";
import { ref } from "vue";

function MyPlugin(context: PiniaPluginContext) {
  console.log("MyPlugin");
  console.log(context.store.$id);
  const store = context.store;

  if (store.$id === "loading") {
    // 状態を増やすことができる。
    // 型定義はこんな感じで追加する。
    // https://pinia.vuejs.org/core-concepts/plugins.html#typescript
    store.$state.hasError = ref(false);
  }

  // stateのログ出力
  store.$subscribe((mutation, state) => {
    console.log({...state});
  });
}

export { MyPlugin };
