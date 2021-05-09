<template>
  <div class="home">
    <ul>
      <li><a href="#" @click.prevent="toSandbox01">aaa</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter();

    const toSandbox01 = () => {
      router.push({
        path: "/sandbox01",
        query: {
          text01: "abc",
          num01: 12,
        },
      });
    };

    return {
      toSandbox01,
    };
  },
});
</script>
