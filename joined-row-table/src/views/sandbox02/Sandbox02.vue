<script setup>
import { ref, computed } from "vue";
import { getRecords } from "@/business/record/getRecords";
import { setupRowspan } from "@/business/record/setupRowspan";

import TableRecordHandler from "./TableRecordHandler.vue";

const rawRecords = getRecords();
setupRowspan(rawRecords);

const records = ref(rawRecords);

const recordsJson = computed(() => {
  return JSON.stringify(records.value, null, 2);
});
</script>

<template>
  <div>
    <h1>ループロジックの移動</h1>
    <div>
      <p>
        TableRecordHandlerというコンポーネントにループ周りのロジックを移動
        コンポーネントの中でループのロジックをハードコーディングで記述している。
      </p>
      <p>
        ループのロジックを切り出したりしてカスタマイズできるようにするのが目標
      </p>
    </div>

    <table class="grid">
      <thead>
        <tr>
          <th>部</th>
          <th>部長</th>
          <th>課</th>
          <th>課長</th>
          <th>メンバー</th>
        </tr>
      </thead>
      <tbody>
        <TableRecordHandler :records="records">
          <template #default="{ record1, record2, record3, i2, i3 }">
            <tr>
              <template v-if="i2 === 0 && i3 === 0">
                <td :rowspan="record1.rowspan">
                  {{ record1.bu }}
                </td>

                <td :rowspan="record1.rowspan">
                  <input v-model="record1.buLeader" />
                </td>
              </template>

              <template v-if="i3 === 0">
                <td :rowspan="record2.rowspan">
                  {{ record2.ka }}
                </td>

                <td :rowspan="record2.rowspan">
                  <input v-model="record2.kaLeader" />
                </td>
              </template>

              <td :rowspan="record3.rowspan">
                {{ record3.name }}
              </td>
            </tr>
          </template>
        </TableRecordHandler>
      </tbody>
    </table>
  </div>

  <div>
    <pre>{{ recordsJson }}</pre>
  </div>
</template>
