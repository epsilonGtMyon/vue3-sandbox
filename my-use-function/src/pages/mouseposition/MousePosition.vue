<template>
  <div>
    <h1>マウスの位置情報</h1>

    ({{ x }}, {{ y }})
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMousePosition } from "@/shared/usefunctions/useMousePosition/useMousePosition";

export default defineComponent({
  setup() {
    const { x, y } = useMousePosition();

    return { x, y };
  },
});
</script>
