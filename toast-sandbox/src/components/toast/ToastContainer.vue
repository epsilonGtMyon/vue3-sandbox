<template>
  <div class="toastContainer toastContainer__top">
    <template v-for="t in topToasts" :key="t.id">
      <Toast
        :id="t.id"
        :type="t.type"
        :message="t.message"
        :position="t.position"
        :timeoutMills="t.timeoutMills"
        @clickClosed="clickClosed"
        @timeout="timeout"
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
        @clickClosed="clickClosed"
        @timeout="timeout"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import Toast from "./Toast.vue";
import { ToastProp } from "./type/ToastProp";

export default defineComponent({
  name: "ToastContainer",
  components: {
    Toast,
  },
  props: {
    toasts: {
      type: Array as PropType<ToastProp[]>,
      require: true,
    },
  },
  emits: ["clickClosed", "timeout"],
  setup(props, { emit }) {
    const clickClosed = (id: string): void => emit("clickClosed", id);
    const timeout = (id: string): void => emit("timeout", id);

    const topToasts = computed(() => {
      return props.toasts?.filter((x) => x.position.startsWith("is-top"));
    });
    const bottomToasts = computed(() => {
      return props.toasts?.filter((x) => x.position.startsWith("is-bottom"));
    });
    return {
      topToasts,
      bottomToasts,

      clickClosed,
      timeout,
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
