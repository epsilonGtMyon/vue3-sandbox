<template>
  <tr class="expandable" :class="`level-${level}`" @click="toggleChildren">
    <slot :record2="record" :level2="level"></slot>
  </tr>
  <template v-if="expanded && record.children && record.children.length > 0">
    <template v-for="childRecord in record.children" :key="childRecord.code">
      <!-- ここの渡し方が再帰のポイント -->
      <nested-table-row
        :record="childRecord"
        :level="nextLevel"
        v-slot:default="{ record2, level2 }"
      >
        <slot :record2="record2" :level2="level2"></slot>
      </nested-table-row>
    </template>
  </template>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from "vue";

export default defineComponent({
  name: "NestedTableRow",
  props: {
    record: {
      type: Object,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const expanded = ref(false);
    const nextLevel = computed(() => props.level + 1);

    const toggleChildren = () => (expanded.value = !expanded.value);

    return { expanded, nextLevel, toggleChildren };
  },
});
</script>

<style lang="scss" scoped>
.expandable {
  cursor: pointer
}
</style>