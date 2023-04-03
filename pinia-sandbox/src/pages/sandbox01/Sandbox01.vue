<script setup lang="ts">
import { useLoadingStore } from '@/common/stores/loading';
import Loading from './components/Loading.vue'


const loading = useLoadingStore();

function show() {
  loading.show()
}

function hide() {
  loading.hide()
}
function hideForce() {
  loading.hideForce()
}

</script>

<template>
  <div class="sandbox01">
    <div>
      <button @click="show">show</button>
      <button @click="hide">hide</button>
      <button @click="hideForce">hideForce</button>
    </div>
    <div>
      {{ loading.loadingCounter }}: {{ loading.isShown }}
    </div>
    <div class="sandbox01-loadingContainer">
      <Loading />
    </div>
  </div>
</template>

<style scoped>
.sandbox01 {
  height: 100%;
}
.sandbox01-loadingContainer {
  height: 500px;
}
</style>