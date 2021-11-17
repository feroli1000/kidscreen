import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { QuestionarioStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const QuestionarioModule: Module<QuestionarioStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default QuestionarioModule;
