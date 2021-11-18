import { MutationTree } from 'vuex';
import { QuestionnaireStateInterface } from './state';

const mutation: MutationTree<QuestionnaireStateInterface> = {
  SET_QUESTIONNAIRE_NUMBER(state: QuestionnaireStateInterface, value: number) {
    state.questionnaire_number = value;
  },
  SET_PERSON_TYPE(state: QuestionnaireStateInterface, value: number) {
    state.person_type = value;
  },
};

export default mutation;
