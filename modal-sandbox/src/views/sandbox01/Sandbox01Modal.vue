<template>
  <Modal
    title="Sandbox01モーダル"
    modalType="is-primary"
    @shown="shown"
    @closed="closed"
  >
    <div>
      <label
        >姓
        <input type="text" v-model="familyName" />
      </label>
    </div>

    <div>
      <label
        >名
        <input type="text" v-model="firstName" />
      </label>
    </div>
    <template #footer>
      <div style="display: flex; justify-content: flex-end">
        <button class="button is-primary" @click="doOk">OK</button>
        <div style="width: 10px"></div>
        <button class="button" @click="doCancel">Cancel</button>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useModalCloser } from "@/components/modal/useModalCloser";

type Sandbox01ModalParam = {
  firstName?: string;
  familyName?: string;
};
export default defineComponent({
  name: "Sandbox01Modal",
  setup() {
    const modalCloser = useModalCloser();

    const firstName = ref("");
    const familyName = ref("");

    const shown = (param: Sandbox01ModalParam) => {
      firstName.value = param?.firstName || "";
      familyName.value = param?.familyName || "";
    };

    const closed = () => {
      firstName.value = "";
      familyName.value = "";
    };

    const doOk = () => {
      const r = {
        firstName: firstName.value,
        familyName: familyName.value,
      };
      modalCloser.close(r);
    };
    const doCancel = () => {
      modalCloser.cancel();
    };

    return { firstName, familyName, shown, closed, doOk, doCancel };
  },
});
</script>


