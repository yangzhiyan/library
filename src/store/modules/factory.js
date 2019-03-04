import storage from '../../utils/storage';
import {
  SET_USER_FACTORYS,
  SET_SELECTED_FACTORY
} from "../mutation-types";
let selectedFactory = storage.getStorage('selectedFactory');
let userFactorys = storage.getStorage('userFactorys');
const state = {
  userFactorys: userFactorys || [],
  selectedFactory: selectedFactory || {}
};

const getters = {
  userFactorys: state => state.userFactorys,
  selectedFactory: state => state.selectedFactory
};

const actions = {
//   setUserFactorys({
//     commit
//   }, payload) {
//     commit(SET_USER_FACTORYS, payload)
//   },
  setSelectedFactory({
    commit
  }, payload) {
    commit(SET_SELECTED_FACTORY, payload)
  },
};

const mutations = {
//   [SET_USER_FACTORYS](state, payload) {
//     state.userFactorys = payload;
//   },
  [SET_SELECTED_FACTORY](state, payload) {
    state.selectedFactory = payload;
  }
};

export default ({
  state,
  getters,
  mutations,
  actions
})