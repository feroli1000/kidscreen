import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { QuestionnaireStateInterface } from './state';

const getters: GetterTree<QuestionnaireStateInterface, StateInterface> = {
  getQuestionnaireNumber(state) {
    return state.questionnaire_number;
  },

  getPersonType(state) {
    return state.person_type;
  },
};

export default getters;
