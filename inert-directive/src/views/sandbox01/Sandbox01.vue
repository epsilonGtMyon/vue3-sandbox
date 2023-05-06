<script setup lang="ts">
import { ref } from "vue";

const inert = ref(false);
const input1 = ref("");

function toggleInert() {
  inert.value = !inert.value;
}
</script>

<template>
  <div class="sandbox01">
    <h1>Sandbox01</h1>
    <div>
      <p>直接inertにbooleanをバインディングする。</p>
      <p>正直これで事足りると思う</p>
    </div>

    <div class="sandbox01-buttonArea">
      <button @click="toggleInert">toggleInert</button>
    </div>
    <div class="sandbox01-inertArea" :inert="inert">
      <h2>inert領域</h2>
      <input v-model="input1" />
    </div>
    <div class="sandbox01-noinertArea">
      <h2>非inert領域</h2>
      <input v-model="input1" />
    </div>
  </div>
</template>

<style scoped>
* [inert] {
  background-color: gray;
}
.sandbox01 {
  height: 80vh;
}

.sandbox01-inertArea {
  height: 200px;
}

.sandbox01-noinertArea {
  height: 200px;
}
</style>
