<template>
  <!-- 冗長すぎるな...-->

  <!-- 上段左 -->
  <div class="toastContainer toastContainer__top toastContainer__left">
    <template v-for="t in topLeftToasts" :key="t.id">
      <Toast
        :id="t.id"
        :type="t.type"
        :message="t.message"
        :timeoutMills="t.timeoutMills"
        @clickClosed="clickClosed"
        @timeout="timeout"
      />
    </template>
  </div>
  <!-- 上段中心 -->
  <div class="toastContainer toastContainer__top toastContainer__center">
    <template v-for="t in topCenterToasts" :key="t.id">
      <Toast
        :id="t.id"
        :type="t.type"
        :message="t.message"
        :timeoutMills="t.timeoutMills"
        @clickClosed="clickClosed"
        @timeout="timeout"
      />
    </template>
  </div>
  <!-- 上段右 -->
  <div class="toastContainer toastContainer__top toastContainer__right">
    <template v-for="t in topRightToasts" :key="t.id">
      <Toast
        :id="t.id"
        :type="t.type"
        :message="t.message"
        :timeoutMills="t.timeoutMills"
        @clickClosed="clickClosed"
        @timeout="timeout"
      />
    </template>
  </div>

  <!-- 下段左 -->
  <div class="toastContainer toastContainer__bottom toastContainer__left">
    <template v-for="t in bottomLeftToasts" :key="t.id">
      <Toast
        :id="t.id"
        :type="t.type"
        :message="t.message"
        :timeoutMills="t.timeoutMills"
        @clickClosed="clickClosed"
        @timeout="timeout"
      />
    </template>
  </div>
  <!-- 下段中心 -->
  <div class="toastContainer toastContainer__bottom toastContainer__center">
    <template v-for="t in bottomCenterToasts" :key="t.id">
      <Toast
        :id="t.id"
        :type="t.type"
        :message="t.message"
        :timeoutMills="t.timeoutMills"
        @clickClosed="clickClosed"
        @timeout="timeout"
      />
    </template>
  </div>
  <!-- 下段右 -->
  <div class="toastContainer toastContainer__bottom toastContainer__right">
    <template v-for="t in bottomRightToasts" :key="t.id">
      <Toast
        :id="t.id"
        :type="t.type"
        :message="t.message"
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
import { ToastParam } from "./type/ToastParam";
import { ToastPosition } from "./type/ToastPosition";

export default defineComponent({
  name: "ToastContainer",
  components: {
    Toast,
  },
  props: {
    toasts: {
      type: Array as PropType<ToastParam[]>,
      required: true,
    },
  },
  emits: ["clickClosed", "timeout"],
  setup(props, { emit }) {
    const clickClosed = (id: string): void => emit("clickClosed", id);
    const timeout = (id: string): void => emit("timeout", id);

    const _filterAndReverseToast = (
      toasts: ToastParam[],
      position: ToastPosition
    ) => {
      //リバースしておかないと表示順が逆になるので
      //topなら新しいほうを上に出したい
      //bottomなら新しいほうを下に出したい
      //なので通常方向に積み上げてはだめ
      return toasts.filter((t) => t.position === position).reverse();
    };

    const topLeftToasts = computed(() => {
      return _filterAndReverseToast(props.toasts, "is-top-left");
    });
    const topCenterToasts = computed(() => {
      return _filterAndReverseToast(props.toasts, "is-top-center");
    });
    const topRightToasts = computed(() => {
      return _filterAndReverseToast(props.toasts, "is-top-right");
    });

    const bottomLeftToasts = computed(() => {
      return _filterAndReverseToast(props.toasts, "is-bottom-left");
    });
    const bottomCenterToasts = computed(() => {
      return _filterAndReverseToast(props.toasts, "is-bottom-center");
    });
    const bottomRightToasts = computed(() => {
      return _filterAndReverseToast(props.toasts, "is-bottom-right");
    });

    return {
      topLeftToasts,
      topCenterToasts,
      topRightToasts,
      bottomLeftToasts,
      bottomCenterToasts,
      bottomRightToasts,

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

  //左側
  &.toastContainer__left .toast {
    align-self: flex-start;
  }
  //中心
  &.toastContainer__center .toast {
    align-self: center;
  }
  //右側
  &.toastContainer__right .toast {
    align-self: flex-end;
  }
}
</style>
