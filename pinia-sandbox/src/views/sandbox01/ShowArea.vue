<template>
  <div>
    <button @click="show">show</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useLoadingStore } from "@/piniastore/loading/useLoadingStore";

export default defineComponent({
  setup() {
    const loadingStore = useLoadingStore();

    const show = () => {
      loadingStore.show();
    };
    return {
      show,
    };
  },
});
</script>
