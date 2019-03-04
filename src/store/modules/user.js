import storage from '../../utils/storage';
import {
  SET_USER_INFO,
  SET_USER_PWD
} from "../mutation-types";

let userInfo = storage.getStorage('userInfo');
let userPwd = storage.getStorage('savePwd');
// console.log(userPwd);
const state = {
  userInfo: userInfo || {},
  userPwd: userPwd || {}
};

const getters = {
  userInfo: state => state.userInfo,
  userPwd: state => state.userPwd
};

const actions = {
  setUserInfo({
    commit
  }, payload) {
    commit('SET_USER_INFO', payload)
  },
  setUserPwd({
    commit
  }, payload) {
    commit('SET_USER_PWD', payload)
  }
};

const mutations = {
  [SET_USER_INFO](state, payload) {
    state.userInfo = payload;
  },
  [SET_USER_PWD](state, payload) {
    state.userPwd = payload;
  }
};

export default ({
  state,
  getters,
  mutations,
  actions
})
