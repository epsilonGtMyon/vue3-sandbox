<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/sandbox01">Sandbox01</router-link>
  </div>
  <router-view />

  <ToastContainer
    :toasts="toasts"
    @clickClosed="removeToast"
    @timeout="removeToast"
  />
</template>


<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import {
  ToastPublisher,
  toastPublisherKey,
} from "./components/toast/ToastPublisher";
import { ToastProp } from "./components/toast/type/ToastProp";

export default defineComponent({
  setup() {
    const toasts = ref<ToastProp[]>([]);
    const toastPublisher = new ToastPublisher(toasts);
    provide(toastPublisherKey, toastPublisher);
    const removeToast = (id: string) => {
      toasts.value = toasts.value.filter((x) => x.id !== id);
    };

    return {
      toasts,
      removeToast,
    };
  },
});
</script>
