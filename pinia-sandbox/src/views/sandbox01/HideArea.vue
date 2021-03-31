<template>
  <div>
    <button @click="hide">hide</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useLoadingStore } from "@/piniastore/loading/useLoadingStore";

export default defineComponent({
  setup() {
    const loadingStore = useLoadingStore();

    const hide = () => {

      //actionで変更することもできるし
      //loadingStore.loadingCount++
      //  とstateを直接触ることもできる。
      //loadingStore.$patch({loadingCount: loadingStore.loadingCount + 1})
      //  と変更の状態を適用することもできる。
      loadingStore.hide();
    };
    return {
      hide,
    };
  },
});
</script>
