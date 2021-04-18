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
import { defineComponent } from "vue";
import { useSetupToast } from "./components/toast/useSetupToast";

export default defineComponent({
  setup() {
    const toast = useSetupToast();

    return {
      toasts: toast.toasts,
      removeToast: toast.removeToast,
    };
  },
});
</script>
