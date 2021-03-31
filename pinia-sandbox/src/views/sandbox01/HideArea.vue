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
      loadingStore.hide();
    };
    return {
      hide,
    };
  },
});
</script>
