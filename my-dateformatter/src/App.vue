<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const pages = ref([
  { name: 'Home', path: '/' },
  { name: 'Sandbox01', path: '/sandbox01' },
  { name: 'Sandbox02', path: '/sandbox02' },
  { name: 'Sandbox03', path: '/sandbox03' },
  // { name: 'Sandbox04', path: '/sandbox04' },
  // { name: 'Sandbox05', path: '/sandbox05' },
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

<style scoped></style>
