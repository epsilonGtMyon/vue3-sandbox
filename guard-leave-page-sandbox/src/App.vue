<script setup lang="ts">
import { ref } from 'vue'
const pages = ref([
  { name: 'Home', path: '/' },
  { name: 'Sandbox01', path: '/sandbox01' },
  { name: 'Sandbox02', path: '/sandbox02' },
])
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <template v-for="p of pages" :key="p.name">
          <RouterLink :to="p.path">
            {{ p.name }}
          </RouterLink>
          |
        </template>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
