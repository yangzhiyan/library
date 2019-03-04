import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import common from './modules/common'
import user from './modules/user'
export default new Vuex.Store({
  modules:{
    common,
    user
  }
})
