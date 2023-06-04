<script setup>
import { ref } from "vue";
import RenderComponent from "./RenderComponent.vue";

const records = ref([
  { firstName: "太郎", familyName: "田中" },
  { firstName: "一郎", familyName: "山本" },
  { firstName: "二郎", familyName: "中山" },
]);

function add() {
  records.value.push({ firstName: "X郎", familyName: "あああ" });
}
</script>

<template>
  <div>
    <button @click="add">add</button>
    <RenderComponent :records="records">
      <template #default="rec">
        <div>{{ rec.firstName }}:{{ rec.familyName }}</div>
      </template>
    </RenderComponent>
  </div>
</template>
