import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { QuestionnaireStateInterface } from './state';

const getters: GetterTree<QuestionnaireStateInterface, StateInterface> = {
  getQuestionnaire(state) {
    return state.questionnaire;
  },

  /* getQuestionnaireClone(state): QuestionnaireInterface {
    return <Questionnaire>JSON.parse(JSON.stringify(state.questionnaire));
  }, */
};

export default getters;
