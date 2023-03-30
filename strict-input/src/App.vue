<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink> | 
    <RouterLink to="/sandbox01">Sandbox01</RouterLink>
  </header>
  <RouterView />
</template>

<style scoped></style>
