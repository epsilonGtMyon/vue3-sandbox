<template>
  <div>
    moduleを試す
    <button @click="doLoad">loading</button>
    <template v-if="visibleLoading"> {{ loadingCount }}:loading... </template>
  </div>
</template>


<script lang="ts">
import { useAppStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Sandbox02",
  setup() {
    const store = useAppStore();

    const loadingCount = computed(() => store.state.loading?.count);
    const visibleLoading = computed(() => store.getters["loading/visible"]);

    const doLoad = () => {
      store.commit("loading/show");
      setTimeout(() => {
        store.commit("loading/hide");
      }, 1000);
    };
    return { loadingCount, visibleLoading, doLoad };
  },
});
</script>
