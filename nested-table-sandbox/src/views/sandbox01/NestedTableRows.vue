<template>
  <template v-for="rec in records" :key="rec.code">
    <tr>
      <td>{{ rec.code }}</td>
      <td>{{ rec.name }}</td>
    </tr>
    <template v-if="rec.children && rec.children.length > 0">
      <nested-table-rows :records="rec.children" :level="nextLevel">
      </nested-table-rows>
    </template>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "NestedTableRows",
  props: {
    records: {
      type: Array,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const nextLevel = computed(() => props.level + 1);
    return { nextLevel };
  },
});
</script>
