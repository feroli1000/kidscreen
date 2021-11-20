import { QuestionnaireInterface, Questionnaire } from 'src/helpers/models';

export interface QuestionnaireStateInterface {
  questionnaire: QuestionnaireInterface;
}

function state(): QuestionnaireStateInterface {
  return {
    questionnaire: new Questionnaire(),
  };
}

export default state;
