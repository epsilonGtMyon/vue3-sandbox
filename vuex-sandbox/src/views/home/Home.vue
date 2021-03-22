<template>
  <div class="home">
    <ul>
      <li>
        <router-link to="/sandbox01">Sandbox01</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    return {};
  },
});
</script>
