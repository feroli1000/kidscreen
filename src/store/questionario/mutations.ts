import { MutationTree } from 'vuex';
import { QuestionarioStateInterface } from './state';

const mutation: MutationTree<QuestionarioStateInterface> = {
  SET_NUMERO(state: QuestionarioStateInterface, valor: number) {
    state.numero = valor;
  },
  SET_TIPO(state: QuestionarioStateInterface, valor: number) {
    state.tipo = valor;
  },
};

export default mutation;
