<template>
  <div class="sandbox01">
    <textarea v-model="message"></textarea>

    <div>
      <button class="button is-primary" @click="showPrimary">primary</button>
      <button class="button is-warning" @click="showWarning">warning</button>
      <button class="button is-danger" @click="showDanger">danger</button>
    </div>

    <div>
      <button class="button is-primary" @click="showPrimaryBottom">
        primary
      </button>
      <button class="button is-warning" @click="showWarningBottom">
        warning
      </button>
      <button class="button is-danger" @click="showDangerBottom">danger</button>
    </div>
    <div>
      <button class="button is-success" @click="clear">clear</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useToast } from "@/components/toast/useToast";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Sandbox01",
  setup() {
    const message = ref<string>("test");

    const toast = useToast();

    const showPrimary = () => {
      toast.primary(message.value, "is-top-left");
    };
    const showWarning = () => {
      toast.warning(message.value, "is-top-center");
    };
    const showDanger = () => {
      toast.danger(message.value, "is-top-right");
    };

    const showPrimaryBottom = () => {
      toast.primary(message.value, "is-bottom-left");
    };
    const showWarningBottom = () => {
      toast.warning(message.value, "is-bottom-center");
    };
    const showDangerBottom = () => {
      toast.danger(message.value, "is-bottom-right");
    };

    const clear = () => {
      toast.clear();
    };
    return {
      message,
      showPrimary,
      showWarning,
      showDanger,

      showPrimaryBottom,
      showWarningBottom,
      showDangerBottom,

      clear,
    };
  },
});
</script>
