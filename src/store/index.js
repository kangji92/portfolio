import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalVisible: false,
    modalComponent: null, // 내용은 동적으로 변할 것이기 때문에
  },
  mutations: {
    showModal(state, componentName) {
      state.modalVisible = true;
      state.modalComponent = componentName;
    },
    hideModal(state) {
      state.modalVisible = false;
    },
  },
  actions: {},
  modules: {},
});
