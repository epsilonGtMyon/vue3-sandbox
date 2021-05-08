<template>
  <nav>
    <router-link to="/">home</router-link> |
    <router-link to="/sandbox01">sandbox01</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
