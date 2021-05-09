import { createStore } from "vuex";

export default createStore({
  state: {
    logined: true,
  },
  mutations: {
    setLogined(state, logined) {
      state.logined = logined;
    },
  },
  actions: {},
  modules: {},
});
