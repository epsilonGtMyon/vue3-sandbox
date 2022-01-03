<template>
  <div class="sandbox02">
    <h1>Sandbox02</h1>

    <pre>コンポーネント数が0のときは、ウィンドウサイズを変更しても コンソールにログが出ない
1以上の時はログがでるが、この回数はコンポーネント数とは独立したものになっている。
またコンポーネント数が0になると、リスナーが解除されるため、コンソールにログが出なくなる。</pre>
    <div>
      <button @click="add">+</button>
      <button @click="minus">-</button>
    </div>
    コンポーネント数: {{count}}
    <template v-for="i of count" :key="i">
      <window-size-box />
    </template>
  </div>
</template>

<script>
import { ref } from "vue";
import WindowSizeBox from "./WindowSizeBox.vue";
export default {
  name: "Sandbox02",
  components: {
    WindowSizeBox,
  },
  setup() {
    const count = ref(0);

    const add = () => {
      count.value++;
    };

    const minus = () => {
      if (count.value > 0) {
        count.value--;
      }
    };
    return {
      count,
      add,
      minus,
    };
  },
};
</script>
