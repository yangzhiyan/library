import {SELECTED_FACTORY_NAME} from "../mutation-types";

const state = {
  selectedFactoryName : 0,//保存所选的工厂列表中的列表名的index
};

const getters = {
  selectedFactoryName : state => state.selectedFactoryName,
};

const actions = {
  changeSelect({commit},payload){
    commit('SELECTED_FACTORY_NAME', payload)
  },
};

const mutations = {
  [SELECTED_FACTORY_NAME](state,payload){
    state.selectedFactoryName = payload;
  }
};

export default ({
  state,
  getters,
  mutations,
  actions
})
