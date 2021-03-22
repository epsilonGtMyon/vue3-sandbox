import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store, useStore } from "vuex";

interface State {
  count: number;
}
//型情報を教えるためのキーらしい
const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.count;
    },
    decrement(state, payload) {
      state.count -= payload.count;
    },
  },
  getters: {
    isPositiveCount(state) {
      return state.count > 0;
    },
  },
  actions: {},
  modules: {},
});

function useAppStore(): Store<State> {
  return useStore(key);
}

export { State, key, store, useAppStore };
