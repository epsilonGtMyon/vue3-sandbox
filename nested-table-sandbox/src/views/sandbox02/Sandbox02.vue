<template>
  <div class="sandbox02">
    Sandbox02
    行の情報はslotで
    <table class="myTable">
      <thead>
        <tr>
          <th>コード</th>
          <th>部署名</th>
          <th>量</th>
        </tr>
      </thead>
      <tbody>
        <nested-table-rows :records="depts" v-slot:default="{ record }">
          <td>{{ record.code }}</td>
          <td>{{ record.name }}</td>
          <td>{{ record.amount }}</td>
        </nested-table-rows>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import NestedTableRows from "./NestedTableRows.vue";
import { DataGenerator } from "../DataGenerator";

export default defineComponent({
  name: "Sandbox02",
  components: {
    NestedTableRows,
  },
  setup() {
    const depts = ref(DataGenerator.generateData());

    return {
      depts,
    };
  },
});
</script>