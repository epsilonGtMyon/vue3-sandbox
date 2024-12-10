<script setup lang="ts">
import { useService1 } from '@/common/bl/service/service1/service1'

const service1 = useService1();

function doService() {
  service1.doService()
}
</script>

<template>
  <main>sandbox01

    <button @click="doService">service</button>
  </main>
</template>
