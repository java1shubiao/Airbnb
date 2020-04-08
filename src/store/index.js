import Vuex from 'vuex'
import Vue from 'vue'
import async from 'async'
import state from './state'
import mutations from './mutations'
import action from './action'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: action
  })
export default store