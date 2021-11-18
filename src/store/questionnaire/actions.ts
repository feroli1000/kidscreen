import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { QuestionnaireStateInterface } from './state';

const actions: ActionTree<QuestionnaireStateInterface, StateInterface> = {
  setQuestionnaireNumber(context, value: number) {
    context.commit('SET_QUESTIONNAIRE_NUMBER', value);
  },
  setPersonType(context, value: number) {
    context.commit('SET_PERSON_TYPE', value);
  },
};

export default actions;
