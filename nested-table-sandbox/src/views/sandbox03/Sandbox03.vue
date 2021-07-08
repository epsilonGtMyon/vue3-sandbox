<template>
  <div class="sandbox03">
    Sandbox03 行の情報はslotで
    <table class="myTable">
      <thead>
        <tr>
          <th>コード</th>
          <th>部署名</th>
          <th>量</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="dept in depts" :key="dept.code">
          <nested-table-row :record="dept" v-slot:default="{ record2 }">
            <td>{{ record2.code }}</td>
            <td>{{ record2.name }}</td>
            <td>{{ record2.amount }}</td>
          </nested-table-row>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import NestedTableRow from "./NestedTableRow.vue";
import { DataGenerator } from "../DataGenerator";

export default defineComponent({
  name: "Sandbox03",
  components: {
    NestedTableRow,
  },
  setup() {
    const depts = ref(DataGenerator.generateData());

    return {
      depts,
    };
  },
});
</script>
