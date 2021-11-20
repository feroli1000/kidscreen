import { MutationTree } from 'vuex';
import { QuestionnaireStateInterface } from './state';
import { QuestionnaireInterface, Questionnaire } from 'src/helpers/models';

const mutation: MutationTree<QuestionnaireStateInterface> = {
  RESET(state: QuestionnaireStateInterface) {
    state.questionnaire = new Questionnaire();
  },
  SET_QUESTIONNAIRE(
    state: QuestionnaireStateInterface,
    value: QuestionnaireInterface
  ) {
    state.questionnaire = value;
  },
};

export default mutation;
