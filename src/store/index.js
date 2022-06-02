import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalVisible: false,
    modalComponent: null, // 내용은 동적으로 변할 것이기 때문에
    LoadingStatus: false,
  },
  mutations: {
    openModal(state, componentName) {
      state.modalVisible = true;
      state.modalComponent = componentName;
    },
    closeModal(state) {
      state.modalVisible = false;
    },
    setToggle(state, toggle) {
      state.toggle = toggle;
    },
    startSpinner(state) {
      state.LoadingStatus = true;
    },
    endSpinner(state) {
      state.LoadingStatus = false;
    },
  },
  actions: {},
  modules: {},
});
