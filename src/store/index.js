/* eslint-disable arrow-parens */
import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [],
    menuClick: [],
  },
  mutations: {
    getMenu(state, data) {
      state.menu = data;
    },
    select(state, id) {
      const data = state.menu.result.filter(item => item.id === id);
      const selectrow = state.menuClick.filter(card => card.id === id);
      if (state.menuClick.length === 0 || selectrow[0] === undefined) {
        state.menuClick.unshift(data[0]);
      } else {
        if (data.id === selectrow[0].id) {
          const currentId = state.menuClick.map(item => item.id).indexOf(id);
          state.menuClick.splice(currentId, 1);
          return;
        }
        state.menuClick.unshift(data[0]);
      }
    },
  },
  actions: {
    getApi(context) {
      Axios.get('http://localhost:8000/api/v1/menu')
        .then((result) => {
          context.commit('getMenu', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});
