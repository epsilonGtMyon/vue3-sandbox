<script setup lang="ts">
import { ref } from "vue";
import { vInert } from "./vInert";

const inert = ref(false);
const input1 = ref("")

function toggleInert() {
  inert.value = !inert.value;
}
</script>

<template>
  <div class="sandbox02">
    <h1>Sandbox02</h1>
    <div>
      <p>inert用のディレクティブを作成し、それ経由で変更する。</p>
      <p>ディレクティブを経由することでbinding以外のものも判定条件に使えたりするとかかな？</p>
    </div>

    <div class="sandbox02-buttonArea">
      <button @click="toggleInert">toggleInert</button>
    </div>
    <div class="sandbox02-inertArea" v-inert="inert">
      <h2>inert領域</h2>
      <input v-model="input1"/>
    </div>
    <div class="sandbox02-noinertArea">
      <h2>非inert領域</h2>
      <input v-model="input1"/>
    </div>
  </div>
</template>

<style scoped>
* [inert] {
  background-color: gray;
}
.sandbox02 {
  height: 80vh;
}

.sandbox02-inertArea {
  height: 200px;
}

.sandbox02-noinertArea {
  height: 200px;
}
</style>
