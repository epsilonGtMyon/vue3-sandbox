<template>
  <div class="sandbox01">
    <h1>Sandbox01</h1>

    <pre>
      onScopeDispose はスコープが廃棄されるときに呼ばれるコールバック
      コンポーネントの場合は onUnmounted と似ている
      (コンソールログ参照)
    </pre>

  
  </div>
</template>

<script>
import { onScopeDispose, onBeforeUnmount, onUnmounted } from "vue";

export default {
  name: "Sandbox01",
  setup() {
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    onScopeDispose(() => {
      console.log("onScopeDispose");
    });

    return {};
  },
};
</script>
