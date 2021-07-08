<template>
  <div class="sandbox01">
    Sandbox01
    内部でハードコーディング
    <table class="myTable">
      <thead>
        <tr>
          <th>コード</th>
          <th>部署名</th>
        </tr>
      </thead>
      <tbody>
        <nested-table-rows :records="depts"> </nested-table-rows>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import NestedTableRows from "./NestedTableRows.vue";
import { DataGenerator } from "../DataGenerator";
export default defineComponent({
  name: "Sandbox01",
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