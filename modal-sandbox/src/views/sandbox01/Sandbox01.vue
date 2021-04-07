<template>
  <div>
    <button class="button is-primary" @click="showModal">モーダル起動</button>
    <button class="button is-warning" @click="showModal">モーダル起動</button>
    <button class="button is-danger" @click="showModal">モーダル起動</button>

    <Sandbox01Modal ref="sandbox01Modal" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ModalLauncher } from "@/components/modal/ModalLauncher";
import Sandbox01Modal from "./Sandbox01Modal.vue";
export default defineComponent({
  name: "Sandbox01",
  components: {
    Sandbox01Modal,
  },
  setup() {
    const sandbox01Modal = ref(null);

    const showModal = async () => {
      await ModalLauncher.show(sandbox01Modal);
    };

    return { sandbox01Modal, showModal };
  },
});
</script>
