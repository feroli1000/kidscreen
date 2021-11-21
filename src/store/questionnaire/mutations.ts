import { MutationTree } from 'vuex';
import { QuestionnaireStateInterface } from './state';
import {  Questionnaire } from 'src/helpers/models';

const mutation: MutationTree<QuestionnaireStateInterface> = {
  RESET(state: QuestionnaireStateInterface) {
    state.questionnaire = new Questionnaire();
  },
  SET_QUESTIONNAIRE(
    state: QuestionnaireStateInterface,
    value: Questionnaire
  ) {
    state.questionnaire = value;
  },
};

export default mutation;
