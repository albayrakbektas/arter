import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingPage: true,
    isDesktopView: true,
    isLeftMenuActive: false,
    isRightMenuActive: false,
    isSubItems: false,
    isSubItem: false,
    xSlideIndex: 0,
    xPosition: 0,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
