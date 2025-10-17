<script setup lang="ts">
import { ref } from 'vue'
const pages = ref([
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
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
