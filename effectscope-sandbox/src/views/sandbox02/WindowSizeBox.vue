<template>
  <div class="windowSizeBox">
    ({{width}}, {{height}})
  </div>
</template>

<script>
import { useWindowSize2 } from "./useWindowSize2";

export default {
  name: "WindowSizeBox",
  setup() {
    const windowSize = useWindowSize2();

    return {
      width: windowSize.width,
      height: windowSize.height,
    };
  },
};
</script>

<style scoped>
.windowSizeBox {
  border: 1px black solid;
  width: 100px;
  height: 100px;
}
</style>
