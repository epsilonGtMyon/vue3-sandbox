<template>
  <div>
    <button @click="showInfo">showInfo</button>
    <button @click="showConfirm">showConfirm</button>
    <button @click="showError">showError</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useMessageDialog } from "@/components/dialog/useMessageDialog";

export default defineComponent({
  name: "Sandbox01",
  setup() {
    const messageDialog = useMessageDialog();
    const router = useRouter()


    const showInfo = async () => {
      await messageDialog.info(`情報メッセージ
改行もできる`);
    };

    const showConfirm = async () => {
      const x = await messageDialog.confirm(`あれこれします。
よろしいですか？`);

      if (x) {
        await messageDialog?.info("はい");
      } else {
        await messageDialog?.error("いいえ");
      }
    };

    const showError = async () => {
      await messageDialog.error(`エラーだよーん`);

      setTimeout(()=> {
        router.push('/home')
      }, 2000)
    };
    return { showInfo, showConfirm, showError };
  },
});
</script>
