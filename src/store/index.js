/**
 * Created by haojun on 2018/6/3.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations'; 
import getters from './getters';
import actions from './actions';
Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
