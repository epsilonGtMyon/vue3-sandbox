<template>
  <h1>sandbox01</h1>
  <div>value01:{{ value01 }}</div>
  <div>value02:{{ value02 }}</div>

  <div>
    <my-checkbox v-model="value01" type="primary">abc </my-checkbox>
    <my-checkbox v-model="value02" type="danger" trueValue="xxx" falseValue="">abc </my-checkbox>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Sandbox01",
  setup() {
    const value01 = ref(false);
    const value02 = ref("");
    return { value01, value02 };
  },
});
</script>
