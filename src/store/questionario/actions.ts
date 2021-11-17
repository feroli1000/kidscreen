import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { QuestionarioStateInterface } from './state';

const actions: ActionTree<QuestionarioStateInterface, StateInterface> = {
  setNumero(context, valor: number) {
    context.commit('SET_NUMERO', valor);
  },
  setTipo(context, valor: number) {
    context.commit('SET_TIPO', valor);
  },
};

export default actions;
