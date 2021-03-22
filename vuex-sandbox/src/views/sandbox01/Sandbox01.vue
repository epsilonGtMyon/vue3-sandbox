<template>
  <div class="sandbox01">
    <div>
      <button @click="increment1">加算１</button>
      <button @click="increment2">加算２</button>
    </div>
    <div>
      <button @click="decrement1">減算１</button>
      <button @click="decrement2">減算２</button>
    </div>

    <hr />
    {{ count }}:{{ isPositiveCount }}
  </div>
</template>


<script lang="ts">
import { computed, defineComponent } from "vue";
import { useAppStore } from "@/store";

export default defineComponent({
  name: "Sandbox01",
  setup() {
    const store = useAppStore();

    //Composition APIではこうするらしい
    //stateやgetterはcomputedで参照する。
    const count = computed(() => store.state.count);
    const isPositiveCount = computed(() => store.getters.isPositiveCount);

    const increment1 = () => {
      store.commit("increment", { count: 1 });
    };
    const increment2 = () => {
      store.commit("increment", { count: 2 });
    };
    const decrement1 = () => {
      store.commit("decrement", { count: 1 });
    };
    const decrement2 = () => {
      store.commit("decrement", { count: 2 });
    };

    return {
      count,
      isPositiveCount,
      increment1,
      increment2,
      decrement1,
      decrement2,
    };
  },
});
</script>
