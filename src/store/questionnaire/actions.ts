import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { QuestionnaireStateInterface } from './state';
import { Questionnaire } from 'src/helpers/models';

const actions: ActionTree<QuestionnaireStateInterface, StateInterface> = {
  setQuestionnaire(context, value: Questionnaire) {
    context.commit('SET_QUESTIONNAIRE', value);
  },
};

export default actions;
