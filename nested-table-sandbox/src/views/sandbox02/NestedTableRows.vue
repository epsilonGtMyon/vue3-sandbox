<template>
  <template v-for="record in records" :key="record.code">
    <tr :class="`level-${level}`">
      <slot :record="record" :level="level"></slot>
    </tr>
    <template v-if="record.children && record.children.length > 0">
      <!-- ここの渡し方が再帰のポイント -->
      <nested-table-rows
        :records="record.children"
        :level="nextLevel"
        v-slot:default="{ record, level }"
      >
        <slot :record="record" :level="level"></slot>
      </nested-table-rows>
    </template>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

//トグル開閉をしようとすると状態は行ごとに持たないとダメなので
//もう一つコンポーネントをかまさないとダメかな？
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
