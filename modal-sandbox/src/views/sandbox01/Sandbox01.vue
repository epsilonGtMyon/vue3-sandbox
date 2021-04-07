<template>
  <div>
    <table class="sand01-table">
      <template v-for="r in accountRows" :key="r.id">
        <tr>
          <td>{{ r.id }}</td>
          <td>{{ r.firstName }}</td>
          <td>{{ r.familyName }}</td>
          <td>
            <button class="button is-primary" @click="showModal(r.id)">
              編集
            </button>
          </td>
        </tr>
      </template>
    </table>

    <Sandbox01Modal ref="sandbox01Modal" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ModalLauncher } from "@/components/modal/ModalLauncher";
import Sandbox01Modal from "./Sandbox01Modal.vue";

//型はいい加減です。

type AccountRow = {
  id: number;
  firstName: string;
  familyName: string;
};

type SandModalResult = {
  firstName: string;
  familyName: string;
};

export default defineComponent({
  name: "Sandbox01",
  components: {
    Sandbox01Modal,
  },
  setup() {
    const sandbox01Modal = ref(null);
    const accountRows = ref<AccountRow[]>([]);

    onMounted(() => {
      accountRows.value = [
        { id: 1, firstName: "一郎", familyName: "田中" },
        { id: 2, firstName: "二郎", familyName: "伊藤" },
        { id: 3, firstName: "三郎", familyName: "北島" },
      ];
    });

    const showModal = async (id: number) => {
      const account = accountRows.value.filter((x) => x.id === id)[0];
      const r = await ModalLauncher.show<SandModalResult>(sandbox01Modal, {
        firstName: account.firstName,
        familyName: account.familyName,
      });
      if (r.isNotCompleted()) {
        //キャンセルされたりしたとき
        return;
      }

      //OKおされて結果が返ってきた
      const cr = r.completeResult();

      //これっていいのかな...
      account.firstName = cr.firstName;
      account.familyName = cr.familyName;
    };

    return { sandbox01Modal, accountRows, showModal };
  },
});
</script>

<style lang="scss" scoped>
.sand01-table {
  td {
    border: 1px solid black;
    width: 100px;
  }
}
</style>