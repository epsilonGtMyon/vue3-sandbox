<template>
  <div>
    <h1>インターバル(画面遷移時に自動で廃棄)</h1>

    <section>
      <input type="text" v-model="text" />
      <button @click="start">start</button>
    </section>
    <section>
      <input type="number" v-model.number="stopId" />
      <button @click="stop">stop</button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useInterval } from "@/shared/usefunctions/useInterval/useInterval";

export default defineComponent({
  name: "Interval",
  setup() {
    const { setMyInterval, clearMyInterval } = useInterval();
    const text = ref("");
    const stopId = ref(0);

    const start = () => {
      const t = text.value;

      const id = setMyInterval(() => {
        console.log(`interval:${t}`);
      }, 2000);
      console.log(id);
      stopId.value = id
    };

    const stop = () => {
      clearMyInterval(stopId.value);
    };

    return {
      text,
      stopId,

      start,
      stop,
    };
  },
});
</script>
