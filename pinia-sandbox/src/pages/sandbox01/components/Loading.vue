<script setup lang="ts">
import { useLoadingStore } from "@/common/stores/loading";
import { computed } from "@vue/reactivity";

const loading = useLoadingStore();

const visible = computed(() => loading.isShown);
</script>

<template>
  <div class="loading" v-if="visible">
    <div class="loading-mark"></div>
  </div>
</template>

<style scoped>
.loading {
  position: absolute;

  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
  cursor: wait;
}

.loading-mark {
  height: 40px;
  width: 40px;
  border-radius: 40px;

  border: 4px solid gray;
  border-right-color: transparent;
  border-bottom-color: transparent;

  animation: rotation 0.5s linear infinite;
}
</style>
