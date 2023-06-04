<script setup>
const props = defineProps({
  records: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <template v-for="(record1, i1) in records" :key="i1">
    <template v-for="(record2, i2) in record1.children" :key="i2">
      <template v-for="(record3, i3) in record2.children" :key="i3">
        <slot
          v-bind="{
            record1,
            record2,
            record3,
            i2,
            i3,
          }"
        ></slot>
      </template>
    </template>
  </template>
</template>
