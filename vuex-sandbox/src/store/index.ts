import { InjectionKey } from "vue";
import { createStore, Store, useStore } from "vuex";
import { loading, LoadingState } from "./loading";

interface State {
  count: number;
  loading?: LoadingState,
}
//型情報を教えるためのキーらしい
const key: InjectionKey<Store<State>> = Symbol();

//moduleの型つけられへんのかな？？
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
  modules: {
    loading,
  },
});

function useAppStore(): Store<State> {
  return useStore(key);
}

export { State, key, store, useAppStore };
