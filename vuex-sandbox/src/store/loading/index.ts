import { Module } from "vuex";
import { State } from "..";

type LoadingState = {
  count: number;
};

const loading: Module<LoadingState, State> = {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    show(state) {
      state.count++;
    },
    hide(state) {
      state.count--;
    },
  },
  getters: {
    visible(state) {
      return state.count > 0;
    },
  },
};

export { LoadingState, loading };
