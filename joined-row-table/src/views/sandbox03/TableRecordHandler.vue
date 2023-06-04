<script setup>
import { computed } from "vue";
const props = defineProps({
  records: {
    type: Array,
    required: true,
  },
});

const definitions = [
  { name: "record1", extractor: (x) => x.children },
  { name: "record2", extractor: (x) => x.children },
  { name: "record3", extractor: undefined },
];

// いい名前が思い浮かばないのでとりあえずxxx
// 再帰的にループして リーフの内容で展開
function xxx(records, context, level) {
  const array = [];
  const isLeaf = level == definitions.length - 1;
  const definistion = definitions[level];

  //[`${definistion.name}First`]: first
  for (const record of records) {
    const nextContext = {
      ...context,
      [definistion.name]: record,
    };

    if (isLeaf) {
      array.push(nextContext);
    } else {
      const children = definistion.extractor(record);

      // いい名前が思い浮かばないのでとりあえずyyy
      // 直下の要素をleafで展開した状態のモノを取得
      const yyy = xxx(children, nextContext, level + 1);
      let first = true;
      for (const y of yyy) {
        // leafで展開したときの最初の要素がtdの出力要素となる
        y[`${definistion.name}First`] = first;
        first = false;
        array.push(y);
      }
    }
  }

  return array;
}


const computedRecords = computed(() => {
  return xxx(props.records, {}, 0);
});
</script>

<template>
  <template v-for="record in computedRecords">
    <slot v-bind="record"></slot>
  </template>
</template>
