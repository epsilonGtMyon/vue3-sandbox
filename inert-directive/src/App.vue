<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/sandbox01">Sandbox01</RouterLink> | 
        <RouterLink to="/sandbox02">Sandbox02</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
