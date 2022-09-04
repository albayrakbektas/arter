import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingPage: true,
    isFullScreen: false,
    isDesktopView: window.innerWidth > 900,
    isLeftMenuActive: false,
    isRightMenuActive: false,
    isRightMenuNotActive: true,
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
