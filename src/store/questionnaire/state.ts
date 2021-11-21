import { Questionnaire } from 'src/helpers/models';

export interface QuestionnaireStateInterface {
  questionnaire: Questionnaire;
}

function state(): QuestionnaireStateInterface {
  return {
    questionnaire: new Questionnaire(),
  };
}

export default state;
