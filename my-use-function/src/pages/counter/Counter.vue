<template>
  <div>
    <h1>カウンター</h1>
    <div><button @click="increment">１増える</button>{{ counterRef }}</div>
    <div><button @click="increment2">２増える</button>{{ counterRef2 }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounter } from "@/shared/usefunctions/useCounter/useCounter";

export default defineComponent({
  name: "Counter",
  setup() {
    const u = useCounter();
    const u2 = useCounter(2);
    return {
      counterRef: u.counter,
      increment: u.increment,

      counterRef2: u2.counter,
      increment2: u2.increment,
    };
  },
});
</script>
