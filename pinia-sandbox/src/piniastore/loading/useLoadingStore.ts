import { defineStore } from "pinia";

const useLoadingStore = defineStore({
  id: "loading",
  state: () => ({
    loadingCount: 0,
  }),
  getters: {
    visibleLoading() {
      return this.loadingCount > 0;
    },
  },
  actions: {
    show() {
      this.loadingCount++;
    },
    hide() {
      if (this.loadingCount > 0) {
        this.loadingCount--;
      } else {
        console.warn(this.loadingCount);
      }
    },
  },
});

export { useLoadingStore };
