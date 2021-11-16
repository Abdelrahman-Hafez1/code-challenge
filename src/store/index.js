import Vue from "vue";
import Vuex from "vuex";
import 'core-js/es6/symbol';
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    side: Boolean,
    sideOpened: Boolean,
  },
  mutations: {
    openSidebar(state) {
      state.sideOpened = true;
      state.side = true;
    },
    closeSidebar(state) {
      state.sideOpened = false;
      state.side = false;
    },
    toggleSideBar(state) {
      state.sideOpened = !state.sideOpened;
    },
  },
  actions: {
    getTabs() {
      return new Promise((resolve, reject) => {
        axios
          .get("https://prime-crowd.com/api/mock/rounds")
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {},
});
