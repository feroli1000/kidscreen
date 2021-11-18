export interface QuestionnaireStateInterface {
  questionnaire_number: number;
  person_type: number; // 1 - Young   2 - Parents
}

function state(): QuestionnaireStateInterface {
  return {
    questionnaire_number: 0,
    person_type: 0,
  };
}

export default state;
