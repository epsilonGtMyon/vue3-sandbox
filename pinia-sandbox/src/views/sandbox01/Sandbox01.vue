<template>
  <div class="sandbox01">
    <div>
      sandbox01

      <HideArea />
      <ShowArea />
    </div>
    <div class="loading">
      <div>{{ loadingCount }}</div>

      <div class="overlay" v-if="visibleLoading"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import HideArea from "./HideArea.vue";
import ShowArea from "./ShowArea.vue";

import { useLoadingStore } from "@/piniastore/loading/useLoadingStore";

export default defineComponent({
  name: "Sandbox01",
  components: {
    HideArea,
    ShowArea,
  },
  setup() {
    const loadingStore = useLoadingStore();

    const loadingCount = computed(() => loadingStore.loadingCount);
    const visibleLoading = computed(() => loadingStore.visibleLoading);

    return {
      loadingCount,
      visibleLoading,
    };
  },
});
</script>

<style lang="scss" scoped>
.sandbox01 {
  height: 500px;
  display: flex;
  flex-direction: column;

  .loading {
    position: relative;
    flex-grow: 1;
  }
  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
