<template>
  <div class="toastContainer toastContainer__top">
  </div>
  <div class="toastContainer toastContainer__bottom"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToastContainer",
  components: {
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.toastContainer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 2em;
  pointer-events: none;

  display: flex;

  // 上から配置するコンテナ
  &.toastContainer__top {
    flex-direction: column;
  }
  // 下から配置するコンテナ
  &.toastContainer__bottom {
    flex-direction: column-reverse;
  }
}
</style>
