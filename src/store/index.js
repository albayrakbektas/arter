import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingPage: true,
    isLeftMenuActive: false,
    isRightMenuActive: false,
    isSubItems: false,
    isSubItem: false,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
