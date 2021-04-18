<template>
  <div class="toastContainer toastContainer__top">
    <template v-for="t in topToasts" :key="t.id">
      <Toast
        :id="t.id"
        :type="t.type"
        :message="t.message"
        :position="t.position"
        :timeoutMills="t.timeoutMills"
        @clickClosed="removeToast"
        @timeout="removeToast"
      />
    </template>
  </div>
  <div class="toastContainer toastContainer__bottom">
    <template v-for="t in bottomToasts" :key="t.id">
      <Toast
        :id="t.id"
        :type="t.type"
        :message="t.message"
        :position="t.position"
        :timeoutMills="t.timeoutMills"
        @clickClosed="removeToast"
        @timeout="removeToast"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import Toast, { ToastProp } from "./Toast.vue";

export default defineComponent({
  name: "ToastContainer",
  components: {
    Toast,
  },
  setup() {
    const _toasts = ref<ToastProp[]>([]);

    onMounted(() => {
      let id = 1;
      setInterval(() => {
        id++;

        _toasts.value.push({
          id: String(id),
          type: ["primary", "success", "warning", "danger"][id%4] as any,
          message: `aaa${id}`,
          position: ["is-top-left", "is-bottom-left"][id%2]as any,
          timeoutMills: 3000,
        });
      }, 500);
    });

    const removeToast = (id: string) => {
      _toasts.value = _toasts.value.filter((x) => x.id !== id);
    };

    const topToasts = computed(() => {
      return _toasts.value.filter((x) => x.position.startsWith("is-top"));
    });
    const bottomToasts = computed(() => {
      return _toasts.value.filter((x) => x.position.startsWith("is-bottom"));
    });
    return {
      topToasts,
      bottomToasts,

      removeToast,
    };
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
