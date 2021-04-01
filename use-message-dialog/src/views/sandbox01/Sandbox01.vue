<template>
  <div>
    <button @click="showMessage1">ダイアログ１</button>
    <button @click="showMessage2">ダイアログ２</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMessage } from "@/components/messagedialog/useMessage";

export default defineComponent({
  name: "Sandbox01",
  setup() {
    const message = useMessage();

    const showMessage1 = async () => {
      const x = await message.confirm("あれこれします。\nよろしいですか？");
      console.log(x);
    };

    const showMessage2 = async () => {
      const x = await message.error("だめです");
      console.log(x);
    };
    return {
      showMessage1,
      showMessage2,
    };
  },
});
</script>
