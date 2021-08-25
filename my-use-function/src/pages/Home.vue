<template>
  <div class="home">
    <ul>
      <template v-for="route in routes" :key="route.path">
        <li>
          <router-link :to="route.path">{{ route.label }}</router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const routes = ref<{ path: string; label: string }[]>([]);

    onMounted(() => {
      routes.value = [
        { path: "/counter", label: "カウンター" },
        { path: "/mouseposition", label: "マウス位置" },
        { path: "/interval", label: "インターバル" },
      ];
    });

    return {
      routes,
    };
  },
});
</script>
